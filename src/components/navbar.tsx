import { ReactNode, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavLinkWrapper from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
// Load configs.
import menu from '@/configs/menu.json';
import common from "@/configs/default.json";


/**
 * Show the navigation item on navbar.
 * @param {string} title Navigation item title.
 * @param {string} url Navigation item url.
 * @param {bool} isActivate Is navigation item activated.
 * @returns 
 */
const NavLink = ({title, url, isActivate}: Readonly<{title: string, url: string, isActivate: boolean}>) => {
  return (
    <li className='menu-item'>
      <a className={`menu-link nav-link ${isActivate ? 'active' : ''}`} href={url}>
        {title}
      </a>
    </li>
  );
};

/**
 * Show the navigation brand on navbar.
 * @param logo Logo url.
 * @param text Brand text.
 * @returns 
 */
const NavBrand = ({logo, text}: Readonly<{logo: string, text?: string}>) => {
  return (
    <div className='header-logo logo'>
        <NavLinkWrapper href='./' className='logo-link navbar-brand' style={{color: 'white'}}>
          <img src={logo} className='logo-light d-inline-block align-text-middle' style={{marginRight: '5px'}}/>
          {text}
        </NavLinkWrapper>
    </div>
  );
};

/**
 * Show the navbar.
 * @param {bool} activate Activated page section synchronized with navigation item.
 * @param {*} children Children elements.
 * @returns
 */
const NavBar = ({activate, children}: Readonly<{activate: string, children: ReactNode}>) => {
  
  const items = menu.items;
  const visible = menu.visible;
  const btnRefs = useRef<HTMLButtonElement>(null);
  
  /**
   * When mouse hover a navigation item.
   * @param {*} e Mouse event.
   * @returns Event function.
   */
  const onMouseHover = (e: any) => {
    // Do nothing in mobile screen.
    if (window.innerWidth < 992) return;
    // Otherwise, add show class to target and its children.
    const wrapper = e.currentTarget;
    wrapper.classList.add('show');
    wrapper.childNodes.forEach((node: any) => { 
      if (node instanceof HTMLElement) node.classList.add('show'); 
    });
  };

  /**
   * When mouse leave a navigation item.
   * @param {*} e Mouse event.
   * @returns Event function.
   */
  const onMouseLeave = (e: any) => {
    // Do nothing in mobile screen.
    if (window.innerWidth < 992) return;
    // Otherwise, remove show class from target and its children.
    const wrapper = e.currentTarget;
    wrapper.classList.remove('show');
    wrapper.childNodes.forEach((node: any) => {
      if (node instanceof HTMLElement) node.classList.remove('show');
    });
  };

  /**
   * When mouse toggle a navigation item.
   * @param {*} e Mouse event.
   * @returns Event function.
   */
  const onMenuToggle = (e: any) => {
    // Do nothing in mobile screen.
    if (window.innerWidth > 992) return;
    // Otherwise, toggle show class to target and its children.
    const wrapper = e.currentTarget;
    wrapper.classList.toggle('show');
    wrapper.childNodes.forEach((node: any) => {
      if (node instanceof HTMLElement) node.classList.toggle('show');
    });
  };

  return (
    <NavbarBootstrap fixed='top' expand='lg' className='header-main'>
      <Container className='container-xxl'>
        <div className='header-wrap'>
          <NavBrand logo={common.logo.src} text={common.logo.text}></NavBrand>
          <NavbarToggle aria-controls='basic-navbar-nav' className='navbar-toggle toggle-line' style={{color: '#fff', border: 0}} ref={btnRefs}/>
          <NavbarCollapse id='basic-navbar-nav' className='header-nav-toggle' style={{flexGrow: 0}}>
            <div className='navbar-header-overlay' onClick={() => {btnRefs.current?.click()}}></div>
            <div className='header-navbar menu-mobile'>
              <nav className='header-menu' id='header-menu'>
                <ul className='menu'>
                  {items.slice(0, visible).map((item) => {
                    return <NavLink key={item.title} title={item.title} url={item.url} isActivate={item.title === activate}></NavLink>
                  })}
                  {items.length > visible && (
                    <div className='menu-item dropdown has-sub'>
                      <a className='menu-link nav-link menu-toggle' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave} onClick={onMenuToggle} href='#'>More</a>
                      <ul className='menu-sub menu-drop'>
                        {items.slice(visible).map((item) => {
                          return <NavLink key={item.title} title={item.title} url={item.url} isActivate={item.title === activate}></NavLink>
                        })}
                      </ul>
                    </div>
                  )}
                </ul>
                <ul className='menu-btns'>
                  {children}
                </ul>
              </nav>
            </div>
          </NavbarCollapse>
        </div>
      </Container>
    </NavbarBootstrap>
  );
}

export default NavBar;