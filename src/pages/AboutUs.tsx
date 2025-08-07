import PresidiumCard from '@/components/presidium-board/PresidiumBoard'
import SelectedUserPresidiumCard from '@/components/selectedUserPresidiumCard/SelectedUserPresidiumCard'

const AboutUs = () => {
  return (
    <div className={`w-full relative`}>
      <PresidiumCard />
      <SelectedUserPresidiumCard />
    </div>
  )
}

export default AboutUs
