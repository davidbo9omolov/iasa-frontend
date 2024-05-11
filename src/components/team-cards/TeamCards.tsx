import React from 'react'

type TeamCardProps = {
  item: {
    name: string
    surname: string
    position: string
  }
}

const TeamCards: React.FC<TeamCardProps> = ({ item }) => {
  return (
    <div className={'h-fit w-[350px] bg-quaternary rounded-lg flex p-3 mr-[30px] mb-[30px]'}>
      <div className={'mr-3'}>
        <img src={'https://via.placeholder.com/75'} alt={'team'} className={'rounded-full'} />
      </div>
      <div>
        <p>
          {item.name} {item.surname}
        </p>
        <p>{item.position}</p>
      </div>
    </div>
  )
}

export default TeamCards
