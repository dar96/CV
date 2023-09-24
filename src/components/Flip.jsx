import javascript from "../assets/logo-javascript.svg";
import solidity from "../assets/solidity.svg";
import python from "../assets/python-4.svg";
import react from "../assets/react-2.svg";
import nodejs from "../assets/nodejs-1.svg";
import mongo from "../assets/mongodb-icon-1.svg";
import vitejs from "../assets/vitejs.svg";
import tailwind from "../assets/tailwind-css-2.svg";
import next from "../assets/next-js.svg";
import sql from "../assets/microsoft-sql-server-1.svg";
import hardhat from "../assets/hardhat.svg";
import ganache from "../assets/ganache.svg";
import truffle from "../assets/truffle.svg";


const Flip = () => {
  const skillsData = [
    {
      name: "JavaScript",
      experience: "3 años de experiencia",
      progress: 72,
      imageSrc: javascript,
    },
    {
      name: "Solidity",
      experience: "2 años de experiencia",
      progress: 60,
      imageSrc: solidity,
    },
    {
      name: "Python",
      experience: "1 año de experiencia",
      progress: 42,
      imageSrc: python,
    },
  ];

  const OtherskillsData = [
    {
      name: "Truffle",
      experience: "1 año de experiencia",
      progress: 45,
      imageSrc: truffle,
    },
    {
      name: "Hardhat",
      experience: "1 año de experiencia",
      progress: 45,
      imageSrc: hardhat,
    },
    {
      name: "Ganache",
      experience: "2 años de experiencia",
      progress: 62,
      imageSrc: ganache,
    },
    {
      name: "SQL",
      experience: "1 año de experiencia",
      progress: 59,
      imageSrc: sql,
    },
    {
      name: "MongoDB",
      experience: "2 años de experiencia",
      progress: 60,
      imageSrc: mongo,
    },
    {
      name: "NodeJS",
      experience: "2 años de experiencia",
      progress: 60,
      imageSrc: nodejs,
    },
    {
      name: "React",
      experience: "2 años de experiencia",
      progress: 60,
      imageSrc: react,
    },
    {
      name: "Tailwindcss",
      experience: "1 año de experiencia",
      progress: 42,
      imageSrc: tailwind,
    },
    {
      name: "ViteJS",
      experience: "1 año de experiencia",
      progress: 42,
      imageSrc: vitejs,
    },
    {
      name: "NextJS",
      experience: "1 año de experiencia",
      progress: 42,
      imageSrc: next,
    },
  ];

  return (
    <div className="flex-col items-center mt-2">
      <h1 className="text-center text-2xl mb-8">
        Mi experiencia con lenguajes de programación
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 justify-between align-middle mb-8">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className=" md:w-96 md:h-80 w-72 h-56 bg-transparent cursor-pointer mx-auto group perspective p-4"
          >
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={skill.imageSrc}
                  className="w-full h-full"
                  alt={skill.name}
                />
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-white">
                <div className="text-center flex flex-col items-center justify-center h-full w-2/3 mx-auto">
                  <h2 className="text-2xl ">
                    {skill.name}: {skill.experience}
                  </h2>
                  <progress
                    max="100"
                    value={skill.progress}
                    className="bg-white border-none rounded-xl overflow-hidden h-1 w-full "
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-center text-2xl mb-12 mt-44 mx-1">
        Otras herramientas de programación
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between align-middle mb-8 mx-auto">
        {OtherskillsData.map((skill) => (
          <div
            key={skill.name}
            className=" sm:w-64 sm:h-40 xs:w-40 xs:h-32 w-32 h-32 mx-auto p-4 bg-transparent cursor-pointer group perspective"
          >
            <div className="relative preserve-3d group-hover:my-rotate-x-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={skill.imageSrc}
                  className="w-full h-full"
                  alt={skill.name}
                />
              </div>
              <div className="absolute my-rotate-x-180 backface-hidden w-full h-full bg-white">
                <div className="text-center flex flex-col items-center justify-center h-full w-2/3 mx-auto">
                  <h2 className="sm:text-xl text-xs">
                    {skill.name}: {skill.experience}
                  </h2>
                  <progress
                    max="100"
                    value={skill.progress}
                    className="bg-white border-none rounded-xl overflow-hidden h-1 w-full "
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flip;
