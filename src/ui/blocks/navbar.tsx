import NavLinkWrapper from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Menu from '@/ui/blocks/menu';
import { useRef } from 'react';
import siteConfig from '@/data/config.json';

interface NavBrandProps {
  img?: string,
  text?: string
}

/**
 * Navbar brand.
 * @param img brand image.
 * @param text brand caption.
 */
function NavbarBrand ({img, text}: NavBrandProps) {
  return (
    <div className='header-logo logo'>
      <NavLinkWrapper href='./' className='logo-link navbar-brand' style={{color: 'white'}}>
        <img src={img} className='logo-light d-inline-block align-text-middle' style={{marginRight: '5px'}}/>
        {text}
      </NavLinkWrapper>
    </div>
  );
}

/**
 * Navbar toggle is meant for hiding and showing the primary navbar.
 * @returns 
 */
function NavbarToggle () 
{
  const navbarToggleRef = useRef<HTMLAnchorElement>(null);

  const _onClick = (e: any) => {
    document.body.classList.toggle('overlay-menu-shown');
    document.getElementById('menu-mobile')?.classList.toggle('menu-shown');
    navbarToggleRef.current?.classList.toggle('navbar-active');
  };

  return(
    <div className='header-nav-toggle'>
      <a href='#' className='navbar-toggle' data-menu-toggle='header-menu' ref={navbarToggleRef} onClick={_onClick}>
        <div className='toggle-line'><span></span></div>
      </a>
    </div>
  )
}

/**
 * Navigation bar.
 * @returns 
 */
export default function Navbar() {
  return(
    <NavbarBootstrap fixed='top' expand='lg' className='header-main' style={{zIndex:999}}>
      <Container className='container-xxl'>
        <div className='header-wrap'>
          <NavbarBrand {...siteConfig.logo}></NavbarBrand>
          <NavbarToggle></NavbarToggle>
          <Menu></Menu>
        </div>
      </Container>
    </NavbarBootstrap>
  )
}