import ContactHeader from '@/components/contact-header/ContactHeader.tsx'
import ContactTelegram from '@/components/contact-telegram/ContactTelegram.tsx'
import NavigationMap from 'components/navigation-map/NavigationMap.tsx'

const ContactsPage = () => {
  return (
    <div className={'w-full h-full relative'}>
      <ContactHeader />
      <ContactTelegram />
      <NavigationMap />
    </div>
  )
}

export default ContactsPage
