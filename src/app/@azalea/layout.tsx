"use client";
import "./azalea.css";
import Body from "@/ui/atoms/body";
import Navbar from "@/ui/blocks/navbar";
import Header from "@/ui/modules/header";
import Particles from "@/ui/atoms/particles";

/**
 * Azalea theme layout.
 * @returns 
 */
export default function Layout () {
  return (
    <html lang='en'>
      <Body className='nk-body body-wider bg-theme mode-onepage nk-nio-theme'>
        <div className='nk-wrap has-ovm'>
          <Header className='is-dark'>
            <Navbar>
              <ul className='menu-btns'>
                <a className='btn btn-md btn-thin btn-outline btn-auto btn-primary btn-round no-change'>Login</a>
              </ul>
            </Navbar>
          </Header>
        </div>
        <Particles color='255,255,255,0.02'></Particles>
        <div className='nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i'>
          <div className='ovm-line'></div>
        </div>
      </Body>
    </html>
  )
}