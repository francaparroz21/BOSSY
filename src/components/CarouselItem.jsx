import { NavLink } from 'react-router-dom'
const CarouselItem = ({
  title,
  benef,
  principiosactivos,
  mododeuso,
  desc,
  img
}) => {
  const Text = ({ children }) =>
    <p className='text-sm md:text-lg  text-slate-700 clear-left font-Urbanist'>
      {children}
    </p>
  const SubTitle = ({ children }) =>
    <p className='text-base md:text-lg font-semibold text-slate-700 font-UrbanistSemibold'>
      {children}
    </p>


  const Check = (item) => {
    return item && item.length !== 0
  }

  return (
    <>
      <div className='hidden duration-150 ease-linear' data-carousel-item>
        <img
          src={`/assets/imgproducts/${img}`}
          className='absolute block w-[45%] sm:w-[30%] md:w-[30%] lg:w-[25%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:left-1/4 hover:brightness-105 transition-all'
          alt={`${img}`}
        />

        <div className='absolute hidden lg:block w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 -right-1/4 mr-24'>
          <div className='flex flex-col bg-[#F5F5F5]/70 p-3 px-5 rounded-xl'>
            {Check(title)
              ? (
                <p className='font-base font-bold font-UrbanistBold mb-2 text-slate-700'>{title}</p>
              )
              : (
                <></>
              )}
            {Check(desc)
              ? (
                <>
                  <SubTitle>{'Detalle'}</SubTitle>
                  <Text>{desc}</Text>
                </>
              )
              : (
                <></>
              )}
            {Check(benef)
              ? (
                <>
                  <SubTitle>{'Beneficios'}</SubTitle>
                  <Text>{benef}</Text>
                </>
              )
              : (
                <></>
              )}
            {Check(principiosactivos)
              ? (
                <>
                  <SubTitle>{'Principios activos'}</SubTitle>
                  <Text>{principiosactivos}</Text>
                </>
              )
              : (
                <></>
              )}
            {Check(mododeuso)
              ? (
                <>
                  <SubTitle>{'Modo de uso'}</SubTitle>
                  <Text>{mododeuso}</Text>
                </>
              )
              : (
                <></>
              )}
            <NavLink
              className='inline-flex items-center px-12 py-1.5 mt-auto ml-auto text-center text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink'
              to='#'
            >
              Ver Catálogo
            </NavLink>
          </div>
        </div>
        <div className='absolute block lg:hidden w-full top-full'>
          <div className='flex flex-col bg-[#F5F5F5] p-3 sm:px-7'>
            {Check(title)
              ? (
                <p className='text-xs md:text-base font-bold font-UrbanistBold mb-2 text-slate-700'>{title}</p>
              )
              : (
                <></>
              )}
            {Check(desc)
              ? (
                <>
                  <SubTitle>{'Detalle'}</SubTitle>
                  <Text>{desc}</Text>
                </>
              )
              : (
                <></>
              )}
            {Check(benef)
              ? (
                <>
                  <SubTitle>{'Beneficios'}</SubTitle>
                  <Text>{benef}</Text>
                </>
              )
              : (
                <></>
              )}
            {Check(principiosactivos)
              ? (
                <>
                  <SubTitle>{'Principios activos'}</SubTitle>
                  <Text>{principiosactivos}</Text>
                </>
              )
              : (
                <></>
              )}
            {Check(mododeuso)
              ? (
                <>
                  <SubTitle>{'Modo de uso'}</SubTitle>
                  <Text>{mododeuso}</Text>
                </>
              )
              : (
                <></>
              )}
            <NavLink
              className='inline-flex items-center px-12 py-1.5 mt-3 ml-auto text-center text-xs md:text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink'
              to='#'
            >
              Ver Catálogo
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselItem
