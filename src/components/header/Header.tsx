import React from 'react'
import { Link } from 'react-router-dom'
import { routes, translations, LinkRoutes } from '@/constants/constants.ts'
import { useTranslation } from 'react-i18next'

import Logo from '@/assets/logo.tsx'
import DropDown from 'components/dropDown/DropDown.tsx'
import { CustomLink } from 'components/customLink/CustomLink.tsx'

import styles from './Header.module.css'

const Header = () => {
  const { t, i18n } = useTranslation('home')

  const translatedRoutes = routes.map((item) => ({
    ...item,
    name: t(`routes.${item.name.charAt(0).toLowerCase() + item.name.slice(1)}`),
  }))

  const onChangingLanguage = (lang: string) => {
    window.location.href = `/${lang}${window.location.pathname.slice(3)}`
  }

  return (
    <header className={'flex justify-center py-3 h-[90px]'}>
      <div className={'flex items-center justify-between w-[95%] my-2'}>
        <CustomLink className={'text-xl '} withArrow={false} link={LinkRoutes.Home}>
          <Logo />
        </CustomLink>
        <nav>
          <ul className={'flex'}>
            {translatedRoutes
              .filter((item) => item.name != t('routes.contacts'))
              .map((item, index) => (
                <React.Fragment key={index}>
                  <DropDown item={item} classDropDown={'top-[40px]'} />
                  <li>
                    <CustomLink item={item} navLink className={'mx-4'} />
                  </li>
                </React.Fragment>
              ))}
          </ul>
        </nav>
        <div className={'flex items-center'}>
          <label className={'relative mr-6 group'}>
            <p className={'absolute group-hover:text-tertiary uppercase'}>{i18n.language}</p>
            <DropDown
              item={translations}
              classDropDown={'top-[40px] left-[-20px] min-w-[60px]'}
              onClick={onChangingLanguage}
            />
          </label>
          <Link
            to={`/${i18n.language}/${LinkRoutes.Contacts}`}
            className={`rounded-full relative overflow-hidden ${styles.animationWrapper}`}
          >
            <div className={'border-[1px] border-tertiary px-3 py-2 rounded-full'}>
              <div className={'relative h-fit overflow-hidden'}>
                <p className={`${styles.animationElem1} text-tertiary`}>{t('routes.contacts')}</p>
                <p className={`${styles.animationElem2} absolute text-primary`}>{t('routes.contacts')}</p>
              </div>
            </div>
            <span
              className={`left-[-2px] bg-secondary h-[100px] flex items-center justify-center absolute ${styles.animationCircle}`}
            ></span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
