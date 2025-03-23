import * as React from 'react'
import { cn } from '@/lib/utils'

export enum TypographyVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  t1,
  t2,
  bt,
  l1,
  l2,
}

export type FontVariant = 'Inter' | 'ClashDisplay'

export type FontWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

type TypographyProps<T extends React.ElementType> = {
  as?: T
  id?: string
  className?: string
  weight?: FontWeight
  font?: FontVariant
  variant?: keyof typeof TypographyVariant
  children: React.ReactNode
}

export default function Typography<T extends React.ElementType>({
  as,
  id,
  children,
  weight = 'regular',
  className,
  font = 'Inter',
  variant = 'bt',
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'p'
  return (
    <Component
      id={id}
      className={cn(
        'text-black',
        // *=============== Font Type ==================
        {
          Inter: 'font-Inter',
          ClashDisplay: 'font-ClashDisplay',
        }[font],
        {
          thin: 'font-thin',
          extralight: 'font-extralight',
          light: 'font-light',
          regular: 'font-normal',
          medium: 'font-medium',
          semibold: 'font-semibold',
          bold: 'font-bold',
          extrabold: 'font-extrabold',
          black: 'font-black',
        }[weight],
        // *=============== Font Variants ==================
        {
          h1: 'md:text-[72px]',
          h2: 'md:text-[60px]',
          h3: 'md:text-[48px]',
          h4: 'md:text-[36px]',
          h5: 'md:text-[30px]',
          h6: 'md:text-[24px]',
          t1: 'md:text-[20px]',
          t2: 'md:text-[18px]',
          bt: 'md:text-[16px]',
          l1: 'md:text-[14px]',
          l2: 'md:text-[12px]',
        }[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
