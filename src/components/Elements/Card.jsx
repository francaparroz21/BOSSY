import Button from "./Button"
const Card = ({ img, title, direction }) => {
  return (
    <div className='flex w-min hover:brightness-105 transition-all'>
      <div className='flex flex-col grow w-[180px] md:w-[230px] xl:w-[280px] items-center justify-between gap-3 md:gap-4 pt-3 px-3 pb-3 md:pb-5 bg-gray-100 border border-gray-200 md:aspect-square rounded-2xl shadow-black/25% shadow-lg  dark:bg-gray-800 dark:border-gray-700'>
        <a href='#' className=''>
          <img
            className='rounded-t-2xl object-center object-cover w-[13rem] h-[10rem] md:w-[14rem] md:h-[11rem] lg:w-[16rem] lg:h-[15rem] md:mx-auto'
            src={`/assets/imgservices/${img}`}
            alt={`${img}`}
          />
        </a>
        <a href='#' className='block mt-auto'>
          <h5 className='grow px-2 lg:px-8 text-center text-base md:text-md lg:text-xl font-Urbanist text-slate-700  dark:text-slate-100'>
            {title}
          </h5>
        </a>
        <Button title={title} info={true} direction={direction} />
      </div>
    </div>
  )
}

export default Card
