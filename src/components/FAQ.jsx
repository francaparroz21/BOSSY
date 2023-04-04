import { faq } from '../assets/courses/data.json'
import FAQItem from './Elements/FAQItem'

const Faq = () => {
  return (
    <div className='container grid'>
      <span className='w-full sticky font-Urbanist text-3xl grow p-2 indent-5 bg-palette-OrchidPink text-slate-700'>
        Preguntas Frecuentes
      </span>
      <div className='flex'>
        <div
          className='basis-2/3 flex flex-col gap-4 grow p-5 pt-8 justify-evenly transition-transform'
          id='accordion-collapse'
          data-accordion='collapse'
        >
          {faq.preguntas.map((pregunta, i) => (
            <FAQItem
              pregunta={pregunta}
              respuesta={faq.respuestas[i]}
              index={i}
              key={i}
            />
          ))}
        </div>
        <div className='basis-1/3 flex flex-col justify-center'>
          <img src='/assets/imgpage/Rectangle 64.png' alt='' />
          <img src='/assets/imgpage/Rectangle 66.png' alt='' />
          <img src='/assets/imgpage/Rectangle 67.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Faq
