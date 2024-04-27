import { Link, NavLink } from 'react-router-dom'
import { HeaderRoutes, LinkRoutes } from '@/constants/constants'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={'flex items-center justify-between py-3'}>
      <p className={'text-xl my-2 ml-3'}>Logo</p>
      <nav>
        <ul className={'flex'}>
          <li>
            <NavLink to={LinkRoutes.Applicant} className={'mx-4'}>
              {HeaderRoutes.Applicant}
            </NavLink>
          </li>
          <li>
            <NavLink to={LinkRoutes.ForStudent} className={'mx-4'}>
              {HeaderRoutes.ForStudent}
            </NavLink>
          </li>
          <li>
            <NavLink to={LinkRoutes.Articles} className={'mx-4'}>
              {HeaderRoutes.Articles}
            </NavLink>
          </li>
          <li>
            <NavLink to={LinkRoutes.AnalystShop} className={'mx-4'}>
              {HeaderRoutes.AnalystShop}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link
        to={LinkRoutes.Contacts}
        className={`rounded-full mr-3 relative overflow-hidden ${styles.animationWrapper}`}
      >
        <div className={'border-[1px] border-tertiary px-3 py-2 rounded-full'}>
          <div className={'relative h-fit overflow-hidden'}>
            <p className={`${styles.animationElem1} text-tertiary`}>{HeaderRoutes.Contacts}</p>
            <p className={`${styles.animationElem2} absolute text-primary`}>{HeaderRoutes.Contacts}</p>
          </div>
        </div>
        <span
          className={`left-[-2px] bg-secondary h-[100px] flex items-center justify-center absolute ${styles.animationCircle}`}
        ></span>
      </Link>
    </div>
  )
}

export default Header
