import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'
import { useTranslation } from 'react-i18next'

type ButtonLinkProps = {
  item?: {
    name: string
    path: string
    dropdown?: {
      name: string
      path: string
    }[]
  }
  navLink?: boolean
  children?: React.ReactNode
  link?: string
  className?: string
  withArrow?: boolean
}
export const CustomLink = ({
  item,
  navLink,
  children,
  link = '/',
  className = 'text-secondary',
  withArrow = true,
}: ButtonLinkProps) => {
  const { i18n } = useTranslation()

  if (!item?.dropdown) {
    if (navLink) {
      return (
        <>
          <NavLink to={`/${i18n.language}${item?.path || link}`} className={` flex items-center ${className}`}>
            {item?.name || children}
            {withArrow && <GoArrowUpRight className={'min-h-[20px] min-w-[20px] ml-0.5'} />}
          </NavLink>
        </>
      )
    } else {
      return (
        <Link to={`/${i18n.language}${item?.path || link}`} className={` flex items-center ${className}`}>
          {item?.name || children}
          {withArrow && <GoArrowUpRight className={'min-h-[20px] min-w-[20px] ml-0.5'} />}
        </Link>
      )
    }
  }
}
