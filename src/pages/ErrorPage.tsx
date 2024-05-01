import { ButtonLink } from 'components/buttonLink/ButtonLink.tsx'

const ErrorPage = () => {
  return (
    <div>
      <p>Oops :(</p>
      <ButtonLink link={'/'} className={'bg-tertiary w-fit rounded-full px-3 py-1 text-primary'}>
        Go to homepage
      </ButtonLink>
    </div>
  )
}

export default ErrorPage
