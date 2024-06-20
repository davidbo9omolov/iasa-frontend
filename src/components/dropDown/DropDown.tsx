import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RouterItems } from 'types/router.ts'

type DropDownProps = {
  item: RouterItems
  classButton?: string
  classDropDown?: string
  onClick?: (name: string) => void
}

const DropDown = ({ item, classButton, classDropDown, onClick }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation('home')
  const translatedText = (itemElem: { name: string; path: string }) =>
    t(`${itemElem.name.charAt(0).toLowerCase() + itemElem.name.slice(1)}`)

  if (item.dropdown) {
    return (
      <div className={'relative'}>
        <button className={classButton} onClick={() => setIsOpen(!isOpen)}>
          {item.name}
        </button>
        {item.dropdown && isOpen && (
          <div className={`bg-quaternary absolute flex flex-col w-full z-20 rounded ${classDropDown}`}>
            {item.dropdown
              ? item.dropdown.map((itemElem, index) =>
                  onClick ? (
                    <button
                      key={index}
                      onClick={() => onClick(itemElem.name)}
                      className={`mx-4 py-1 hover:text-tertiary ${item.dropdown && index !== item.dropdown.length - 1 ? 'border-thin border-b-[1px]' : ''}`}
                    >
                      {translatedText(itemElem)}
                    </button>
                  ) : (
                    <Link
                      key={index}
                      to={`/${i18n.language}${item?.path + itemElem?.path}`}
                      className={`mx-4 py-1 hover:text-tertiary ${item.dropdown && index !== item.dropdown.length - 1 ? 'border-thin border-b-[1px]' : ''}`}
                    >
                      {translatedText(itemElem)}
                    </Link>
                  ),
                )
              : null}
          </div>
        )}
      </div>
    )
  }
}

export default DropDown
