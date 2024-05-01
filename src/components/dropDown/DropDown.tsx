import { useState } from 'react'
import { Link } from 'react-router-dom'

type DropDownProps = {
  item: {
    name: string
    path: string
    dropdown?: {
      name: string
      path: string
    }[]
  }
  classButton?: string
  classDropDown?: string
}

const DropDown = ({ item, classButton, classDropDown }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  if (item.dropdown) {
    return (
      <div className={'relative'}>
        <button className={`mx-4 ${classButton}`} onClick={() => setIsOpen(!isOpen)}>
          {item.name}
        </button>
        {item.dropdown && isOpen && (
          <div className={`bg-quaternary absolute flex flex-col w-full rounded ${classDropDown}`}>
            {item.dropdown.map((itemElem, index) => (
              <Link
                key={index}
                to={item.path + itemElem.path}
                className={`mx-4 py-1 ${item.dropdown && index !== item.dropdown.length - 1 ? 'border-thin border-b-[1px]' : ''}`}
              >
                {itemElem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default DropDown
