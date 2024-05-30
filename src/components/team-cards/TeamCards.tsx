import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { motion } from 'framer-motion'

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
      <motion.div
        className={'h-fit w-full bg-quaternary items-center rounded-lg flex p-3'}
        onClick={() => onMoreInfo(item)}
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
          transition: {
            delay: 0.5,
          },
        }}
      >
        <div className={'mr-3'}>
          <img src={'https://via.placeholder.com/75'} alt={'team'} className={'rounded-full'} />
        </div>
        <div className={'w-4/5 flex flex-col items-start'}>
          <p>
            {item.name} {item.surname}
          </p>
          <p>{item.position}</p>
        </div>
        <div className={'w-1/10 flex justify-center'}>
          <GoArrowUpRight className={'rotate-90 w-[30px] h-[30px] text-tertiary cursor-pointer'} />
        </div>
      </motion.div>
    </>
  )
}

export default TeamCards
