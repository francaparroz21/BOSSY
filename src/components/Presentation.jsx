import React from 'react'

const Presentation = () => {
  return (
    <div className='container flex flex-col sm:flex-row gap-4'>
      <img className='h-auto w-3/5 self-center aspect-square sm:self-start sm:w-1/3 rounded-t-full' src='/src/assets/static/ysya.jpg' alt='image description' />
      <div className='flex flex-col m-5 gap-2 text-justify self-center sm:flex sm:m-2'>
        <p className="text-base mb-3 font-medium text-gray-400 dark:text-gray-400">
          Mi nombre es
        </p>
        <span>
          <h1 className='text-lg sm:text-2xl text-blue-500 font-semibold'>
            Valentina Bossy, creadora de BOSSY SKINCARE.
          </h1>
        </span>
        <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
          Soy maquilladora, masajista profesional, cosmetóloga, cosmiatra holística, dermatocosmíatra, brow & lash artist.
        </p>
      </div>
    </div>
  )
}

export default Presentation