const Header = () => {
  return (
    <div>
      <p className={'text-2xl my-2'}>Header</p>
      <nav>
        <ul className={'flex'}>
          <li>
            <a href={'/'} className={'mx-1'}>
              Home
            </a>
          </li>
          <li>
            <a href={'/analyst-shop'} className={'mx-1'}>
              AnalystShop
            </a>
          </li>
          <li>
            <a href={'/about-us'} className={'mx-1'}>
              About
            </a>
          </li>
          <li>
            <a href={'/contacts'} className={'mx-1'}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
