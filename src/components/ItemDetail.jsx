import { useEffect, useState, Fragment } from 'react'
import { services } from '../assets/static/courses/data.json'
import Button from './Elements/Button'
import Headers from './Elements/Headers'

const ItemDetail = ({ servicioId }) => {
  const [item, setItem] = useState({})
  const FIRSTSERVICECLASS = services.FYC
  const SECONDSERVICECLASS = services.CPYM

  useEffect(() => {
    const x = FIRSTSERVICECLASS.find((el) => el.title === servicioId)
    const y = SECONDSERVICECLASS.find((el) => el.title === servicioId)
    x ? setItem(x) : setItem(y)
  }, [servicioId])

  console.log(item)
  return (
    <div className='container grid gap-6 lg:gap-10 mb-10'>
      <Headers title={servicioId}/>
      {item.img
        ? (
          <div className='flex flex-wrap-reverse gap-3 lg:gap-12 px-6 justify-center'>
            {item.img.map((el) => (
              <img
                className='rounded-2xl object-center object-cover grow max-h-[9rem] w-[10rem] md:w-[13rem] md:max-h-[12rem] lg:w-[16rem] lg:max-h-15rem] xl:w-[23rem] xl:max-h-[21rem] hover:brightness-105 transition-all'
                src={`/src/assets/static/imgservices/${el}`}
                alt={`${el}`}
                key={el}
              />
            ))}
          </div>
          )
        : (
            ''
          )}
      <p className='mx-4 md:mx-8 lg:mx-16 font-Urbanist text-sm md:text-base lg:text-xl'>{item.desc}</p>
      {item.benef && item.benef.length !== 0
        ? (
          <div>
            <p className='mx-4 md:mx-8 lg:mx-16 font-Urbanist text-sm md:text-base lg:text-xl'>Beneficios</p>
            {item.benef.map((el) => (
              <Fragment key={el}>
                <p className='mx-4 md:mx-8 lg:mx-16 mb-2 font-Urbanist text-sm md:text-base lg:text-xl'>-{el}</p>
              </Fragment>
            ))}
          </div>
          )
        : (
            ''
          )}
      <Button info={false}></Button>
    </div>
  )
}

export default ItemDetail
