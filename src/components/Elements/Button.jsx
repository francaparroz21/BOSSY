import { NavLink } from "react-router-dom"

const Button = ({ title, info, direction }) => {
  return (
    <>
      {info ? (
        <NavLink
          className=' inline-flex items-center px-9 py-1 lg:px-12 lg:py-1.5 mt-auto text-center text-sm md:text-base lg:text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink cursor-pointer'
          to={`/${direction}/${title}`}
        >
          <svg
            className='w-3 lg:w-5'
            viewBox='0 0 24 24'
            fill='323232'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <g id='SVGRepo_iconCarrier'>
              {" "}
              <path
                d='M5 12H19'
                stroke='#F3F4F6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />{" "}
              <path
                d='M12 5L12 19'
                stroke='#F3F4F6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />{" "}
            </g>
          </svg>
          {"Info"}
        </NavLink>
      ) : (
        <a
          className=' inline-flex items-center px-9 py-1 lg:px-12 lg:py-1.5 ml-auto mr-5 md:mr-10 lg:mr-15 text-center text-sm md:text-base lg:text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink cursor-pointer transition-colors'
          to='#'
        >
          {"Reservar Turno"}
        </a>
      )}
    </>
  )
}

export default Button
