import { useEffect, useState, ComponentProps } from "react"
import { hasMobile, hasTouch, getUserAgent } from "@/utils/browser"

/**
 * Responsive touchable body.
 * @param props inherited html body props
 * @returns 
 */
export default function Body ({...props}: ComponentProps<'body'>) 
{
  const [_classname, setClassname] = useState("")

  useEffect(() => {
    setClassname(`${hasTouch()} ${hasMobile()} ${getUserAgent()} ${props.className}`)
  }, []);

  return (
    <body {...props} className={_classname}>
      {props.children}
    </body>
  )
}