import Headers from './Elements/Headers'
const Tips = () => {

  const msj = [
    'ESTOY ABIERTA Y RECEPTIVA A RECIBIR TODA MAGIA QUE HAY PARA MÍ',
    'ATRAIGO TODA LA RIQUEZA QUE NECESITO Y DESEO CON EL MISMO ESFUERZO.',
    'ESTOY ALINEADA CON EL UNIVERSO Y TENGO EL PODER DE VIVIR LA VIDA DE MIS SUEÑOS.',
    'SOY ABUNDANTE DE MENTE, CUERPO, ALMA Y BOLSILLO.',
    'TODO LO QUE INVIERTO EN MI, REGRESA 70 VECES 7.',
    'TODO LO QUE YO QUIERO SE MANIFIESTA.',
    'TODO LO QUE DESEO LLEGA A MI CON FLUIDEZ Y FACILIDAD.',
    'CREER EN TU TALENTO, EN TU POTENCIAL Y RESPETAR TU ESFUERZO ES DE LAS MEJORES FORMAS DE AMARTE.',
    'TODO EL UNIVERSO CONSPIRA A MI FAVOR AQUÍ Y AHORA.']

  const PTips = ({ type }) =>
    <p className='px-6 text-xs lg:text-base md:text-lg text-left text-stone-800 font-Cremona'>
      {`${msj[type]}`}
    </p>

  return (
    <section className='w-full grid'>
      <Headers title={'Tips'} />
      <div className='flex flex-col mt-5 p-5 gap-8 lg:gap-16 bg-palette-OrchidPink '>
        <article className='flex flex-col lg:flex-row items-center gap-3 text-left'>
          <img
            className='w-1/2 sm:w-[45%] md:w-[45%] lg:w-auto pt-0 mr-auto lg:mx-5 md:pt-2 lg:pt-10 border-[8px] md:border-[14px] lg:border-[18px] rounded-2xl aspect-auto bg-gradient-to-t from-palette-ChampagnePink/60  border-white hover:brightness-105 transition-all'
            src='/assets/imgpage/belleza-cuidado-piel-mujer-joven-perfecta-maquillaje-nude-natural-hombros-desnudos-mostrando-piel-facial-nutrida-brillante-sonriendo-complacida-mirandose-espejo-despues-ducha-fondo-estudio-blanco 1.png'
            alt='belleza-cuidado-piel-mujer-joven-perfecta-mostrando-piel-facial-nutrida-brillante-sonriendo'
          />

          <div className='relative px-5'>
            <h3 className='absolute -top-24 right-5 md:-top-44 lg:top-10 lg:-left-10 text-3xl md:text-5xl font-UrbanistSemibold'>
              Piel Normal
            </h3>
            <p className='lg:mt-24 text-base md:text-xl lg:text-xl font-Urbanist'>
              ★ La piel normal debe limpiarse cuidadosamente tanto en las mañana
              como antes de ir a dormir. Si bien utilizar productos suaves no es
              completamente necesario, puedes usar limpiadores y desmaquillantes
              en formato crema. <br />
              ★ Si tienes un tipo de piel normal, es importante que uses un
              exfoliante suave dos veces a la semana para eliminar impurezas y
              residuos de la piel, de esta manera mantendrás tu piel suave y
              saludable. <br />★ Utiliza jabones de fórmula suave para proteger
              la capa superficial de la piel y no olvides usar serums y cremas
              con ingredientes humectantes y antioxidantes, además de tu SPF
              favorito.
            </p>
          </div>
        </article>

        <article className='flex flex-col-reverse lg:flex-row items-center gap-3 text-left'>
          <div className='relative px-5'>
            <h3 className='absolute -top-24 md:-top-44 lg:top-0 lg:-right-10 text-3xl md:text-5xl font-UrbanistSemibold z-20'>
              Piel Mixta
            </h3>
            <p className='lg:mt-14 text-base md:text-xl font-Urbanist'>
              ★ Utiliza cremas hidratantes específicas para el tipo de piel
              mixta, preferiblemente con vitamina C para prevenir la flacidez.
              Evita las cremas con base de aceite. <br />
              ★ Evita tocar mucho tu rostro para prevenir la transferencia de
              grasa, bacterias y gérmenes que podrían contribuir en la aparición
              de acné y puntos negros. <br />
              ★ Utiliza bases mate o libre de aceites para evitar que tu rostro
              se vea muy brillante. El polvo translúcido es una excelente opción
              para aplicar en la zona T. <br />
            </p>
          </div>
          <img
            className='w-1/2 sm:w-[45%] md:w-1/2 lg:w-auto pt-0 ml-auto lg:mx-5 md:pt-2 lg:pt-10 border-[8px] md:border-[14px] lg:border-[18px] rounded-2xl aspect-auto bg-gradient-to-t from-palette-ChampagnePink/60  border-white hover:brightness-105 transition-all'
            src='/assets/imgpage/belleza-cuidado-piel-mujer-joven-perfecta-maquillaje-nude-natural-hombros-desnudos-mostrando-piel-facial-nutrida-brillante-sonriendo-complacida-mirandose-espejo-despues-ducha-fondo-estudio-blanco 1 (4).png'
            alt='belleza-cuidado-piel-mujer-joven-perfecta-mostrando-piel-facial-nutrida-brillante-sonriendo'
          />
        </article>

        <article className='flex flex-col lg:flex-row items-center gap-3 text-left'>
          <img
            className='w-1/2 sm:w-[45%] md:w-1/2 lg:w-auto pt-0 mr-auto lg:mx-5 md:pt-2 lg:pt-10 border-[8px] md:border-[14px] lg:border-[18px] rounded-2xl aspect-auto bg-gradient-to-t from-palette-ChampagnePink/60  border-white hover:brightness-105 transition-all'
            src='/assets/imgpage/belleza-cuidado-piel-mujer-joven-perfecta-maquillaje-nude-natural-hombros-desnudos-mostrando-piel-facial-nutrida-brillante-sonriendo-complacida-mirandose-espejo-despues-ducha-fondo-estudio-blanco 1 (1).png'
            alt='belleza-cuidado-piel-mujer-joven-perfecta-mostrando-piel-facial-nutrida-brillante-sonriendo'
          />

          <div className='relative px-5'>
            <h3 className='absolute -top-24 right-5 md:-top-44 lg:top-0 lg:-left-10 text-3xl md:text-5xl font-UrbanistSemibold'>
              Piel Seca
            </h3>
            <p className='lg:mt-14 text-base md:text-xl lg:text-xl font-Urbanist'>
              ★ La humectación diaria debe ser tu máxima prioridad si tienes la
              piel seca. No pueden faltar en tus productos: ácido hialurónico,
              ceramidas, aloe vera y avena coloidal. <br />
              ★ La exfoliación será una de tus principales aliadas. Al remover
              el tejido muerto promover la formación de células nuevas, destapar
              los poros y evitar manchas y resequedad. <br />★ Utiliza un
              protector solar humectante, bebe abundante agua, reduce tu
              exposición solar y limpia tu rostro con agua templada.
            </p>
          </div>
        </article>

        <article className='flex flex-col-reverse lg:flex-row items-center gap-3 text-left'>
          <div className='relative px-5'>
            <h3 className='absolute -top-24 md:-top-44 lg:top-0 lg:-right-10 text-3xl md:text-5xl font-UrbanistSemibold z-20'>
              Piel Madura
            </h3>
            <p className='lg:mt-14 text-base md:text-xl lg:text-xl font-Urbanist'>
              ★ Además de la aplicación, la forma en la que aplicamos nuestros
              productos es muy importante. Masajea tu piel gentilmente al usar
              tus productos para mejorar la absorción de nutrientes. <br />
              ★ La piel madura requiere de una mayor capacidad regeneradora. Por
              lo tanto, ingredientes como ácido hialurónico, vitamina C y
              retinol serán tus grandes aliados. <br />
              ★ No te olvides de tus manos y tu cuello. Al estar tan expuestos
              como el rostro, es importante consentirlos con cremas humectantes
              diariamente para mantener su brillo, suavidad y firmeza. <br />
            </p>
          </div>
          <img
            className='w-1/2 sm:w-[45%] md:w-1/2 lg:w-auto pt-0 ml-auto lg:mx-5 md:pt-2 lg:pt-10 border-[8px] md:border-[14px] lg:border-[18px] rounded-2xl aspect-auto bg-gradient-to-t from-palette-ChampagnePink/60  border-white hover:brightness-105 transition-all'
            src='/assets/imgpage/belleza-cuidado-piel-mujer-joven-perfecta-maquillaje-nude-natural-hombros-desnudos-mostrando-piel-facial-nutrida-brillante-sonriendo-complacida-mirandose-espejo-despues-ducha-fondo-estudio-blanco 1 (2).png'
            alt='belleza-cuidado-piel-mujer-joven-perfecta-mostrando-piel-facial-nutrida-brillante-sonriendo'
          />
        </article>

        <article className='flex flex-col lg:flex-row items-center gap-3 text-left'>
          <img
            className='w-1/2 sm:w-[45%] md:w-1/2 lg:w-auto pt-0 mr-auto lg:mx-5 md:pt-2 lg:pt-10 border-[8px] md:border-[14px] lg:border-[18px] rounded-2xl aspect-auto bg-gradient-to-t from-palette-ChampagnePink/60  border-white hover:brightness-105 transition-all'
            src='/assets/imgpage/belleza-cuidado-piel-mujer-joven-perfecta-maquillaje-nude-natural-hombros-desnudos-mostrando-piel-facial-nutrida-brillante-sonriendo-complacida-mirandose-espejo-despues-ducha-fondo-estudio-blanco 1 (3).png'
            alt='belleza-cuidado-piel-mujer-joven-perfecta-mostrando-piel-facial-nutrida-brillante-sonriendo'
          />

          <div className='relative px-5'>
            <h3 className='absolute -top-24 right-5 md:-top-44 lg:top-0 lg:-left-10 text-3xl md:text-5xl font-UrbanistSemibold'>
              Piel Grasa
            </h3>
            <p className='lg:mt-14 text-base md:text-xl lg:text-xl font-Urbanist'>
              ★ La limpieza diurna y nocturna son fundamentales para reducir el
              nivel de sebo en la piel. No las dejes pasar. <br />
              ★ Los serums y cremas hidratantes no pueden faltar en tu rutina
              diurna. Sin embargo, si vas a aplicar una crema hidratante,
              procura que sea solo para la noche. <br />
              ★ Exfoliar tu piel al menos un par de veces a la semana. De esta
              manera eliminarás las células muertas y mantendrás tus poros
              cerrados. <br />
            </p>
          </div>
        </article>
      </div>
      <div className='p-4 sm:p-10 bg-palette-OrchidPink'>
        <div className='p-1 bg-gradient-to-b from-palette-OldRose to-palette-ChampagnePink'>
          <div className=' flex flex-col gap-2 p-5 py-10 bg-palette-OrchidPink  z-20'>
            <p className='text-3xl md:text-5xl font-UrbanistSemibold'>
              Para tener en cuenta
            </p>
            <p className='lg:mt-8 text-base md:text-xl lg:text-xl font-Urbanist'>
              ★ Para obtener resultados con una nueva rutina, tienes que esperar
              1-3 meses. <br />
              ★ Desmaquillante antes de irte a dormir. <br />
              ★ Conserva tus mascarillas en el refrigerador. Hidrata y refresca
              al mismo tiempo. <br />★ Importante cuidar la piel de nuestras
              manos. Aplicando hidratante, exfoliando semanalmente y protector
              solar.
            </p>
          </div>
        </div>
      </div>
      <span className='w-full grow sticky font-Cremona text-3xl lg:text-6xl text-center py-10 bg-palette-OrchidPink text-slate-700'>
        AFIRMACIONES
      </span>
      <div className=' bg-fixed bg-origin-padding bg-center bg-no-repeat bg-cover bg-sky-img'>
        <div className='grid grid-col-1 lg:grid-cols-3 auto-rows-auto lg:auto-rows-8 gap-3 md:px-8 lg:px-14 xl:px-20 my-5'>
          <div className='flex items-center lg:row-start-1 lg:row-end-4 py-6 lg:py-18 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={0} />
          </div>
          <div className='flex items-center lg:row-start-1 lg:row-end-3 py-6 lg:py-14 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={1} />
          </div>
          <div className='flex items-center lg:row-start-1 lg:row-end-4 py-6 lg:py-18 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={2} />
          </div>
          <div className='flex items-center lg:row-start-4 lg:row-end-6 py-6 lg:py-30 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={3} />
          </div>
          <div className='flex items-center lg:row-start-3 lg:row-end-5 py-6 lg:py-14 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={4} />
          </div>
          <div className='flex items-center lg:row-start-4 lg:row-end-6 py-6 lg:py-30 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={5} />
          </div>
          <div className='flex items-center lg:row-start-6 lg:row-end-auto py-6 lg:py-14 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={6} />
          </div>
          <div className='flex items-center lg:row-start-5 lg:row-end-7 py-6 lg:py-24 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={7} />
          </div>
          <div className='flex items-center lg:row-start-6 lg:row-end-auto py-6 lg:py-14 mx-3 md:mx-0 bg-gradient-to-b from-palette-ChampagnePink/50 to-palette-OrchidPink/50 border-2 border-palette-OldRose rounded-sm'>
            <PTips type={8} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tips
