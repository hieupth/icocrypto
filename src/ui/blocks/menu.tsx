import { useEffect, useRef, useState } from "react";
import siteConfig from "@/data/config.json";

interface ItemProps {
  href?: string,
  title?: string,
  items?: Array<ItemProps>,
  isActivated?: boolean,
  column?: number
}

/**
 * Menu item.
 * @param href item link.
 * @param title item title.
 * @param items sub-menu items.
 * @param isActivated is item activated?
 * @param column number of sub-menu columns. 
 * @returns 
 */
function Item ({href, title, items, isActivated, column}: ItemProps)
{
  const menuItem = useRef<HTMLLIElement>(null);
  const [subMenuShow, setSubMenuShow] = useState('none');
  const [numCols] = useState<number>(column ? column < 1 ? 1 : column : 1);
  const [stepCols] = useState<number>(items ? Math.floor(items.length / numCols) : 0);

  const _onMouseEnter = (e: any) => {
    if (window.innerWidth < 992) return;
    e.currentTarget.classList.add('show');
    e.currentTarget.childNodes.forEach((node: any) => { 
      if (node instanceof HTMLElement) node.classList.add('show'); 
    });
  }

  const _onMouseLeave = (e: any) => {
    if (window.innerWidth < 992) return;
    e.currentTarget.classList.remove('show');
    e.currentTarget.childNodes.forEach((node: any) => {
      if (node instanceof HTMLElement) node.classList.remove('show');
    });
  }

  const _onMouseToggle = (e: any) => {
    if (window.innerWidth > 992) return;
    e.currentTarget.childNodes.forEach((node: any) => {
      if (node instanceof HTMLElement) node.classList.toggle('show');
    });
    menuItem.current?.classList.toggle('open-nav');
    setSubMenuShow(menuItem.current?.classList.contains('open-nav') ? 'block' : 'none');
  }

  return (
    items ? 
    <li className='menu-item has-sub' ref={menuItem}>
      <a className='menu-link nav-link menu-toggle' onMouseEnter={_onMouseEnter} onMouseLeave={_onMouseLeave} onClick={_onMouseToggle}>
        {title}
      </a>
      { numCols == 1 ? 
        <ul className='menu-sub menu-drop' style={{display: subMenuShow}}>
          {items?.map((item) => {
            return <Item key={item.title} {...item}></Item>
          })}
        </ul> : 
        <div className={`menu-sub menu-drop menu-mega menu-mega-${numCols}clmn`} style={{display: subMenuShow}}>
          <div className='menu-mega-innr'>
            {Array.from({ length: numCols }, (_, index) => index).map((i) => {
              return (
                <ul key={i} className='menu-mega-list'>
                  {Array.from({ length: i == 0 ? items.length % numCols + stepCols : stepCols }, (_, index) => i * stepCols + index).map((i) => {
                    return <Item key={i} {...items[i]}></Item>
                  })}
                </ul>
              )
            })}
          </div>
        </div>
      }
    </li> : 
    <li className="menu-item">
      <a href={href ? href : "#"} className={`menu-link nav-link ${isActivated ? 'active' : ''}`.trim()}>
        {title}
      </a>
    </li>
  )
}

/**
 * Main menu on the nagivation bar.
 * @returns 
 */
export default function Menu () 
{
  const menuRef = useRef<HTMLDivElement>(null);

  const onWindowResized = (e: any) => {
    if (window.innerWidth < 992) {
      menuRef.current?.classList.add('menu-mobile');
    } else {
      menuRef.current?.classList.remove('menu-mobile');
    }
  }
  
  useEffect(() => {
    window.addEventListener('resize', onWindowResized);
    return(() => {window.removeEventListener('resize', onWindowResized)});
  })

  return (
    <div id='menu-mobile' className='header-navbar' ref={menuRef} style={{visibility: 'visible', animationDelay: '0.6s'}} data-animate='fadeInDown' data-delay='.6'>
      <nav className='header-menu' id='header-menu'>
        <ul className='menu'>
          {siteConfig.menu.map((item, index) => {
            return <Item key={index} {...item}/>
          })}
        </ul>
      </nav>
      <div className='header-navbar-overlay'></div>
    </div>
  )
}