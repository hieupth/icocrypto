/**
 * Custom Icon Component
 * 
 * Renders a custom icon based on the provided icon class name.
 * 
 * @component
 * @example
 * <Ikon ico="ikon-clip-board"/>
 * 
 * @param {Object} props - The properties for the icon component.
 * @param {string} props.ico - The class name for the icon.
 * 
 * @author thinhphoenix
 */

import React from 'react';

interface IkonProps {
  ico: string;
}

export default function Ikon({ ico }: IkonProps) {
  return (
    <div className='icon-wrap'>
      <em className={`ikon ${ico}`}></em>
    </div>
  );
}
