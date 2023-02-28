import { Link } from "react-router-dom";
const Navbar = () => {
  const links = ["Quién soy","Servicios","Productos","Capacitaciones","Preguntas Frecuentes","Tips",];
  const codeLinks = ["quien-soy","servicios","productos","capacitaciones","faq","tips"];

  return (
    <nav className="mx-4 my-5 sm:m-0 rounded border-gray-200 dark:bg-gray-900">
      <div className="container flex flex-wrap md:flex-nowrap items-center mx-auto">
        <Link to={"/"} className="w-fit hover:brightness-110 transition-all">
          <img
            src="/src/assets/static/bossyLogo.png"
            className="w-6 md:w-[10rem]"
            alt="bossyLogo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block" id="navbar-default">
          <ul className="flex flex-col p-4 gap-6 border border-gray-700 rounded-lg md:flex md:flex-row md:justify-evenly md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((el,i) => (
              <li key={i}>
                <Link
                  to={codeLinks[i]}
                  className="block py-2 pl-3 pr-4 text-xl text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:underline-offset-8 md:decoration-4 md:decoration-palette-Auburn md:p-0 font-UrbanistMedium dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
                >
                  {`${el}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
