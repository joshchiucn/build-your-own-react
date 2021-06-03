export interface Element {
  type: string,
  props: ElementProps
}
interface ElementProps {
  children?: Element[],
  nodeValue?: string,
  onClick?: () => void
}