export function createElement (type, props, ...args) {
  const children = args.filter(isRenderable).map(item => {
    if (typeof item === 'string') {
      return createElement(
        'TEXT NODE', 
        {
          nodeValue: item
        }
      )
    } else {
      return item
    }
  })
  const newProps = { ...props, children }
  return {
    type,
    props: newProps
  }
}

function isRenderable (item) {
  return item != null && typeof item !== 'boolean'   
}