const About = () => {
  return (
    <div className='relative md:my-7 flex flex-col md:gap-5 justify-around items-center  md:flex-row  bg-gradient-to-b from-palette-OrchidPink to-palette-ChampagnePink '>
      <div className='flex relative md:basis-1/3 overflow-hidden self-center md:h-[33rem] '>
        <img
          className='elipseAbout-small md:absolute w-[10rem] md:w-[22rem] md:object-cover md:-top-10 md:left-[10%] hover:brightness-105 transition-all'
          src='/src/assets/static/imgpage/4ED63C86-96F4-4105-9AB9-C0A86FBA9FD2.jpg'
          alt='imagen-de-valentina-bossy'
        />
      </div>
      <div className='flex md:basis-2/3 self-center z-20'>
        <p className=' text-base px-5 lg:pr-2 lg:text-2xl font-Urbanist text-palette-SoftAuburn'>
          Mi nombre es Valentina Bossy, creadora de BOSSY SKINCARE. Soy
          maquilladora, masajista profesional, cosmetóloga, cosmiatra holística,
          dermatocosmíatra, brow & lash artist. <br /> Mi pasión es el mundo de
          la belleza, trabajo sobre pieles sanas y pieles con alguna patología
          realizando tratamientos faciales y corporales, mi intención es que mis
          pacientes puedan sanar con cada tratamiento de adentro hacia afuera,
          que logren esa conexión con su ser espiritual, ayudando al despertar
          universal porque estoy convencida de la conexión que existe entre las
          emociones y el cuerpo físico (alma-cuerpo-mente). <br /> Hoy me dedico
          a capacitar personas que desean integrar a su vida más conocimientos y
          herramientas holísticas de manera profesional.
        </p>
      </div>
      <img
        className='absolute w-[30%] top-[10%] left-[55%] md:right-0 md:top-[55%] z-0 hover:brightness-105 transition-all'
        src='/src/assets/static/imgpage/liliumm 1.png'
        alt=''
      />
      <img
        className='absolute w-[30%] top-[0%] left-[12%] flipY md:hidden z-0 hover:brightness-105 transition-all'
        src='/src/assets/static/imgpage/liliumm 1.png'
        alt=''
      />
    </div>
  )
}

export default About
