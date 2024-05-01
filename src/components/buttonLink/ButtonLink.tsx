import { NavLink, Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'

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
  children?: string
  link?: string
  className?: string
}
export const ButtonLink = ({ item, navLink, children, link = '/', className = 'text-secondary' }: ButtonLinkProps) => {
  if (!item?.dropdown) {
    if (navLink) {
      return (
        <>
          <NavLink to={item?.path || link} className={` flex items-center ${className}`}>
            {item?.name || children}
            <GoArrowUpRight className={'min-h-[20px] min-w-[20px] ml-0.5'} />
          </NavLink>
        </>
      )
    } else {
      return (
        <Link to={item?.path || link} className={` flex items-center ${className}`}>
          {item?.name || children}
          <GoArrowUpRight className={'min-h-[20px] min-w-[20px] ml-0.5'} />
        </Link>
      )
    }
  }
}
