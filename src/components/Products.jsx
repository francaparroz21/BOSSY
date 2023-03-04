import { products } from "../assets/static/courses/data.json";
import CarouselItem from "./CarouselItem";
export const ProductCarousel = () => {
  const item = (
    <div className="flex grow self-center gap-4 bg-white border border-gray-200 rounded-lg shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-[25rem]"
          src="/src/assets/static/imgproducts/alpine roses scrub.png"
          alt=""
        />
      </a>
      <div className="p-10 self-center">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col container align-middle">
      <span className="w-full sticky font-Urbanist text-3xl grow p-2 indent-5 bg-palette-OrchidPink text-slate-700">
        Facial Y Corporal
      </span>
      <div
        id="controls-carousel"
        className="relative m-7"
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div
            className="hidden duration-700 ease-in-out p-2 bg-blue-300"
            data-carousel-item
          >
            {item}{" "}
          </div>
          {/* <!-- Item 2 --> */}
          <div
            className="hidden duration-700 ease-in-out p-2 bg-blue-300"
            data-carousel-item="active"
          >
            {item}{" "}
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-700 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-700 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export const NewCarousel = () => {
  return (
    <div className="container flex flex-col gap-10">
      <span className="w-full sticky font-Urbanist text-3xl grow p-2 indent-5 bg-palette-OrchidPink text-slate-700">
        Facial Y Corporal
      </span>
      <div className="flex flex-col align-middle mb-10">
        <div
          id="animation-carousel"
          className="relative"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-[32rem] bg-gradient-to-b from-palette-ChampagnePink to-palette-OrchidPink">
            {/* <!-- Item 1 --> */}
            <div
              className="hidden duration-150 ease-linear"
              data-carousel-item="active"
            >
              <img
                src="/src/assets/static/imgproducts/cleanse rose alpine.png"
                className="absolute block w-[25%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 hover:brightness-105 transition-all"
                alt="..."
              />
              <div className="absolute block w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 -right-1/4 mr-24">
                <div className="flex flex-col bg-[#F5F5F5]/70 p-3 px-5 rounded-xl">
                  <p className=" font-bold font-UrbanistBold mb-2">
                    ALPINE ROSES CLEANSER EMULSION
                  </p>
                  <p className=" text-lg font-semibold font-UrbanistSemibold">
                    Detalle
                  </p>
                  <p className=" text-slate-700 clear-left text-lg font-Urbanist">
                    Formula innovadora que produce una microemulsión y efectúa
                    una limpieza profunda pero sin irritar la piel. <br />
                    - Limpia y desmaquilla <br />
                    - No altera el equilibrio natural de la piel <br />- Ideal
                    para pieles sensibles o delicadas
                  </p>
                  <p className=" text-lg font-UrbanistSemibold">Modo de uso</p>
                  <p className=" text-slate-700 clear-left text-lg font-Urbanist">
                    Aplicar una pequeña cantidad de producto en rostro, cuello y
                    escote. Masajear unos segundos y luego enjuagar con algodón
                    o esponjas embebidas en agua. El enjuague debe ser completo
                    sin dejar residuos de producto. También se puede utilizar
                    para el desmaquillado de párpados y labios.
                  </p>
                </div>
              </div>
            </div>

            {products.map((el) => (
              <CarouselItem
                key={el.id}
                img={el.img}
                desc={el.desc}
                title={el.title}
                benef={el.benef}
                principiosactivos={el.principioactivo}
                mododeuso={el.mododeuso}
              ></CarouselItem>
            ))}
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
