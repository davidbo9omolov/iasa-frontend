import { ButtonLink } from 'components/buttonLink/ButtonLink.tsx'
import SadEmoji from '@/assets/sadEmoji.tsx'

const ErrorPage = () => {
  return (
    <div className={'flex flex-col justify-center items-center h-fit'}>
      <div className={'flex items-center mb-5'}>
        <p className={'text-7xl font-bold mr-5'}>Oops</p>
        <SadEmoji />
      </div>
      <p className={'text-secondary mt-5 text-xl font-bold'}>Помилка 404</p>
      <p className={' my-5 text-gray'}>Сторінки, яку ви шукаєте, не існує.</p>
      <ButtonLink link={'/'} className={'bg-tertiary w-fit rounded-full my-5 px-3 py-1 text-primary'}>
        На головну
      </ButtonLink>
    </div>
  )
}

export default ErrorPage
