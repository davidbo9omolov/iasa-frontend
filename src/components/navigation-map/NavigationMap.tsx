const NavigationMap = () => {
  return (
    <section className={' min-h-[300px] h-[30vw] flex justify-center mt-16'}>
      <div className={'w-[95%]'}>
        <iframe
          className={'rounded-2xl w-full h-full'}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Kyiv)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <br />
      </div>
    </section>
  )
}

export default NavigationMap
