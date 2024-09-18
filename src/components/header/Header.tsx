import { NavLink } from 'react-router-dom'
import { routes, translations, LinkRoutes } from '@/constants/constants.ts'
import { useTranslation } from 'react-i18next'

import Logo from '@/assets/logo.tsx'
import DropDown from 'components/dropDown/DropDown.tsx'

import BurgerMenu from 'components/burgerMenu/BurgerMenu.tsx'
import CustomLink from 'components/customLink/CustomLink.tsx'
import HeaderRoutes from 'components/header/HeaderRoutes.tsx'

import styles from './Header.module.css'

const Header = () => {
  const { t, i18n } = useTranslation('home')

  const translatedRoutes = routes.map((item) => ({
    ...item,
    name: t(`routes.${item.name.charAt(0).toLowerCase() + item.name.slice(1)}`),
    dropdown: item.dropdown?.map((item) => ({
      ...item,
      name: t(`dropdown.${item.name.charAt(0).toLowerCase() + item.name.slice(1)}`),
    })),
  }))

  const onChangingLanguage = (lang: string) => {
    const currentPath = window.location.pathname
    const pathSegments = currentPath.split('/')

    pathSegments[1] = lang.toLowerCase()

    const newPath = pathSegments.join('/')

    window.location.pathname = newPath
  }

  return (
    <header className={'flex justify-center py-3 h-[90px] '}>
      <div className={'flex items-center justify-between w-[95%] my-2 '}>
        <CustomLink className={'text-xl z-50'} withArrow={false} link={LinkRoutes.Home}>
          <Logo />
        </CustomLink>
        <nav>
          <ul className={'hidden lg:flex'}>
            <HeaderRoutes translatedRoutes={translatedRoutes} />
          </ul>
        </nav>
        <div className={'flex items-center'}>
          <label className={'relative mr-8 group z-50'}>
            <p className={'absolute group-hover:text-tertiary uppercase'}>{i18n.language}</p>
            <DropDown
              item={translations}
              classDropDown={'top-[40px] left-[-15px] min-w-[55px]'}
              onClick={onChangingLanguage}
            />
          </label>
          <NavLink
            to={`/${i18n.language}${LinkRoutes.Contacts}`}
            className={({ isActive }) =>
              isActive
                ? ' text-primary bg-secondary rounded-full relative overflow-hidden'
                : `rounded-full relative overflow-hidden ${styles.animationWrapper}`
            }
          >
            {({ isActive }) => (
              <>
                <div className={'border-[1px] border-tertiary px-3 py-2 rounded-full  hidden lg:flex'}>
                  <div className={'relative h-fit overflow-hidden '}>
                    <p className={`${styles.animationElem1} ${isActive ? 'text-primary' : 'text-tertiary'}`}>
                      {t('routes.contacts')}
                    </p>
                    <p className={`${styles.animationElem2} absolute text-primary`}>{t('routes.contacts')}</p>
                  </div>
                </div>
                <span
                  className={`left-[-2px] bg-secondary h-[100px] flex items-center justify-center absolute ${styles.animationCircle}`}
                ></span>
              </>
            )}
          </NavLink>
          <BurgerMenu translatedRoutes={translatedRoutes} />
        </div>
      </div>
    </header>
  )
}

export default Header
