import { courses } from "../assets/static/courses/data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { capacitacionesId } = useParams();
  const [item, setItem] = useState({});
  
  useEffect(() => {
    const elemento = courses.find((el) => el.title == capacitacionesId)
    setItem(elemento)
  }, [capacitacionesId]);

  const Check = (item) => {
    return item && item.length != 0;
  };
  console.log(item)

  return (
    <div className="container grid gap-10 mb-10">
      <span className="w-full sticky font-Urbanist text-3xl grow p-2 indent-5 bg-palette-OrchidPink text-slate-700">
        {capacitacionesId}
      </span>
      {Check(item.img) ? (
        <div className="flex gap-12 justify-center">
          {item.img.map((el) => (
            <img
              className="rounded-2xl object-center object-cover md:w-[22rem] md:h-[23rem] hover:brightness-105 transition-all "
              src={`/src/assets/static/imgservices/${el}`}
              alt=""
              key={el}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      {Check(item.desc)?<><p className=" mx-16 font-Urbanist text-xl">{item.desc}</p></>:""}
      {Check(item.topics)? 
      <div>
          <p className="mx-16 font-Urbanist text-xl">Temáticas:</p>
            {item.topics.map(topic=><><p key={topic[0]}className=" mx-16 font-Urbanist text-xl">{topic}</p></>)}
      </div>:""
      }
      {Check(item.certificate)?<><p className=" mx-16 font-Urbanist text-xl">{item.certificate}</p></>:""}
      {Check(item.details)?<><p className=" mx-16 font-Urbanist text-xl">{item.details}</p></>:""}
      
      

      {/* texto */}
      <a
        to={"#"}
        className=" inline-flex items-center px-12 py-1.5 ml-auto mr-24 text-center text-xl font-UrbanistMedium text-gray-100 bg-palette-SoftAuburn rounded-lg hover:bg-palette-Auburn focus:ring-3 focus:outline-none focus:ring-palette-ChampagnePink cursor-pointer"
      >
        Reservar Turno
      </a>
    </div>
  );
};

export default CourseDetail;
