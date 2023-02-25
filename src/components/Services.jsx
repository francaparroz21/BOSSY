import React from 'react'
import { data } from '../assets/static/courses/data'

export const Services = () => {
  const { courses } = data
  return (
    <div className='flex flex-col container align-middle'>
      <h1 className='m-5 sm:m-10 text-2xl tracking-tight text-gray-300 dark:text-white'>
        Servicios
      </h1>
      <div className='flex gap-5 ml-0 snap-x snap-mandatory overflow-x-auto scroll-smooth'>
        {courses.map(course =>
          <div key={course.id}
            className='min-w-[80%] sm:min-w-[85%] m-10 snap-always snap-center'>
            <a href="#" className="block p-10 bg-white border border-x-0 border-blue-300 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-xl text-blue-500 font-bold tracking-tight dark:text-white">{course.title}</h5>
              <p className="font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicsing elit. Nobis vel corrupti consectetur iure inventore amet dolorum aperiam repellat! Asperiores, eligendi?
              </p>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export const ServiceCarousel = () => {
  const item = 
  <div className="flex grow self-center gap-4 bg-white border border-gray-200 rounded-lg shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg w-[25rem]" src="/src/assets/static/disparo-cabeza-atractiva-chica-raza-mixta 1.png" alt="" />
    </a>
    <div className="p-10 self-center">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  </div>
  return (
    <div className='flex flex-col container align-middle'>
      <h1 className='m-5 text-sm tracking-tight sm:m-10 text-gray-300 dark:text-white'>
        Servicios
      </h1>
      <div id="controls-carousel" className="relative" data-carousel="static">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div className="hidden duration-700 ease-in-out p-2 bg-blue-300" data-carousel-item>
          {item}          </div>
          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out p-2 bg-blue-300" data-carousel-item="active">
          {item}          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out p-2 bg-blue-300" data-carousel-item>
          {item}          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out p-2 bg-blue-300" data-carousel-item>
          {item}          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out p-2 bg-blue-300" data-carousel-item>
            {item}
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-700 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-700 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}