import React from 'react'
import { data } from '../assets/static/courses/data'

const Services = () => {
  const { courses } = data
  return (
    <div className='container align-middle mx-10'>
      <h1 className='mx-5 mt-5 text-2xl font-bold tracking-tight text-gray-400 dark:text-white'>
        Servicios
      </h1>
      <div className='flex gap-5 ml-10 snap-x snap-mandatory overflow-x-auto scroll-smooth'>
        {courses.map(course =>
          <div key={course.id}
            className='min-w-[80%] sm:min-w-[85%] m-10 snap-always snap-center scroll-m x-auto'>
            <a href="#" className="block p-10 bg-white border border-blue-300 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl text-gray-500 font-bold tracking-tight dark:text-white">{course.title}</h5>
              <p className="font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel corrupti consectetur iure inventore amet dolorum aperiam repellat! Asperiores, eligendi?</p>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services