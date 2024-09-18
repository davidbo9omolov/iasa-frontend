import React, { useState } from 'react'
import { whatDoWeDoInformationProps } from 'types/whatDoWeDoInformation.ts'
import { RouterItems } from 'types/router.ts'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { IoIosArrowDown } from 'react-icons/io'
import { useBurgerMenu } from 'components/burgerMenu/BurgerMenuProvider.tsx'

export type MobileDropDownProps = {
  children?: React.ReactNode
  item?: RouterItems | whatDoWeDoInformationProps
  selected: string | undefined
  className?: string
  dropClassName?: string
  onClick?: () => void
}

const MobileDropDown = ({ children, item, className, selected, dropClassName, onClick }: MobileDropDownProps) => {
  const [open, setOpen] = useState(false)
  const { isOpen, setIsOpen } = useBurgerMenu()

  const { i18n } = useTranslation()

  const onOpen = () => {
    setOpen(!open)
  }

  if (item?.dropdown || children) {
    return (
      <div>
        <div className={`w-fit cursor-pointer ${className}`} onClick={onOpen}>
          <div className={'flex items-center '}>
            <h1 className={'text-secondary'}>{selected}</h1>
            <IoIosArrowDown className={`text-secondary ml-2 duration-300 ${open ? 'rotate-180' : ''}`} />
          </div>
        </div>
        {open && (
          <div className={` ${dropClassName}`}>
            {item?.dropdown?.map((item, index: number) => (
              <div key={index} className={'ml-2 mb-2'} onClick={() => setIsOpen(!isOpen)}>
                {'path' in item ? (
                  <Link to={`/${i18n.language}${item.path}`} className={'text-md font-semibold'} onClick={onClick}>
                    {item.name}
                  </Link>
                ) : (
                  <p className={'text-sm md:text-md'} onClick={onClick}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
            {children}
          </div>
        )}
      </div>
    )
  }
  return null
}

export default MobileDropDown
