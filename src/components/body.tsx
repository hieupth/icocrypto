import { ReactNode, useEffect, useState } from "react"
import { isMobile, isTouch, getUserAgent } from "@/utils/browser"


export default function Body({ 
  extraClasses, 
  children 
} : Readonly<{ 
  extraClasses?: string, 
  children?: ReactNode 
}>) {
  
  const [_isTouch, setTouch] = useState(false);
  const [_isMobile, setMobile] = useState(false);
  const [_userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setTouch(isTouch());
    setMobile(isMobile());
    setUserAgent(getUserAgent());
  });

  return (
    <body 
      className={
        `nk-body body-wider mode-onepage
        ${_userAgent.toLowerCase()}
        ${_isMobile ? "as-mobile" : ""} 
        ${_isTouch ? "has-touch" : "no-touch"} 
        ${extraClasses ? extraClasses : ""} `}
    >
      {children}
    </body>
  );
}