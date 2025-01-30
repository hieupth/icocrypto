import { ComponentProps, useEffect, useRef } from "react";
import Navbar from "@/ui/blocks/navbar";

/**
 * Header section.
 * @param props same as div props. 
 * @returns 
 */
export default function Header (props: ComponentProps<'div'>) 
{
  const headerRef = useRef<HTMLElement>(null);

  const onScolled = (e: any) => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add('has-fixed');
    } else {
      headerRef.current?.classList.remove('has-fixed');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScolled);
    return(() => {
      window.removeEventListener('scroll', onScolled);
    });
  })

  return (
    <header id='header' ref={headerRef} {...props} className={`nk-header page-header is-transparent is-sticky ${props.className}`}>
      <Navbar></Navbar>
      {props.children}
    </header>
  )
}