'use client';
import './azalea.css';
import { ReactNode, useRef, useEffect } from 'react';
import Body from '@/components/body';
import ParticleBG from '@/components/particlebg';
import NavBar from '@/components/navbar';


interface LayoutProps {
  children?: ReactNode
}

export default function Layout({
  children
}: LayoutProps) 
{  
  const navbarRefs = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 0)
        navbarRefs.current?.classList.add('has-fixed');
      else
        navbarRefs.current?.classList.remove('has-fixed');
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])
  
  return (
    <html lang='en'>
      <Body className='nk-body body-wider bg-theme mode-onepage page-loaded opera no-touch nk-nio-theme'>
        <div className="nk-wrap has-ovm">
          <header
            id="header"
            ref={navbarRefs}
            className="nk-header page-header is-transparent is-sticky is-dark"
          >
            <div>

            </div>
            <NavBar activate="home">
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#login-popup"
                  className="btn btn-md btn-thin btn-outline btn-auto btn-round btn-primary no-change"
                >
                  <span>Sign In</span>
                </a>
              </li>
            </NavBar>
          </header>
          <main className='nk-pages tc-light' style={{zIndex: 2}}>
              {children}
          </main>
      </div>
        <ParticleBG 
          count={30}
          color="255, 255, 255, 0.02"
          maxRadius={8}
          minRadius={2}
          speed={0.8}
          lineColor="255, 255, 255"
          lineOpacity={0.02}
          linksDistance={200}
        />
        <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
            <div className="ovm-line"></div>
        </div>
      </Body>
    </html>
  )
}
