import ContactHeader from '@/components/contact-header/ContactHeader.tsx'
import ContactTelegram from '@/components/contact-telegram/ContactTelegram.tsx'

const ContactsPage = () => {
  return (
    <div className={'w-full h-full relative'}>
      <ContactHeader />
      <ContactTelegram />
    </div>
  )
}

export default ContactsPage
