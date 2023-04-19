const Presentation = () => {
  return (
    <div className='w-full flex flex-col gap-4 mb-4 overflow-x-hidden rounded-3xl bg-gradient-to-b from-palette-ChampagnePink to-palette-OrchidPink '>
      <svg
        className='absolute w-full h-full hidden xl:opacity-0 left-0 right-0 z-0'
        id='visual'
        viewBox='0 100 1240 1600'
      >
        <defs>
          <clipPath id='my-clip-path'>
            <path
              d='M 0 4000 L 0 405 A 11 7 0 0 1 1240 405 L 1240 4000 z'
              strokeLinecap='round'
              strokeLinejoin='miter'
            ></path>
          </clipPath>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' style={{ stopColor: "#F1DDD6" }}></stop>
            <stop offset='100%' style={{ stopColor: "#DEB2BF" }}></stop>
          </linearGradient>
        </defs>
        <rect
          clipPath='url(#my-clip-path)'
          fill='url(#gradient)'

          className='absolute w-full h-[100vh]'
        />
      </svg>
      <div className='flex flex-col xl:bg-gradient-to-b from-palette-ChampagnePink to-palette-OrchidPink'>
        <div className=' pb-56 pt-16 sm:pb-64 sm:pt-20 md:pt-20 md:pb-80 lg:pt-32 lg:pb-96 xl:pt-44 z-20'>
          <h1 className='text-center px-5 md:px-10 lg:px-40 xl:px-64 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-Cremona text-stone-700'>
            TE DAMOS LA BIENVENIDA A BOSSY SKINCARE
          </h1>
        </div>
        <div className='block relative w-full z-20 shadow-xl'>
          <img
            className='absolute h-auto bottom-0 w-[50%] -left-[19%] sm:w-[45%] sm:-left-[12%] md:w-[40%] md:-left-[5%] lg:w-[40%] lg:-left-[5%] xl:max-w-[480px] xl:left-[0%] z-10'
            src='/assets/imgpage/joven-hermosa-modelo-posando 1.png'
            alt='joven-hermosa-modelo-posando'
          />
          <img
            className='absolute h-auto bottom-0 w-[55%] left-[11%] sm:w-[50%] sm:left-[15.5%] md:w-[45%] md:left-[18%] lg:w-[45%] lg:left-[18%] xl:max-w-[500px] xl:left-[23%] z-20'
            src='/assets/imgpage/disparo-cabeza-atractiva-chica-raza-mixta 1.png'
            alt='chica-atractiva'
          />
          <img
            className='absolute h-auto bottom-0 w-[60%] -right-[10%] sm:w-[53%] sm:-right-[5%] md:w-[50%] md:right-[5%] lg:w-[50%] lg:right-[5%] xl:max-w-[520px] xl:right-[8%] z-10'
            src='/assets/imgpage/modelos-caucasicos-asiaticos-primer-plano-posando-juntos 1.png'
            alt='modelos-caucasicos-asiaticos-primer-plano-posando-juntos'
          />
        </div>
        <span className='self-center sm:flex py-6 sm:py-10 xl:py-14 z-20'>
          <p className=' px-5 sm:px-12 md:px-24 lg:px-36 text-sm md:text-lg lg:text-2xl text-slate-700 font-UrbanistMedium'>
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
        <span className='flex justify-center py-3 sm:py-8 md:py-10 lg:py-18  z-20'>
          <img
            className='w-[35%] sm:w-1/3 md:w-1/4 lg:w-[31%] xl:w-[320px]'
            src='/assets/imgpage/Bossy2_Mesa de trabajo 1 1.png'
            alt=''
          />
        </span>
      </div>
      {/* -top-[13rem] sm:top-10 md:top-14 lg:top-32 */}
      {/* top-0 sm:top-[0%] md:top-14 lg:top-32 svg*/}
    </div>
  )
}

export default Presentation
