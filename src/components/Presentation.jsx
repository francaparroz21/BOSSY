const Presentation = () => {
  return (
    <div className='container flex flex-col gap-4 '>
      <div className='flex flex-col elipse-mobile md:elipse bg-gradient-to-b from-palette-ChampagnePink/70 to-palette-OrchidPink overflow-hidden'>
        <div className=' pb-64 pt-24 sm:pb-96 sm:pt-48'>
          <h1 className='text-center text-xl px-10 md:px-60 md:text-5xl font-Cremona text-stone-700'>
            TE DAMOS LA BIENVENIDA A BOSSY SKINCARE
          </h1>
        </div>
        <div className='block relative w-full'>
          <img
            className='absolute h-auto w-[70%] -left-[30%] bottom-0 md:w-[42%] md:-left-32 md:-top-56 z-10'
            src='/src/assets/static/imgpage/joven-hermosa-modelo-posando 1.png'
            alt='image description'
          />
          <img
            className='absolute h-auto w-[80%] left-[10%] bottom-0 md:w-[50%] md:left-48 md:-top-72 z-20'
            src='/src/assets/static/imgpage/disparo-cabeza-atractiva-chica-raza-mixta 1.png'
            alt='image description'
          />
          <img
            className='absolute h-auto w-[85%] -right-[22%] bottom-0 md:w-[50%] md:-right-2 md:-top-72 z-10'
            src='/src/assets/static/imgpage/modelos-caucasicos-asiaticos-primer-plano-posando-juntos 1.png'
            alt='image description'
          />
        </div>
        <span className='self-center sm:flex sm:pt-32'>
          <p className='pt-10 px-5 sm:pt-16 sm:px-36 text-sm md:text-2xl text-palette-Auburn md:text-slate-800 font-UrbanistMedium dark:text-gray-400 '>
            En este lugar vas a encontrar todos los servicios y capacitaciones
            que necesites para que te sigas formando en el mundo de la estética.
            Encontrarán infinitas posibilidades donde podrás potenciar tus
            talentos y capacidades para lograr ser la profesional que tanto
            deseas! <br /> Ofrecemos capacitaciones que cumplen el objetivo de
            lograr que los pacientes puedan sanar, mejorar su apariencia y su
            autoestima. <br /> Les doy la bienvenida a sanar a través de las
            manos, el intercambio de la energía y el amor.
          </p>
        </span>
        <span className='flex py-12 justify-center'>
          <img
            className='w-[45%] md:w-1/4'
            src='/src/assets/static/imgpage/Bossy2_Mesa de trabajo 1 1.png'
            alt=''
          />
        </span>
      </div>
    </div>
  )
}

export default Presentation
