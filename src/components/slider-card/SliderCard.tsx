type SliderCardProps = {
  data: {
    title: string
    description: string
    image?: string
    path?: string
  }
}

const SliderCard = ({ data }: SliderCardProps) => {
  return (
    <div className={'bg-quaternary h-[400px] min-w-[260px]  mr-8 rounded p-5'}>
      <div className={'rounded bg-orange-400 h-1/3'}></div>
      <p className={'text-2xl font-bold'}>{data.title}</p>
      <p>{data.description}</p>
    </div>
  )
}

export default SliderCard
