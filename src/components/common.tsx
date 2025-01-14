import { ReactNode, useEffect, useState, ComponentProps } from "react"
import { hasMobile, hasTouch, getUserAgent } from "@/utils/browser"
import { genclassname } from "@/utils/classname";


/**
 * Responsible HTML body. 
 * @returns 
 */
export function Body({ 
  children,
  ...props
} : {
  children?: ReactNode
} & ComponentProps<"body">)
{
  const [_hasTouch, setTouch] = useState("");
  const [_hasMobile, setMobile] = useState("");
  const [_userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setTouch(hasTouch());
    setMobile(hasMobile());
    setUserAgent(getUserAgent().toLowerCase());
  }, []);

  return (
    <body {...props} className={`${_userAgent} ${_hasTouch} ${_hasMobile} ${props.className}`}>
      {children}
    </body>
  );
}


/**
 * HTML anchor element.
 * @param e element.
 * @param ecls element combined classname. 
 * @returns 
 */
export function Anchor({
  e,
  ecls,
  children,
  ...props
} : {
  e: string,
  ecls: Array<string>,
  children?: ReactNode
} & ComponentProps<"a">) 
{
  return <a {...props} className={genclassname(e, props.className, ecls)} >{children}</a>
}