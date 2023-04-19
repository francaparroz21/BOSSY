import { useEffect, useState } from 'react'
import { products } from '../assets/courses/data.json'
import { CarouselItem } from './CarouselItem'
import Headers from './Elements/Headers'

export const ProductsCarrusel = () => {
  const [selectedIndex, useSelectedIndex] = useState(0)
  const [selectedProduct, useSelectedProduct] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const PRODUCTS = products.map(el => el)
    useSelectedProduct(PRODUCTS[selectedIndex])
    setIsVisible(true)
    return () => {
      setIsVisible(false)
    }
  }, [selectedIndex])

  const selectNewIndex = (index, forward) => {
    const images = products.map(el => el.img)
    const condition = forward ? index < images.length - 1 : index > 0
    const nextIndex = forward ? (condition ? index + 1 : 0) : (condition ? index - 1 : images.length - 1)
    useSelectedIndex(nextIndex)
  }
  const previous = () => {
    selectNewIndex(selectedIndex, false)
  }
  const next = () => {
    selectNewIndex(selectedIndex, true)
  }

  return (
    <section className='w-full flex flex-col gap-3 md:gap-10 lg:gap-5'>
      <Headers title={'Productos'} />
      <div className='relative h-64 sm:h-52 md:h-[17.5rem] lg:h-[36rem] mx-1 mb-[26rem] lg:mb-5 rounded-lg bg-gradient-to-b from-palette-ChampagnePink to-palette-OrchidPink'>
        <CarouselItem
          key={selectedProduct.title}
          img={selectedProduct.img}
          desc={selectedProduct.desc}
          title={selectedProduct.title}
          benef={selectedProduct.benef}
          principiosactivos={selectedProduct.principioactivo}
          mododeuso={selectedProduct.mododeuso}
          className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />
        <button
          onClick={previous}
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-1 md:px-4 cursor-pointer group focus:outline-none'
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
          onClick={next}
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-1 md:px-4 cursor-pointer group focus:outline-none'
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
    </section>
  )
}
