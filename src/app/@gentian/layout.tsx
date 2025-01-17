"use client";
import "./gentian.css";
import { ReactNode, useRef, useEffect } from "react";
import { ParticleBackground } from "@/components/background";
import { Body, Anchor, List } from "@/components/common";
import { Navbar } from "@/components/navbar";
import siteconf from "@/config.json";

export default function Layout({
  children,
} : {
  children?: ReactNode
}) 
{
  const navbarRefs = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 0)
        navbarRefs.current?.classList.add("has-fixed");
      else
        navbarRefs.current?.classList.remove("has-fixed");
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <html lang="en">
      <Body className="bg-theme page-loaded nk-nio-theme">
        <div className="nk-wrap has-ovm">
          <header
            id="header"
            ref={navbarRefs}
            className="nk-header page-header is-transparent is-sticky is-dark"
          >
            <Navbar 
              brand={siteconf.general.logo} 
              items={siteconf.menu.items} 
              visible={siteconf.menu.visible}
              activate="home">
                <List className="menu-btns">
                  {[
                    <Anchor 
                      key="0"
                      e="btn"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login-popup"
                      className="no-change"
                      ecls={["md", "thin", "outline", "auto", "round", "primary"]}
                    >
                      <span>Sign In</span>
                    </Anchor>
                  ]}
                </List>
            </Navbar>
          </header>
            <main className='nk-pages tc-light' style={{zIndex: 2}}>
              {children}
            </main>
        </div>
        <ParticleBackground
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