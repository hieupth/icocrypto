import { ReactNode, ComponentProps } from 'react';
import { makeElementClassname } from '@/utils/classes';


interface ButtonProps extends ComponentProps<'a'> {
  btnClasses?: Array<string>,
  icon?: string,
  children?: ReactNode
}

export default function Button ({
  btnClasses,
  icon,
  children,
  ...props
} : ButtonProps) 
{
  return (
    <a className={makeElementClassname('btn', props.className, btnClasses)} {...props}>
      {icon && <em className={`icon ${icon}`}></em> && ' '}
      {children}
    </a>
  )
}