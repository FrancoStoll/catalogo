import { Product } from '../../App';


const Card = ({ prod }: { prod: Product }) => {


  return (
    <div className="w-[300px] shadow-xl pb-5">
      <img className="h-[300px] w-[300px]" src={`./${prod.imagen}`} alt={prod.descripcion} />
   
      <div className="flex flex-col items-start p-5 gap-2">
        <p className="text-xl">{prod.nombre}</p>
        <p className="text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">{prod.descripcion}</p>

        <div className="w-full flex justify-between items-center">
          <p className="font-bold text-xl">${prod.precio_total}</p>
          {prod.en_oferta ? <p className="bg-green-300 py-2 px-4 rounded font-bold text-green-700">Oferta</p> : ''}

        </div>

      </div>

      <div className="flex justify-center">
        <button className="w-9/10 px-4 py-3 bg-blue-900 text-white rounded-lg  uppercase font-bold">

         Mas Información
        </button>
      </div>

    </div>
  )
}

export default Card