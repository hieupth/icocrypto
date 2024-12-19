import { ReactNode, useEffect, useState, ComponentProps } from "react"
import { getMobile, getTouch, getUserAgent } from "@/utils/browser"


interface BodyProps extends ComponentProps<'body'> {
  children?: ReactNode
}

export default function Body({ 
  children,
  ...props
} : BodyProps)
{
  const [_hasTouch, setTouch] = useState('');
  const [_hasMobile, setMobile] = useState('');
  const [_userAgent, setUserAgent] = useState('');

  useEffect(() => {
    setTouch(getTouch());
    setMobile(getMobile());
    setUserAgent(getUserAgent().toLowerCase());
  });

  return (
    <body className={`${_userAgent} ${_hasTouch} ${_hasMobile} ${props.className}`} {...props}>
      {children}
    </body>
  );
}