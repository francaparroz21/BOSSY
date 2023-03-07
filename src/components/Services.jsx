import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { services } from "../assets/static/courses/data.json";
import ItemDetail from "./ItemDetail";

const Services = () => {
  const { servicioId } = useParams();
  const [item, setItem] = useState({});
  const FIRSTSERVICECLASS = services.FYC;
  const SECONDSERVICECLASS = services.CPYM;



  return (
    <div className="container flex flex-col">
      {servicioId ? (
        <>
          <ItemDetail servicioId={servicioId}></ItemDetail>
        </>
      ) : (
        <>
          <span className="w-full sticky font-Urbanist text-3xl grow p-2 indent-5 bg-palette-OrchidPink text-slate-700">
            Facial Y Corporal
          </span>
          <div className="container grid grid-cols-special lg:grid-cols-4 lg:grid-auto-row gap-10 p-9">
            {FIRSTSERVICECLASS.map((service) => (
              <div
                className="flex w-min hover:brightness-105 transition-all"
                key={service.id}
              >
                <div className="flex flex-col grow w-[280px] items-center justify-between pt-3 p-3 pb-5  bg-gray-100 border border-gray-200 md:aspect-square rounded-2xl shadow-black/25% shadow-lg  dark:bg-gray-800 dark:border-gray-700">
                  <a href="#" className="">
                    <img
                      className="rounded-t-2xl object-center object-cover md:w-[16rem] md:h-[15rem] md:mx-auto  "
                      src={`/src/assets/static/imgservices/${service.img[0]}`}
                      alt=""
                    />
                  </a>
                  <a href="#" className="block mt-auto">
                    <h5 className="grow px-8 py-6 text-center text-xl font-Urbanist text-slate-700  dark:text-slate-100">
                      {service.title}
                    </h5>
                  </a>
                  <NavLink
                    className=" inline-flex items-center px-12 py-1.5 mt-auto text-center text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink"
                    to={`/servicios/${service.title}`}
                  >
                    <svg
                      className="w-5"
                      viewBox="0 0 24 24"
                      fill="323232"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5 12H19"
                          stroke="#F3F4F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 5L12 19"
                          stroke="#F3F4F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    Info
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          <span className="w-full sticky font-Urbanist text-3xl grow p-2 indent-5 bg-palette-OrchidPink text-slate-700">
            Cejas - Pestañas Y Maquillaje
          </span>
          <div className="container grid grid-cols-special lg:grid-cols-4 lg:grid-auto-row gap-10 p-9">
            {SECONDSERVICECLASS.map((service) => (
              <div
                className="flex w-min hover:brightness-105 transition-all"
                key={service.id}
              >
                <div className="flex flex-col grow w-[280px] items-center justify-between pt-3 p-3 pb-5  bg-gray-100 border border-gray-200 md:aspect-square rounded-2xl shadow-black/25% shadow-lg  dark:bg-gray-800 dark:border-gray-700">
                  <a href="#" className="">
                    <img
                      className="rounded-t-2xl object-center object-cover md:w-[16rem] md:h-[15rem] md:mx-auto  "
                      src={`/src/assets/static/imgservices/${service.img[0]}`}
                      alt=""
                    />
                  </a>
                  <a href="#" className="block mt-auto">
                    <h5 className="grow px-8 py-6 text-center text-xl font-Urbanist text-slate-700  dark:text-slate-100">
                      {service.title}
                    </h5>
                  </a>
                  <NavLink
                    to={`/servicios/${service.title}`}
                    className=" inline-flex items-center px-12 py-1.5 mt-auto text-center text-lg font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink"
                  >
                    <svg
                      className="w-5"
                      viewBox="0 0 24 24"
                      fill="323232"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5 12H19"
                          stroke="#F3F4F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 5L12 19"
                          stroke="#F3F4F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    Info
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
