import React from 'react'
import DropDown from 'components/dropDown/DropDown.tsx'
import CustomLink from 'components/customLink/CustomLink.tsx'
import { useTranslation } from 'react-i18next'
import { RouterItems } from 'types/router.ts'

type HeaderRoutesProps = {
  translatedRoutes: RouterItems[]
}

const HeaderRoutes = ({ translatedRoutes }: HeaderRoutesProps) => {
  const { t } = useTranslation('home')
  const routesWithoutContacts = translatedRoutes.filter((item) => item.name != t('routes.contacts'))

  return (
    <>
      {routesWithoutContacts.map((item, index) => (
        <React.Fragment key={index}>
          <DropDown item={item} classButton={'mx-7 hover:text-tertiary'} classDropDown={'top-[40px]'} />
          <li>
            <CustomLink item={item} navLink className={'mx-7 hover:text-tertiary'} />
          </li>
        </React.Fragment>
      ))}
    </>
  )
}

export default HeaderRoutes
