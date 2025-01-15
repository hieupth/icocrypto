import { ReactNode, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavLinkWrapper from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';


/**
 * Navigation item on the menu.
 * @param title item title.
 * @param href item link.
 * @param active active the item. 
 * @returns 
 */
function NavItem({
  title,
  href,
  active
} : {
  title: string,
  href: string,
  active: boolean
}) {
  return (
    <li className="menu-item">
      <a href={href ? href : "#"} className={`menu-link nav-link ${active ? 'active' : ''}`}>
        {title}
      </a>
    </li>
  )
}

/**
 * Navigation brand on the menu.
 * @param src brand image source.
 * @param text brand text. 
 * @returns 
 */
export function NavBrand({
  src,
  text,
}: {
  src?: string,
  text?: string
}) {
  return (
    <div className='header-logo logo'>
      <NavLinkWrapper href='./' className='logo-link navbar-brand' style={{color: 'white'}}>
        <img src={src} className='logo-light d-inline-block align-text-middle' style={{marginRight: '5px'}}/>
        {text}
      </NavLinkWrapper>
    </div>
  );
}

/**
 * Navigation menu
 * @param brand navigation brand on the menu.
 * @param items navigation items. 
 * @param visible number of visible items. 
 * @param activate current activated item.
 * @returns
 */
export function Navbar({
  brand,
  items,
  visible,
  activate,
  children
} : {
  brand?: {src: string, text: string},
  items?: Array<{title: string, href: string}>,
  visible?: number,
  activate?: string,
  children?: ReactNode
}) 
{
  const btnRef = useRef<HTMLButtonElement>(null)

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
    <NavbarBootstrap fixed='top' expand='lg' className='header-main' style={{zIndex:999}}>
      <Container className='container-xxl'>
        <div className='header-wrap'>
          <NavBrand src={brand?.src} text={brand?.text}></NavBrand>
          <NavbarToggle aria-controls='basic-navbar-nav' className='navbar-toggle toggle-line' style={{color: '#fff', border: 0}} ref={btnRef}/>
          <NavbarCollapse id='basic-navbar-nav' className='header-nav-toggle' style={{flexGrow: 0}}>
            <div className='navbar-header-overlay' onClick={() => {btnRef.current?.click()}}></div>
            <div className='header-navbar menu-mobile'>
              <nav className='header-menu' id='header-menu'>
                <ul className='menu'>
                  {items?.slice(0, visible ? visible : items.length).map((item) => {
                    return <NavItem key={item.title} title={item.title} href={item.href} active={item.title === activate}></NavItem>
                  })}
                  {items ? items.length > (visible ? visible : items.length) && (
                    <div className='menu-item dropdown has-sub'>
                      <a className='menu-link nav-link menu-toggle' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave} onClick={onMenuToggle} href='#'>More</a>
                      <ul className='menu-sub menu-drop'>
                        {items.slice(visible).map((item) => {
                          return <NavItem key={item.title} title={item.title} href={item.href} active={item.title === activate}></NavItem>
                        })}
                      </ul>
                    </div>
                  ) : <></>}
                </ul>
                {children}
              </nav>
            </div>
          </NavbarCollapse>
        </div>
      </Container>
    </NavbarBootstrap>
  )
}