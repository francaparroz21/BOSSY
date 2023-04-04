import { NavLink } from 'react-router-dom'
import { products } from '../assets/courses/data.json'
import CarouselItem from './CarouselItem'
import Headers from './Elements/Headers'

export const NewCarousel = () => {
  return (
    <div className='container flex flex-col gap-10'>
      <Headers title={'Productos'}/>
      <div className='flex flex-col align-middle mb-10'>
        <div
          id='animation-carousel'
          className='relative'
          data-carousel='static'
        >
          {/* <!-- Carousel wrapper --> */}
          <div className='relative h-56 overflow-hidden rounded-lg md:h-[32rem] bg-gradient-to-b from-palette-ChampagnePink to-palette-OrchidPink'>
            {products.map((el) => (
              <CarouselItem
                key={el.id}
                img={el.img}
                desc={el.desc}
                title={el.title}
                benef={el.benef}
                principiosactivos={el.principioactivo}
                mododeuso={el.mododeuso}
              />
            ))}

            {/* <!-- Item 1 --> */}
            <div
              className='hidden duration-150 ease-linear'
              data-carousel-item='active'
            >
              <img
                src='/src/assets/static/imgproducts/alpine-rose-cleancer.png'
                className='absolute block w-[25%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 hover:brightness-105 transition-all'
                alt='alpine-rose-cleancer'
              />
              <div className='absolute block w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 -right-1/4 mr-24'>
                <div className='flex flex-col bg-[#F5F5F5]/70 p-3 px-5 rounded-xl'>
                  <p className=' font-bold font-UrbanistBold mb-2'>
                    ALPINE ROSES CLEANSER EMULSION
                  </p>
                  <p className=' text-lg font-semibold font-UrbanistSemibold'>
                    Limpiador suave facial
                  </p>
                  <p className=' text-slate-700 clear-left text-lg font-Urbanist'>
                    Formula innovadora que produce una microemulsión y efectúa
                    una limpieza profunda pero sin irritar la piel. <br />
                    - Limpia y desmaquilla <br />
                    - No altera el equilibrio natural de la piel <br />- Ideal
                    para pieles sensibles o delicadas
                  </p>
                  <p className=' text-lg font-UrbanistSemibold'>Modo de uso</p>
                  <p className=' text-slate-700 clear-left text-lg font-Urbanist'>
                    Aplicar una pequeña cantidad de producto en rostro, cuello y
                    escote. Masajear unos segundos y luego enjuagar con algodón
                    o esponjas embebidas en agua. El enjuague debe ser completo
                    sin dejar residuos de producto. También se puede utilizar
                    para el desmaquillado de párpados y labios.
                  </p>
                  <NavLink
                    className=' inline-flex items-center px-12 py-1.5 mt-auto ml-auto text-center text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink'
                    to='#'
                  >
                    Ver Catálogo
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type='button'
            className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-prev
          >
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              <span className='sr-only'>Previous</span>
            </span>
          </button>
          <button
            type='button'
            className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-next
          >
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
