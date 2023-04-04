import { courses } from "../assets/courses/data.json"
import { useEffect, useState } from "react"
import Headers from "./Elements/Headers"
import Button from "./Elements/Button"

const CourseDetail = ({ capacitacionesId }) => {
  const [item, setItem] = useState({})

  useEffect(() => {
    const elemento = courses.find((el) => el.title === capacitacionesId)
    setItem(elemento)
  }, [capacitacionesId])

  const Check = (item) => {
    return item && item.length != 0
  }

  return (
    <div className='container grid gap-6 lg:gap-10 mb-10'>
      <Headers title={capacitacionesId} />
      {Check(item.img) ? (
        <div className='flex flex-wrap-reverse gap-3 lg:gap-12 px-6 justify-center'>
          {item.img.map((el) => (
            <img
              className='rounded-2xl object-center object-cover grow max-h-[9rem] w-[10rem] md:w-[13rem] md:max-h-[12rem] lg:w-[16rem] lg:max-h-15rem] xl:w-[23rem] xl:max-h-[21rem] hover:brightness-105 transition-all'
              src={`/assets/imgservices/${el}`}
              alt={`${el}`}
              key={el}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      {Check(item.desc) ? (
        <>
          <p className=' mx-4 md:mx-8 lg:mx-16 font-Urbanist text-sm md:text-base lg:text-xl'>
            {item.desc}
          </p>
        </>
      ) : (
        ""
      )}
      {Check(item.topics) ? (
        <div>
          <p className='mx-4 md:mx-8 lg:mx-16 font-Urbanist text-sm md:text-base lg:text-xl'>
            Temáticas:
          </p>
          {item.topics.map((topic) => (
            <p
              key={topic[0]}
              className=' mx-4 md:mx-8 lg:mx-16 font-Urbanist text-sm md:text-base lg:text-xl'
            >
              {topic}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
      {Check(item.certificate) ? (
        <>
          <p className=' mx-4 md:mx-8 lg:mx-16 font-Urbanist text-sm md:text-base lg:text-xl'>
            {item.certificate}
          </p>
        </>
      ) : (
        ""
      )}
      {Check(item.details) ? (
        <>
          <p className=' mx-4 md:mx-8 lg:mx-16 font-Urbanist text-sm md:text-base lg:text-xl'>
            {item.details}
          </p>
        </>
      ) : (
        ""
      )}
      <Button info={false}/>
    </div>
  )
}

export default CourseDetail
