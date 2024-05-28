import React from 'react'

export type TeamMember = {
  name: string
  surname: string
  position: string
}

type TeamCardProps = {
  item: TeamMember
  onMoreInfo: (item: TeamMember) => void
}

const TeamCards: React.FC<TeamCardProps> = ({ item, onMoreInfo }) => {
  return (
    <>
      <button
        className={'h-fit w-[350px] bg-quaternary rounded-lg flex p-3 md:mr-[30px] mb-[30px]'}
        onClick={() => onMoreInfo(item)}
      >
        <div className={'mr-3'}>
          <img src={'https://via.placeholder.com/75'} alt={'team'} className={'rounded-full'} />
        </div>
        <div>
          <p>
            {item.name} {item.surname}
          </p>
          <p>{item.position}</p>
        </div>
      </button>
    </>
  )
}

export default TeamCards
