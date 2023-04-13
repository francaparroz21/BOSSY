import { useState } from 'react'
import { faq } from '../assets/courses/data.json'
import FAQItem from './Elements/FAQItem'
import Headers from './Elements/Headers'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }
  return (
    <section className='w-full grid gap-3 md:gap-0'>
      <Headers title={'Preguntas Frecuentes'} />
      <div className='flex'>
        <div
          className='basis-2/3 flex flex-col gap-3 grow px-3 pb-3 md:p-5 justify-evenly transition-transform'>
          {faq.preguntas.map((pregunta, i) => (
            <FAQItem
              index={i}
              key={i}
              pregunta={pregunta}
              respuesta={faq.respuestas[i]}
              isOpen={i === activeIndex}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
        <aside className='hidden basis-1/3 lg:flex lg:flex-col justify-center'>
          <img src='/assets/imgpage/Rectangle 64.png' alt='' />
          <img src='/assets/imgpage/Rectangle 66.png' alt='' />
          <img src='/assets/imgpage/Rectangle 67.png' alt='' />
        </aside>
      </div>
    </section>
  )
}

export default Faq
