const NavigationMap = () => {
  return (
    <section className={'min-h-[250px] flex justify-center mt-16'}>
      <div className={'w-[95%]'}>
        <iframe
          width="100%"
          height="600"
          className={'rounded-2xl'}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Kyiv)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <br />
      </div>
    </section>
  )
}

export default NavigationMap
