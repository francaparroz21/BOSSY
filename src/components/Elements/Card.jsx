import Button from "./Button"

const Card = ({ img, title, direction }) => {
  return (
    <div className='flex flex-col h-full grow w-[250px] items-center justify-between gap-3 md:gap-4 pt-3 px-3 pb-3 md:pb-5 bg-slate-100 border border-slate-200 rounded-2xl shadow-black/25% shadow-lg'>
      <img
        className='rounded-t-2xl object-center object-cover h-[14rem] w-[14rem] lg:w-[15rem] md:mx-auto'
        src={`/assets/imgservices/${img}`}
        alt={`${img}`}
      />
      <h5 className='grow px-2 lg:px-8 mt-auto text-center text-base md:text-md lg:text-xl font-Urbanist text-slate-700'>
        {title}
      </h5>
      <Button title={title} info={true} direction={direction} />
    </div>
  )
}

export default Card
