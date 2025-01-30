"use client";
import "./azalea.css";
import Body from "@/ui/atoms/body";
import Header from "@/ui/modules/header";
import Particles from "@/ui/atoms/particles";

export default function Layout () {
  return (
    <html lang='en'>
      <Body className='nk-body body-wider bg-theme mode-onepage nk-nio-theme'>
        <div className='nk-wrap has-ovm'>
          <Header className='is-dark'></Header>
        </div>
        <Particles color='255,255,255,0.02' lineColor='255,255,255'></Particles>
        <div className='nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i'>
          <div className='ovm-line'></div>
        </div>
      </Body>
    </html>
  )
}