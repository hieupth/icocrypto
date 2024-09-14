'use client';
import { ReactNode, useEffect, useRef } from "react";
import NavBar from "@/components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/themes/vendor.bundle.css";
import './azalea.css';
import Body from "@/components/body";
import styles from "@/app/page.module.css"

const AzaleaLayout = ({children} : Readonly<{children: ReactNode}>) => {

  const navbarRefs = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
			const scroll = window.scrollY;
			if (scroll > 0) {
        navbarRefs.current?.classList.add('has-fixed');
			} else {
				navbarRefs.current?.classList.remove('has-fixed');
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
  }, []);

  return (
    <html lang='en'>
      <Body extraClasses="bg-theme page-loaded nk-nio-theme">
        <div className='nk-wrap has-ovm'>
            <header id='header' ref={navbarRefs} className='nk-header page-header is-transparent is-sticky is-dark'>
              <NavBar activate='home'>
                <li>
                  <a href='#' data-bs-toggle='modal' data-bs-target='#login-popup' className='btn btn-md btn-thin btn-outline btn-auto btn-round btn-primary no-change'>
                    <span>Sign In</span>
                  </a>
                </li>
              </NavBar>
            </header>
            <main className={`nk-pages tc-light ${styles.main}`}>
              {children}
            </main>
          </div>
      </Body>
    </html>
  );
}

export default AzaleaLayout;