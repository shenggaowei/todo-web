export const getStorage = (key: string) => {
  let response = {}
  let localCache = localStorage.getItem(key) || ''
  try {
      if (localCache !== 'null') {
      response = JSON.parse(localCache)
      }
  } catch (e) {
      response = localCache
  }
  return response
}

export const setStorage = (key: string, value: any) => {
  if (typeof value !== 'string') {
      value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}