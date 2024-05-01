import Intro from 'components/intro/Intro.tsx'
import Activity from 'components/ourActivity/Activity.tsx'
import Department from 'components/department/Department.tsx'

const HomePage = () => {
  return (
    <div className={'w-[95%]'}>
      <Intro />
      <Activity />
      <Department />
    </div>
  )
}

export default HomePage
