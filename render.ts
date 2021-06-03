import { Element } from './types'
export function render (element: Element, container: HTMLElement | Text, callback?:any) {
  const { type, props } = element
  const dom = isTextNode(type) ? document.createTextNode('') : document.createElement(type)
  Object.keys(props).filter(isListener).forEach(key => {
    const eventType = key.substring(2).toLowerCase()
    const listener = props[key]
    dom.addEventListener(eventType, listener)
  })
  Object.keys(props).filter(isAttr).forEach(key => {
    dom[key] = props[key]
  })
  const children = props.children || []
  children.forEach(child => render(child, dom))
  container.appendChild(dom)
  callback()
}
function isTextNode (type) {
  return type === 'TEXT NODE'
}
function isListener (name: string) {
  return name.startsWith('on')
}
function isAttr (name: string) {
  return !isListener(name) && name !== 'children'
}