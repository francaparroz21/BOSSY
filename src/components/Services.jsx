import React from 'react'
import { data } from '../assets/static/courses/data'

const Services = () => {
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
              <p className="font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel corrupti consectetur iure inventore amet dolorum aperiam repellat! Asperiores, eligendi?</p>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services