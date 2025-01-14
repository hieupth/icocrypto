import { ReactNode, useEffect, useState, ComponentProps } from "react"
import { hasMobile, hasTouch, getUserAgent } from "@/utils/browser"


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
  const [_hasTouch, setTouch] = useState('');
  const [_hasMobile, setMobile] = useState('');
  const [_userAgent, setUserAgent] = useState('');

  useEffect(() => {
    setTouch(hasTouch());
    setMobile(hasMobile());
    setUserAgent(getUserAgent().toLowerCase());
  });

  return (
    <body className={`${_userAgent} ${_hasTouch} ${_hasMobile} ${props.className}`} {...props}>
      {children}
    </body>
  );
}