export const storage_key_prefix = 'todo_web_'

export const account_key = 'account'

export function getStorage<T = any>(key: string): T {
  let response = {}
  let localCache = localStorage.getItem(storage_key_prefix + key) || ''
  try {
    if (localCache !== 'null') {
      response = JSON.parse(localCache)
    }
  } catch (e) {
    response = localCache
  }
  return response as T
}

export const setStorage = (key: string, value: any) => {
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(storage_key_prefix + key, value)
}