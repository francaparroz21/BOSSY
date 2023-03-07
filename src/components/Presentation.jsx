const Presentation = () => {
  return (
    <div className="container flex flex-col gap-4 ">
      <div className="flex flex-col elipse bg-gradient-to-b from-palette-ChampagnePink to-palette-OrchidPink overflow-hidden">
        <div className="pb-96 pt-48">
          <h1 className="text-center text-xl md:text-5xl font-Cremona text-slate-800">
            BIENVENIDOS A BOSSY SKINCARE
          </h1>
        </div>
        <div className="block relative w-full">
          <img
            className="absolute h-auto w-2/5 md:w-[42.5%] -left-32 -top-56 z-10"
            src="/src/assets/static/joven-hermosa-modelo-posando 1.png"
            alt="image description"
          />
          <img
            className="absolute h-auto w-2/5 md:w-[50%] left-48 -top-72 z-20"
            src="/src/assets/static/disparo-cabeza-atractiva-chica-raza-mixta 1.png"
            alt="image description"
          />
          <img
            className="absolute h-auto w-2/5 md:w-[50%] -right-2 -top-72 z-10"
            src="/src/assets/static/modelos-caucasicos-asiaticos-primer-plano-posando-juntos 1.png"
            alt="image description"
          />
        </div>
        <span className="self-center sm:flex sm:pt-32">
          <p className="pt-16 px-36 text-2xl text-slate-800 font-UrbanistMedium dark:text-gray-400 ">
            En este lugar vas a encontrar todos los servicios y capacitaciones
            que necesites para que te sigas formando en el mundo de la estética.
            Encontrarán infinitas posibilidades donde podrás potenciar tus
            talentos y capacidades para lograr ser la profesional que tanto
            deseas! <br /> Ofrecemos capacitaciones que cumplen el objetivo de lograr
            que los pacientes puedan sanar, mejorar su apariencia y su
            autoestima. <br /> Les doy la bienvenida a sanar a través de las manos, el
            intercambio de la energía y el amor.
          </p>
        </span>
        <span className="flex justify-center">
          <img
            className="md:w-1/4"
            src="/src/assets/static/Bossy2_Mesa de trabajo 1 1.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Presentation;
