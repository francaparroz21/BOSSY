import { courses } from '../assets/courses/data.json'
import { useParams } from 'react-router-dom'
import CourseDetail from './CourseDetail'
import Headers from './Elements/Headers'
import Card from './Elements/Card'

const Courses = () => {
  const { capacitacionesId } = useParams()
  return (
    <div className='w-full flex flex-col'>
      {capacitacionesId
        ? (
          <>
            <CourseDetail capacitacionesId={capacitacionesId} />
          </>
        )
        : (
          <>
            <Headers title={'Capacitaciones'}></Headers>
            <div className='w-full grid justify-items-center grid-cols-special xl:grid-cols-4 grid-auto-row gap-3 md:gap-6 lg:gap-10 p-3 md:p-5 bg-palette-ChampagnePink/60 '>
              {courses.map((course) => (
                <a href={`/servicios/${course.title}`} className='w-fit' key={course.id}>
                  <Card
                    img={course.img[0]}
                    title={course.title}
                    direction={'capacitaciones'}
                  ></Card>
                </a>
              ))}
            </div>
          </>
        )}
    </div>
  )
}

export default Courses
