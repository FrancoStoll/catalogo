import { Product } from '../../App';


const Card = ({ prod, handleModalProduct }: { prod: Product, handleModalProduct: (prod: Product) => void, }) => {


  return (
    <div className="w-[300px] shadow-xl pb-5 animate__animated animate__fadeIn">
      <img className="h-[300px] w-[300px] object-cover" src={`./${prod.imagen}`} alt={prod.descripcion} />

      <div className="flex flex-col items-start p-5 gap-2">
        <p className="text-md font-bold">{prod.nombre}</p>
        <p className="text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis w-full text-sm">{prod.descripcion}</p>

        <div className="w-full flex justify-between items-center mt-5">
          <p className="font-medium text-xl">${prod.precio_total}</p>
          {prod.en_oferta ? <p className="bg-green-300  px-4 py-1 rounded font-bold text-green-700">Oferta</p> : ''}

        </div>

      </div>

      <div className="flex justify-center">
        <button className="w-9/10 px-4 py-3 bg-blue-900 text-white rounded-lg  uppercase font-bold" onClick={() => handleModalProduct(prod)}>

          Mas Información
        </button>
      </div>

    </div>
  )
}

export default Card