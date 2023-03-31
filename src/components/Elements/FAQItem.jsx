import { useState } from 'react'

const FAQItem = ({ pregunta, respuesta, index }) => {
  const [toggle, setToggle] = useState(true)
  const [hidden, setHidden] = useState('hidden')

  const Toggle = () => {
    setToggle(!toggle)
    toggle ? setHidden('') : setHidden('hidden')
    console.log(hidden)
  }

  return (
    <>
      <h2 id={`accordion-collapse-heading-${index + 1}`}>
        <button
          className='flex items-center justify-between w-full grow p-2 text-left text-xl text-stone-700 rounded-lg font-Urbanist bg-palette-SoftPeach border-opacity-40 focus:ring-palette-SoftPeach focus:outline-none focus:bg-palette-Peach dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800'
          data-accordion-target={`#accordion-collapse-body-${index + 1}`}
          aria-controls={`accordion-collapse-body-${index + 1}`}
          aria-expanded='true'
          type='button'
          onClick={() => Toggle()}
        >
          <span>{pregunta}</span>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-accordion-icon
            className='w-6 h-6 rotate-180 shrink-0 fill-gray-700'
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
      </h2>
      <div
        id={`accordion-collapse-body-${index + 1}`}
        className={hidden}
        aria-labelledby={`accordion-collapse-heading-${index + 1}`}
      >
        <div className='p-4 font-Urbanist bg-inherit rounded-sm border-opacity-5 border-palette-SoftPeach dark:border-gray-700 dark:bg-gray-900'>
          <p className='mb-2 font-UrbanistMedium text-gray-500 dark:text-gray-400'>
            {respuesta}
          </p>
        </div>
      </div>
    </>
  )
}

export default FAQItem
