import React from 'react'

const Intro = React.lazy(() => import('components/intro/Intro.tsx'))
const Activity = React.lazy(() => import('components/our-activity/Activity.tsx'))
const Department = React.lazy(() => import('components/department/Department.tsx'))
const WhatDoWeDo = React.lazy(() => import('components/what-do-we-do/WhatDoWeDo.tsx'))
const OurTeam = React.lazy(() => import('components/our-team/OurTeam.tsx'))
const SelectedUserTeamCard = React.lazy(() => import('components/selectedUserTeamCard/SelectedUserTeamCard.tsx'))

const HomePage = () => {
  return (
    <div className={`w-full relative`}>
      <Intro />
      <Activity />
      <Department />
      <WhatDoWeDo />
      <OurTeam />
      <SelectedUserTeamCard />
    </div>
  )
}

export default HomePage
