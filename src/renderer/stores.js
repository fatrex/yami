import { writable } from 'svelte/store'

export const messages = writable([]);
export const folders = writable([]);
export const accounts = writable([]);

export const currentAccount = writable({
  host: null,
  port: 993,
  secure: true,
  user: null,
  password: null
})