const { ImapFlow } = require('imapflow')
const mailParser = require('mailparser').simpleParser

const createClient = ({ host, port, secure, user, pass }) => {
  return new ImapFlow({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    emitLogs: false,
    logger: false
  })
}

const retrieveMessages = async (account, { maxMessages = 10, folder = 'INBOX'}) => {
  const client = createClient({ ...account, pass: account.password });
  await client.connect()
  let lock = await client.getMailboxLock(folder)
  const messages = []
  try {
    const status = await client.status(folder, { messages: true })
    for await (const message of client.fetch(`${status.messages - maxMessages}:${status.messages}`, {
      envelope: true,
      labels: true,
      flags: true,
    })) {
      messages.push(message)
    }
  } finally {
    lock.release()
  }
  await client.logout();
  return messages;
}

const retrieveFolders = async (account) => {
  const client = createClient({ ...account, pass: account.password });
  await client.connect()
  const foldersTree = await client.listTree();
  await client.logout();
  return foldersTree;
}

const openMessage = async (account, messageSeq) => {
  const client = createClient({ ...account, pass: account.password })
  await client.connect();
  let lock = await client.getMailboxLock('INBOX');
  let message = null
  try {
    message = await client.fetchOne(messageSeq, { envelope: true, source: true,  });
  } finally {
      lock.release();
  }
  await client.logout();
  return {
    ...message,
    source: await mailParser(message.source)
  };
}

module.exports = {
  retrieveMessages,
  retrieveFolders,
  openMessage
}
