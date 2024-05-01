import { Link } from 'react-router-dom'
import { GlobalRoutes, LinkRoutes, routes } from '@/constants/constants'

import styles from './Header.module.css'
import { ButtonLink } from 'components/buttonLink/ButtonLink.tsx'
import DropDown from 'components/dropDown/DropDown.tsx'

const Header = () => {
  return (
    <header className={'flex items-center justify-between py-3'}>
      <Link to={'/'} className={'text-xl my-2 ml-3'}>
        Logo
      </Link>
      <nav>
        <ul className={'flex'}>
          {routes.map((item) => (
            <>
              <DropDown item={item} classDropDown={'top-[40px]'} />
              <li>
                <ButtonLink item={item} navLink className={'mx-4'} />
              </li>
            </>
          ))}
        </ul>
      </nav>
      <Link
        to={LinkRoutes.Contacts}
        className={`rounded-full mr-3 relative overflow-hidden ${styles.animationWrapper}`}
      >
        <div className={'border-[1px] border-tertiary px-3 py-2 rounded-full'}>
          <div className={'relative h-fit overflow-hidden'}>
            <p className={`${styles.animationElem1} text-tertiary`}>{GlobalRoutes.Contacts}</p>
            <p className={`${styles.animationElem2} absolute text-primary`}>{GlobalRoutes.Contacts}</p>
          </div>
        </div>
        <span
          className={`left-[-2px] bg-secondary h-[100px] flex items-center justify-center absolute ${styles.animationCircle}`}
        ></span>
      </Link>
    </header>
  )
}

export default Header
