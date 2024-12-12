import { ReactNode, ComponentProps } from 'react';
import { makeElementClassname } from '@/utils/classes';


interface IkonProps extends ComponentProps<'em'> {
  icon: string
}

export default function Ikon ({
  icon,
  ...props
} : IkonProps)
{
  return (
    <div className='icon-wrap'>
      <em className={`ikon ${icon}`} {...props}></em>
    </div>
  )
}