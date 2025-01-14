/**
 * Generate classname of an element.
 * @param e element. Example: btn.
 * @param cls classname of element.
 * @param ecls element classname will be combined. Example: btn-primary
 * @returns 
 */
export const genclassname = (
  e?: string,
  cls?: string,
  ecls?: Array<string>
) => {
  return [
    e ? e : '',
    cls ? cls : '',
    ecls?.map((x) => {return e ? `${e}-${x}` : x})
  ].join(' ').trim()
}