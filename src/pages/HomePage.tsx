import Intro from 'components/intro/Intro.tsx'
import Activity from 'components/our-activity/Activity.tsx'
import Department from 'components/department/Department.tsx'
import WhatDoWeDo from 'components/what-do-we-do/WhatDoWeDo.tsx'
import OurTeam from 'components/our-team/OurTeam.tsx'
import SelectedUserTeamCard from 'components/selectedUserTeamCard/SelectedUserTeamCard.tsx'

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
