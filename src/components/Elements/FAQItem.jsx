import { useState } from 'react'

const FAQItem = ({ pregunta, respuesta, index, isOpen, onClick }) => {
  const [toggle, setToggle] = useState(true)
  const [hidden, setHidden] = useState('hidden')

  return (
    <>
      <button
        className='flex items-center justify-between w-full grow p-2 text-left text-xl text-stone-700 rounded-lg font-Urbanist bg-palette-SoftPeach border-opacity-40 focus:ring-palette-SoftPeach focus:outline-none focus:bg-palette-Peach dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800'
        onClick={onClick}
      >
        <p className='text-sm md:text-base'>{pregunta}</p>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          data-accordion-icon
          className={`w-6 h-6 shrink-0 fill-gray-700 transition-all ` + (isOpen ? 'rotate-45' : 'rotate-90')}
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0' />
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <path
              d='M5 12H19'
              stroke='#323232'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />{' '}
            <path
              d='M12 5L12 19'
              stroke='#323232'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />{' '}
          </g>
        </svg>
      </button>
      <div
        className={isOpen ? '' : 'hidden'}
      >
        <div className='px-2 md:p-2 mb-3 font-Urbanist bg-inherit rounded-sm border-opacity-5 border-palette-SoftPeach dark:border-gray-700 dark:bg-gray-900'>
          <p className=' text-xs md:text-sm lg:text-base font-UrbanistMedium text-gray-500 dark:text-gray-400'>
            {respuesta}
          </p>
        </div>
      </div>
    </>
  )
}

export default FAQItem
