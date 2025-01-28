/**
 * Combine classname with element name.
 * @param element element name.
 * @param classname classnames to be combined.
 * @returns combined classname.
 */
export function combineClassname(
  element?: string,
  classname?: Array<string>
) {
  return [
    element ? element : '',
    classname?.map((c) => {
      return element ? `${element}-${c}` : c
    }).join(' ')
  ].join(' ').trim()
}