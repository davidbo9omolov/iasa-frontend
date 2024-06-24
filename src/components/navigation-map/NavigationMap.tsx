const NavigationMap = () => {
  return (
    <section className={' min-h-[300px] h-[30vw] flex justify-center my-16'}>
      <div className={'w-[95%]'}>
        <div>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81%20%E2%84%96%2035,%20%D0%91%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82,%2037-%D0%90,%2003056,%20%D0%9A%D0%B8%D1%97%D0%B2,%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,%2002000+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <br />
      </div>
    </section>
  )
}

export default NavigationMap
