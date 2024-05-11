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
    <div className={'h-fit w-[250px]'}>
      <p>
        {item.name} {item.surname}
      </p>
      <p>{item.position}</p>
    </div>
  )
}

export default TeamCards
