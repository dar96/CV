import Marketplace from "../assets/Marketplace.png"
import Loteria from "../assets/Loteria.png"


const Projects = () => {

  const obj = [
    {"index": 1,
    "value" : Marketplace,
    "link" : "https://marketplacedapp.netlify.app/",
    "description" : "Marketplace para la compra y venta de NFT, utilizando truffle, desplegado en Goerli Testnet"
    },
    {"index": 2,
    "value" : Loteria,
    "link" : "https://loteriadapp.netlify.app/",
    "description" : "Dapp de lotería, utilizando hardhat, desplegado en Binance Smart Chain Testnet"
    },
    
  ]

  return (
    <div className="flex-col justify-center items-center mx-3">
      <h1 className="text-center text-2xl mb-8 mt-32">Algunos proyectos que he realizado</h1>
      <div className="grid sm:grid-cols-3 grid-cols-2 justify-between">
        {obj.map(elem => (
          <div className="p-4 group relative" key={elem.index}>
          <a href={elem.link} target="_blank">
            <div className="relative">
              <img
                src={elem.value}
                alt="Project"
                className="w-full h-auto group-hover:opacity-5 transition-opacity duration-1000"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              >
                <h1 className="text-bold text-center">{elem.description}</h1>
              </div>
            </div>
          </a>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
