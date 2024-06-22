import React, { useEffect, useState } from 'react'
import { RouterItems } from 'types/router.ts'
import MobileDropDown from 'components/mobileDropDown/MobileDropDown.tsx'
import CustomLink from 'components/customLink/CustomLink.tsx'

type BurgerMenuProps = {
  translatedRoutes: {
    name: string
    path: string
    withArrow: boolean
    dropdown?: {
      name: string
      path: string
    }[]
  }[]
}

const BurgerMenu = ({ translatedRoutes }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <button className={'flex flex-col relative z-50 ml-5 lg:hidden'} onClick={handleClick}>
        <span
          className={`h-[2px] w-[25px] bg-tertiary rounded duration-300 ${isOpen ? 'rotate-45 absolute translate-y-1' : ''}`}
        ></span>
        <span
          className={`h-[2px] w-[25px] bg-tertiary rounded duration-300 my-1 ${isOpen ? 'rotate-[-45deg] ' : ''}`}
        ></span>
        <span
          className={`h-[2px] w-[25px] bg-tertiary rounded duration-300 ${isOpen ? 'rotate-45 absolute  translate-y-1' : ''}`}
        ></span>
      </button>
      <div
        className={`bg-black flex lg:hidden justify-center absolute w-full h-full left-0 top-0 z-40 transition-transform duration-300 ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
      >
        <div className={'flex flex-col justify-start w-[95%] mt-20 overflow-hidden'}>
          {translatedRoutes.map((item: RouterItems, index: number) => (
            <React.Fragment key={index}>
              <MobileDropDown item={item} selected={item.name} className={'my-7 text-2xl '} onClick={handleClick} />
              <CustomLink item={item} navLink className={'my-7 text-2xl w-fit'} onClick={handleClick} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
