import React, { useEffect, useState } from 'react'
import { RouterItems } from 'types/router.ts'
import MobileDropDown from 'components/mobileDropDown/MobileDropDown.tsx'
import CustomLink from 'components/customLink/CustomLink.tsx'
import { motion } from 'framer-motion'

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
      <motion.div
        className={`bg-black flex lg:hidden justify-center absolute w-full h-full left-0 top-0 z-40`}
        initial={{ y: '-100%' }}
        animate={{ y: isOpen ? 0 : '-100%' }}
        transition={{
          duration: 0.6,
          delay: isOpen ? 0 : 0.54,
        }}
      >
        <div className={'flex flex-col justify-start w-[95%] mt-20 overflow-hidden'}>
          {translatedRoutes.map((item: RouterItems, index: number) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: '-50%', zIndex: 50 }}
                whileInView={isOpen ? { opacity: 1, x: 0 } : { x: '-50%' }}
                transition={{
                  delay: index,
                  duration: 0.2,
                  type: 'spring',
                  stiffness: 400,
                  damping: 22,
                }}
              >
                <MobileDropDown item={item} selected={item.name} className={'my-7 text-2xl'} onClick={handleClick} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: '-50%', zIndex: 50 }}
                whileInView={isOpen ? { opacity: 1, x: 0 } : { x: '-50%' }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.2,
                  type: 'spring',
                  stiffness: 400,
                  damping: 22,
                }}
              >
                <CustomLink item={item} navLink className={'my-7 text-2xl w-fit'} onClick={handleClick} />
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default BurgerMenu
