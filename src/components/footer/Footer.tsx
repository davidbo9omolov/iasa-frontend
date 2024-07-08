import { routes, socialNetworks } from '@/constants/constants.ts'
import { Link } from 'react-router-dom'
import CustomLink from 'components/customLink/CustomLink.tsx'
import { useTranslation } from 'react-i18next'
import React from 'react'
import DropDown from 'components/dropDown/DropDown.tsx'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  const { t } = useTranslation('home')

  const translatedRoutes = routes.map((item) => ({
    ...item,
    name: t(`routes.${item.name.charAt(0).toLowerCase() + item.name.slice(1)}`),
  }))

  return (
    <footer className={'h-[20%] min-h-[200px] flex flex-col w-full items-center bg-quaternary py-3 sm:p-3'}>
      <div className={`h-full w-[95%] flex justify-between flex-col md:flex-row`}>
        <div className={'flex justify-between w-full md:w-[40%]'}>
          <div className={'flex flex-col h-[80%]'}>
            <Link
              target={'_blank'}
              to={'https://mail.google.com/mail/?view=cm&fs=1&to=studrada@gmail.com'}
              className={'underline mb-1'}
            >
              studrada@gmail.com
            </Link>
            <Link to={'https://t.me/iasa_stud_support_bot'} className={' mb-1'} target={'_blank'}>
              IASA support bot
            </Link>
            <Link to={'https://t.me/IASAsuggestionBot'} className={' mb-1'} target={'_blank'}>
              IASA suggestion bot
            </Link>
          </div>
          <div className={'flex flex-col h-[80%] md:hidden'}>
            {translatedRoutes.map((item, index) => (
              <React.Fragment key={index}>
                <DropDown item={item} classButton={'mb-1'} classDropDown={'top-0 left-[150px] bg-quaternaryDark'} />
                <CustomLink item={item} navLink className={'mb-1'} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={'flex justify-between w-full md:w-[60%]'}>
          <div className={'hidden md:flex flex-col h-[80%] '}>
            {translatedRoutes.map((item, index) => (
              <React.Fragment key={index}>
                <DropDown item={item} classButton={'mb-1'} classDropDown={'top-0 left-[150px] bg-quaternaryDark'} />
                <CustomLink item={item} navLink className={'mb-1'} />
              </React.Fragment>
            ))}
          </div>
          <div className={'flex flex-col items-start md:items-end w-full md:w-fit h-[80%] mt-5 md:mt-0'}>
            <p className={'w-fit mb-2'}>Follow us</p>
            <div className={'flex w-full justify-evenly md:justify-center'}>
              {socialNetworks.map((item, index) => (
                <Link target={'_blank'} key={index} to={item.path} className={'mr-5 md:ml-5 md:mr-0'}>
                  <item.icon className={'w-[24px] h-[24px]'} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={'border-t-[1px] border-thin flex justify-center py-5 w-[95%] mt-4'}>
        <p className={'w-full text-center text-gray'}>&copy; IASA Student Council {year}</p>
      </div>
    </footer>
  )
}

export default Footer
