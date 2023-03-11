import { useEffect, useState, Fragment } from 'react'
import { services } from '../assets/static/courses/data.json'

const ItemDetail = ({ servicioId }) => {
  const [item, setItem] = useState({})
  const FIRSTSERVICECLASS = services.FYC
  const SECONDSERVICECLASS = services.CPYM
  console.log(servicioId)

  useEffect(() => {
    const x = FIRSTSERVICECLASS.find((el) => el.title === servicioId)
    const y = SECONDSERVICECLASS.find((el) => el.title === servicioId)
    x ? setItem(x) : setItem(y)
  }, [servicioId])

  console.log(item)
  return (
    <div className='container grid gap-10 mb-10'>
      <span className='w-full sticky font-Urbanist text-3xl grow p-2 indent-5 bg-palette-OrchidPink text-slate-700'>
        {servicioId}
      </span>
      {item.img
        ? (
          <div className='flex gap-12 justify-center'>
            {item.img.map((el) => (
              <img
                className='rounded-2xl object-center object-cover md:w-[22rem] md:h-[23rem] hover:brightness-105 transition-all '
                src={`/src/assets/static/imgservices/${el}`}
                alt=''
                key={el}
              />
            ))}
          </div>
          )
        : (
            ''
          )}
      <p className=' mx-16 font-Urbanist text-xl'>{item.desc}</p>
      {item.benef && item.benef.length !== 0
        ? (
          <div>
            <p className='mx-16 font-Urbanist text-xl'>Beneficios</p>
            {item.benef.map((el) => (
              <Fragment key={el}>
                <p className='mx-16 font-Urbanist text-xl'>-{el}</p>
                <br />
              </Fragment>
            ))}
          </div>
          )
        : (
            ''
          )}
      <a
        to='#'
        className=' inline-flex items-center px-12 py-1.5 ml-auto mr-24 text-center text-xl font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink cursor-pointer'
      >
        Reservar Turno
      </a>
    </div>
  )
}

export default ItemDetail
