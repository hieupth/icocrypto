'use client';
import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavLinkWrapper from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
// Load necessary configs. 
import menu from '@/config/menu.json';
import common from '@/config/common.json'; 


/**
 * Show the navigation item on navbar.
 * @param {any} item Navigation item to show.
 * @param {bool} active Is navigation item activated.
 * @returns 
 */
const NavLink = ({item, active = false}) => {
  return (
    <li className='menu-item'>
      <a className={`menu-link nav-link ${active ? 'active' : ''}`} href={item.url}>
        {item.title}
      </a>
    </li>
  );
};

/**
 * Show the navbar.
 * @param {bool} activeSection Activated page section synchronized with navigation item.
 * @param {*} children Children elements.
 * @returns Navbar component.
 */
export default function Navbar({activeSection = 'home', children}) {
  //
  const items = menu.items;
  const visible = menu.visible;
  const btnRefs = useRef(null);
    
  /**
   * When mouse hover a navigation item.
   * @param {*} e Mouse event.
   * @returns Event function.
   */
  const onMouseHover = (e) => {
    // Do nothing in mobile screen.
    if (window.innerWidth < 992) return;
    // Otherwise, add show class to target and its children.
		const wrapper = e.currentTarget;
		wrapper.classList.add('show');
		wrapper.childNodes.forEach((node) => {
      if (node instanceof HTMLElement) node.classList.add('show'); 
    });
  };

  /**
   * When mouse leave a navigation item.
   * @param {*} e Mouse event.
   * @returns Event function.
   */
  const onMouseLeave = (e) => {
    // Do nothing in mobile screen.
    if (window.innerWidth < 992) return;
    // Otherwise, remove show class from target and its children.
		const wrapper = e.currentTarget;
		wrapper.classList.remove('show');
		wrapper.childNodes.forEach((node) => {
			if (node instanceof HTMLElement) node.classList.remove('show');
		});
  };

  /**
   * When mouse toggle a navigation item.
   * @param {*} e Mouse event.
   * @returns Event function.
   */
  const onMenuToggle = (e) => {
    // Do nothing in mobile screen.
    if (window.innerWidth > 992) return;
    // Otherwise, toggle show class to target and its children.
		const wrapper = e.currentTarget;
		wrapper.classList.toggle('show');
		wrapper.childNodes.forEach((node) => {
			if (node instanceof HTMLElement) node.classList.toggle('show');
		});
  };

  /**
   * Show brand with logo and text in navbar.
   * @param {string} src Logo image source.
   * @param {string} text Name beside logo.
   * @returns Logo component.
   */
  const Brand = ({src, text}) => {
    return (
      <div className='header-logo logo'>
        <NavLinkWrapper href='./' className='logo-link navbar-brand' style={{color: 'white'}}>
					<img src={src} className='logo-light d-inline-block align-text-middle' style={{marginRight: '5px'}}/>
            {text}
				</NavLinkWrapper>
      </div>
      );
    };

  /**
   * Render navbar component.
   */
  return (
    <NavbarBootstrap fixed='top' expand='lg' className='header-main'>
      <Container className='container-xxl'>
        <div className='header-wrap'>
          <Brand src={common.logo.src} text={common.logo.text}></Brand>
          <NavbarToggle aria-controls='basic-navbar-nav' className='navbar-toggle toggle-line' style={{color: '#fff', border: 0}} ref={btnRefs}/>
          <NavbarCollapse id='basic-navbar-nav' className='header-nav-toggle' style={{flexGrow: 0}}>
            <div className='navbar-header-overlay' onClick={() => {btnRefs.current?.click()}}></div>
            <div className='header-navbar menu-mobile'>
              <nav className='header-menu' id='header-menu'>
                <ul className='menu'>
                  {items.slice(0, visible).map((item) => {
                    return <NavLink key={item.title} item={item} active={item.title === activeSection}></NavLink>
                  })}
                  {items.length > visible && (
                    <div className='menu-item dropdown has-sub'>
                      <a className='menu-link nav-link menu-toggle' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave} onClick={onMenuToggle} href='#'>More</a>
                      <ul className='menu-sub menu-drop'>
                        {items.slice(visible).map((item) => {
                          return <NavLink key={item.title} item={item} active={item.title === activeSection}></NavLink>
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
};