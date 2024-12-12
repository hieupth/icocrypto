import { ReactNode, ComponentProps } from 'react';
import { makeElementClassname } from '@/utils/classes';


interface BadgeProps extends ComponentProps<'span'> {
  badgeClasses?: Array<string>,
  children?: ReactNode
}

export default function Badge ({
  badgeClasses,
  children,
  ...props
}: BadgeProps)
{
  return (
    <span className={makeElementClassname('badge', props.className, badgeClasses)} {...props}>
      {children}
    </span>
  )
}