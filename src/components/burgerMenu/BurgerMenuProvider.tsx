import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'

// Define the context type
type BurgerMenuContextType = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

// Create the context
const BurgerMenuContext = createContext<BurgerMenuContextType | undefined>(undefined)

// Create the provider component
export const BurgerMenuProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  return <BurgerMenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</BurgerMenuContext.Provider>
}

// Create a custom hook to use the burger menu context
export const useBurgerMenu = () => {
  const context = useContext(BurgerMenuContext)
  if (context === undefined) {
    throw new Error('useBurgerMenu must be used within a BurgerMenuProvider')
  }
  return context
}
