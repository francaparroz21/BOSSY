import { NavLink } from "react-router-dom";
const CarouselItem = ({
  index,
  title,
  benef,
  principiosactivos,
  mododeuso,
  desc,
  img,
}) => {
  const Check = (item) => {
    return item && item.length != 0;
  };

  return (
    <>
      <div className="hidden duration-150 ease-linear" data-carousel-item>
        <img
          src={`/src/assets/static/imgproducts/${img}`}
          className="absolute block w-[25%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 hover:brightness-105 transition-all"
          alt={`${img}`}
        />

        <div className="absolute block w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 -right-1/4 mr-24">
          <div className="flex flex-col bg-[#F5F5F5]/70 p-3 px-5 rounded-xl">
            {Check(title) ? (
              <>
                <p className=" font-bold font-UrbanistBold mb-2">{title}</p>
              </>
            ) : (
              ""
            )}
            {Check(desc) ? (
              <>
              <p className=" text-lg font-semibold font-UrbanistSemibold">
                  Detalle
                </p>
                <p className=" text-slate-700 clear-left text-lg font-Urbanist">{desc}</p>
              </>
            ) : (
              ""
            )}
            {Check(benef) ? (
              <>
                <p className=" text-lg font-semibold font-UrbanistSemibold">
                  Beneficios
                </p>
                <p className=" text-slate-700 clear-left text-lg font-Urbanist">{benef}</p>
              </>
            ) : (
              ""
            )}
            {Check(principiosactivos) ? (
              <>
                <p className=" text-lg font-UrbanistSemibold">Principios Activos</p>
                <p className=" text-slate-700 clear-left text-lg font-Urbanist">{principiosactivos}</p>{" "}
              </>
            ) : (
              ""
            )}
            {Check(mododeuso) ? (
              <>
                <p className=" text-lg font-UrbanistSemibold">Modo de uso</p>
                <p className=" text-slate-700 clear-left text-lg font-Urbanist">{mododeuso}</p>
              </>
            ) : (
              ""
            )}            
            <NavLink
              className=" inline-flex items-center px-12 py-1.5 mt-auto ml-auto text-center text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink"
              to={`#`}
            >
              Ver Catálogo
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
