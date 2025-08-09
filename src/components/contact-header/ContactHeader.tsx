import { useTranslation } from 'react-i18next'
import { socialNetworks } from '@/constants/constants.ts'
import { Link } from 'react-router-dom'

const ContactHeader = () => {
  const { t } = useTranslation('contacts', { keyPrefix: 'contact-header' })

  return (
    <section className={'min-h-[250px] flex justify-center mt-16'}>
      <div className={'w-[95%] border-b-2 border-tertiary'}>
        <h1 className={'text-5xl font-semibold'}>{t('gotQuestion')}</h1>
        <div className={'flex sm:flex-col w-full justify-between mt-9'}>
          <div className={'flex flex-col w-1/2'}>
            <p>{t('contactUs')}</p>
            <div className={'flex flex-col mt-5'}>
              <Link
                target={'_blank'}
                rel={'noopener noreferrer'}
                to={'https://mail.google.com/mail/?view=cm&fs=1&to=studrada@gmail.com'}
                className={'underline'}
              >
                studrada@gmail.com
              </Link>
            </div>
          </div>
          <div className={'flex flex-col w-1/2 sm:w-full sm:mt-7'}>
            <p>{t('followUs')}</p>
            <div className={'flex my-5 sm:justify-center'}>
              {socialNetworks.map((item, index) => (
                <Link target={'_blank'} rel={'noopener noreferrer'} key={index} to={item.path} className={'mr-8'}>
                  <item.icon className={'w-[24px] h-[24px]'} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHeader
