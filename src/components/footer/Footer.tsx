import { routes, socialNetworks } from '@/constants/constants.ts'
import { Link, NavLink } from 'react-router-dom'
import { ButtonLink } from 'components/buttonLink/ButtonLink.tsx'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={'h-[20%] min-h-[200px] flex flex-col w-full items-center'}>
      <div className={'bg-tertiary flex justify-center my-5 w-full'}>
        <div className={'w-[95%] bg-tertiary flex justify-between'}>
          <p className={'py-5 w-[66%] text-primary'}>
            Реалізацією проекту займалася IT-команда Студради ІПСА, яка розробляє програмні продукти для студентства, а
            також були залучені інформаційний та дизайнерський відділи.
          </p>
          <ButtonLink link={'#'} className={'text-primary'}>
            Детальніше
          </ButtonLink>
        </div>
      </div>
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
          {routes.map((item) => (
            <NavLink to={item.path} className={'mb-1'}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className={'flex flex-col h-[80%]'}>
          <p>Follow us</p>
        </div>
        <div className={'flex flex-col h-[80%]'}>
          {socialNetworks.map((item) => (
            <Link to={item.link} className={'underline mb-1'}>
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
