export function initViewport() {
  const width = 375;
  const scale = window.innerWidth / width
  let meta = document.querySelector('meta[name=viewport]')
  let content = `width=${width}, init-scale=${scale}, user-scalable=no`
  if(!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}