const NavigationMap = () => {
  return (
    <section className={' min-h-[300px] h-[30vw] flex justify-center my-16'}>
      <div className={'w-[95%]'}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          loading="lazy"
          title="IASA location on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.163238216744!2d30.46281071571719!3d50.44956627947648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce831a5f0a9f%3A0x2638f51383c63258!2z0JzQvtGB0LrQvtC10YHRgtC40LrQsNGPINCU0L7Qu9C40Lkg0JHQvtC70LjRhtGPINCc0L7RgdGC0YDQvtCy0LjQvdCw!5e0!3m2!1suk!2sua!4v1690800000000!5m2!1suk!2sua"
        ></iframe>
        <br />
      </div>
    </section>
  )
}

export default NavigationMap
