import Headers from './Elements/Headers'
const About = () => {
  return (
    <div className='flex flex-col gap-3 lg:gap-5 items-center  '>
      <Headers title={'¿Quién soy?'} />
      <section className='relative flex flex-col md:flex-row gap-3 px-3 lg:gap-5 mb-6 justify-around items-center bg-gradient-to-b from-palette-OrchidPink to-palette-ChampagnePink'>
        <div className='flex relative justify-center md:basis-1/3 md:h-[33rem] overflow-hidden '>
          <img
            className='elipseAbout-small md:elipseAbout-medium lg:elipseAbout-large xl:elipseAbout md:absolute w-[10rem] md:w-[18rem] xl:w-[22rem] md:top-5 lg:-top-5 xl:-top-10 md:object-cover hover:brightness-105 transition-all'
            src='/assets/imgpage/4ED63C86-96F4-4105-9AB9-C0A86FBA9FD2.jpg'
            alt='imagen-de-valentina-bossy'
          />
        </div>
        <div className='flex md:basis-2/3 self-center z-20'>
          <p className=' text-base px-5 pb-5 lg:px-5 lg:text-xl xl:text-2xl font-Urbanist text-slate-700'>
            Mi nombre es Valentina Bossy, creadora de BOSSY SKINCARE.<br /> Soy
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
          className='absolute w-[30%] md:w-[15%] xl:w-[13%] top-[10%] left-[55%] md:left-[23%] md:top-[55%] xl:top-[60%] z-10 hover:brightness-105 transition-all'
          src='/assets/imgpage/liliumm 1.png'
          alt=''
        />
        <img
          className='absolute w-[30%] top-[0%] left-[12%] md:w-[15%] xl:w-[13%] md:left-[0%] md:top-[50%] xl:top-[60%] z-10 hover:brightness-105 transition-all flipY'
          src='/assets/imgpage/liliumm 1.png'
          alt=''
        />
      </section>
    </div>
  )
}

export default About
