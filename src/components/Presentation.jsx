import React from 'react'

const Presentation = () => {
  return (
    <div className='container flex flex-col sm:flex-row gap-4'>
      <img src='/src/assets/static/ysya.jpg' className='h-auto w-3/5 self-center sm:self-start sm:w-1/4 rounded-xl' alt='image description' />
      <div className='flex flex-col m-5 text-justify self-center sm:flex sm:m-2'>
        <p className="mb-3 font-medium text-md text-gray-400 dark:text-gray-400">
          Mi nombre es
        </p>
        <span>
          <h1 className='text-xl sm:text-2xl text-blue-500 font-semibold'>
            Valentina Bossy, creadora de BOSSY SKINCARE.
          </h1>
        </span>
        <p className='sm:mb-3 font-medium text-md text-gray-500 dark:text-gray-400'>
          Soy maquilladora, masajista profesional, cosmetóloga, cosmiatra holística, dermatocosmíatra, brow & lash artist.
        </p>
      </div>
    </div>
  )
}

export default Presentation