const About = () => {
  return (
    <div className='container relative flex justify-around my-7 bg-gradient-to-b from-palette-OrchidPink to-palette-ChampagnePink '>
      <div className='relative basis-1/3 overflow-hidden self-center h-[33rem] '>
        <img
          className='absolute w-[22rem] object-cover -top-10 left-[10%] elipseabout'
          src='/src/assets/static/imgpage/4ED63C86-96F4-4105-9AB9-C0A86FBA9FD2.jpg'
          alt='imagen-de-valentina-bossy'
        />
      </div>

      <div className='basis-2/3 self-center z-20'>
        <p className='text-slate-700 pr-2 text-lg lg:text-2xl font-Urbanist'>
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
        className='absolute right-0 top-[55%] z-0 hover:brightness-105'
        src='/src/assets/static/imgpage/liliumm 1.png'
        alt=''
      />
    </div>
  )
}

export default About
