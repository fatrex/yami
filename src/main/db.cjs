const path = require('path')
const Datastore = require('@seald-io/nedb')

const accountsDb = new Datastore({ filename: path.join(process.cwd(), '/data/accounts.db'), autoload: true })

const saveAccount = ({ host, port, secure, user, password }) => {
  return new Promise((resolve, reject) => {
    accountsDb.update({ user }, { host, port, secure, user, password }, { upsert: true }, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const getAccount = (user) => {
  return new Promise((resolve, reject) => {
    accountsDb.findOne({ user }, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const getAccounts = () => {
  return new Promise((resolve, reject) => {
    accountsDb.find({}, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = {
  saveAccount,
  getAccount,
  getAccounts
}