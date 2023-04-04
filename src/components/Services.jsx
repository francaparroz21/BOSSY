import { useParams } from "react-router-dom"
import { services } from "../assets/courses/data.json"
import ItemDetail from "./ItemDetail"
import Headers from "./Elements/Headers"
import Card from "./Elements/Card"

const Services = () => {
  const { servicioId } = useParams()
  const FIRSTSERVICECLASS = services.FYC
  const SECONDSERVICECLASS = services.CPYM

  return (
    <div className='w-full flex flex-col'>
      {servicioId ? (
        <>
          <ItemDetail servicioId={servicioId} />
        </>
      ) : (
        <>
          <Headers title={" Facial y Corporal"}></Headers>
          <div className='w-full grid justify-items-center grid-cols-special lg:grid-cols-4 grid-auto-row gap-3 md:gap-6 lg:gap-10 p-3 md:p-5 '>
            {FIRSTSERVICECLASS.map((service) => (
              <Card
                key={service.id}
                img={service.img[0]}
                title={service.title}
                direction={'servicios'}
              ></Card>
            ))}
          </div>
          <Headers title={"Cejas - Pestañas y Maquillaje"}></Headers>
          <div className='w-full grid justify-items-center grid-cols-special lg:grid-cols-4 grid-auto-row gap-3 md:gap-6 lg:gap-10 p-3 md:p-5 '>
            {SECONDSERVICECLASS.map((service) => (
              <Card
                id={service.id}
                img={service.img[0]}
                title={service.title}
                key={service.id}
                direction={'servicios'}

              ></Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Services
