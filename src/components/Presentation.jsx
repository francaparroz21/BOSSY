const Presentation = () => {
  return (
    <div className='container flex flex-col gap-4 mx-auto overflow-x-hidden '>
      <svg
        className='absolute -top-[13rem] sm:top-10 md:top-14 lg:top-32 xl:hidden xl:opacity-0 left-0 right-0 z-0'
        id='visual'
        viewBox='0 280 1240 1600'
        width='auto'
        height='auto'
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
          width='1240'
          height='4000'
          className=''
        />
      </svg>
      <div className='flex flex-col xl:elipse xl:bg-gradient-to-b from-palette-ChampagnePink to-palette-OrchidPink'>
        <div className=' pb-64 pt-24 md:pt-32 md:pb-80 lg:pt-56 xl:pt-44 xl:pb-72 z-20'>
          <h1 className='text-center text-xl px-10 md:text-2xl md:px-20 lg:px-40 xl:px-64 lg:text-5xl font-Cremona text-stone-700'>
            TE DAMOS LA BIENVENIDA A BOSSY SKINCARE
          </h1>
        </div>
        <div className='block relative w-full z-20'>
          <img
            className='absolute h-auto w-[60%] -left-[25%] bottom-0 sm:w-[50%] sm:-left-[15%] lg:w-[46.2%] lg:-left-[12%] lg:-top-[13rem] xl:bottom-[0%] z-10'
            src='/assets/imgpage/joven-hermosa-modelo-posando 1.png'
            alt='image description'
          />
          <img
            className='absolute h-auto w-[70%] left-[10%] bottom-0 sm:w-[55%] sm:left-[15%] lg:w-[50%] lg:left-[15%] lg:-top-60 xl:bottom-[0%] z-20'
            src='/assets/imgpage/disparo-cabeza-atractiva-chica-raza-mixta 1.png'
            alt='image description'
          />
          <img
            className='absolute h-auto w-[75%] -right-[18%] bottom-0 sm:w-[55%] sm:-right-[5%] lg:w-[50%] lg:-right-[1%] lg:-top-60 xl:bottom-[0%] z-10'
            src='/assets/imgpage/modelos-caucasicos-asiaticos-primer-plano-posando-juntos 1.png'
            alt='image description'
          />
        </div>
        <span className='self-center sm:flex sm:pt-10 lg:pt-48 xl:pt-52 z-20'>
          <p className='pt-10 px-5 md:pt-0 md:px-24 lg:pt-0 lg:px-36  text-sm md:text-lg lg:text-2xl text-palette-Auburn md:text-slate-800 font-UrbanistMedium dark:text-gray-400 '>
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
        <span className='flex py-12 lg:py-18 justify-center z-20'>
          <img
            className='w-[45%] md:w-1/4 lg:w-[31%]'
            src='/assets/imgpage/Bossy2_Mesa de trabajo 1 1.png'
            alt=''
          />
        </span>
      </div>
      {/* -top-[13rem] sm:top-10 md:top-14 lg:top-32 */}

    </div>
  )
}

export default Presentation
