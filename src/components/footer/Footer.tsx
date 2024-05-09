import { routes, socialNetworks } from '@/constants/constants.ts'
import { Link } from 'react-router-dom'
import { CustomLink } from 'components/customLink/CustomLink.tsx'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={'h-[20%] min-h-[200px] flex flex-col w-full items-center bg-quaternary py-3'}>
      <div className={`h-full w-[95%] flex justify-between`}>
        <div className={'flex flex-col h-[80%]'}>
          <Link to={'#'} className={'underline mb-1'}>
            iasa@mail.com
          </Link>
          <Link to={'#'} className={' mb-1'}>
            IASA support bot
          </Link>
          <Link to={'#'} className={' mb-1'}>
            IASA suggestion bot
          </Link>
        </div>
        <div className={'flex flex-col h-[80%]'}>
          {routes.map((item, index) => (
            <CustomLink key={index} item={item} className={'mb-1'} navLink withArrow={false} />
          ))}
        </div>
        <div className={'flex flex-col h-[80%]'}>
          <p>Follow us</p>
        </div>
        <div className={'flex flex-col h-[80%]'}>
          {socialNetworks.map((item, index) => (
            <Link key={index} to={item.path} className={'underline mb-1'}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={'border-t-[1px] border-thin flex justify-center py-5 w-[95%] mt-4'}>
        <p className={'w-full text-center text-gray'}>&copy; IASA Student Council {year}</p>
      </div>
    </footer>
  )
}

export default Footer
