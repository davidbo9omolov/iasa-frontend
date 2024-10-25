import { LuLoader2 } from 'react-icons/lu'

const Spinner = () => {
  return (
    <div className={'w-full h-full flex items-center justify-center absolute'}>
      <LuLoader2 className={'animate-spin text-secondary w-1/10 min-w-[150px] h-auto'} />
    </div>
  )
}

export default Spinner
