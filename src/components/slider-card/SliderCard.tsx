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
    <div className={'bg-quaternary h-[300px] min-w-[300px] max-w-[400px] mx-2 md:mr-4 md:ml-0 rounded-lg p-5'}>
      <div className={'rounded bg-sliderCardGradient h-1/3'}></div>
      <p className={'text-xl md:text-2xl font-bold mt-2 mb-4'}>{data.title}</p>
      <p className={'sm:text-sm md:text-md'}>
        {data.description.length > 150 ? data.description.slice(0, 150) + '...' : data.description}
      </p>
    </div>
  )
}

export default SliderCard
