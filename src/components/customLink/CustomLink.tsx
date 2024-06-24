import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'
import { useTranslation } from 'react-i18next'
import { RouterItems } from 'types/router.ts'

export type ButtonLinkProps = {
  item?: RouterItems
  navLink?: boolean
  children?: React.ReactNode
  link?: string
  className?: string
  withArrow?: boolean
  onClick?: () => void
  blankLink?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}
const CustomLink = ({
  item,
  navLink,
  children,
  link = '/',
  blankLink,
  className = 'text-secondary',
  withArrow = false,
  onClick,
  ...rest
}: ButtonLinkProps) => {
  const { i18n } = useTranslation()
  const computedLink = blankLink ? blankLink : `/${i18n.language}${item?.path || link}`

  if (!item?.dropdown) {
    if (navLink) {
      return (
        <>
          <NavLink to={computedLink} className={` flex items-center ${className}`} onClick={onClick} {...rest}>
            {item?.name || children}
            {item?.withArrow && <GoArrowUpRight className={'min-h-[20px] min-w-[20px] ml-0.5'} />}
          </NavLink>
        </>
      )
    } else {
      return (
        <Link
          to={blankLink || `/${i18n.language}${item?.path || link}`}
          className={` flex items-center ${className}`}
          onClick={onClick}
          {...rest}
        >
          {item?.name || children}
          {withArrow && <GoArrowUpRight className={'min-h-[20px] min-w-[20px] ml-0.5'} />}
        </Link>
      )
    }
  }
}

export default CustomLink
