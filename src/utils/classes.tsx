export const makeElementClassname = (
  element: string, 
  className?: string,
  elementClassname?: Array<string>
) => {
  return [
    element,
    className,
    elementClassname?.map((x) => {return `${element}-${x}`})
  ].join(' ').trim()
}