

const Card = () => {
  return (
    <div className="w-[300px] shadow-xl p-4">
    <img className="" src="./remeranegra.jpg" alt="#" />

    <div className="flex flex-col items-start p-5 gap-2">
        <p className="text-xl">Remera Negra MockUp</p>
        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, minus.</p>

        <div className="w-full flex justify-between items-center">
            <p className="font-bold text-xl">$7000</p>
            <p className="bg-green-500 p-2 rounded font-bold text-green-900">Oferta</p>
        </div>

    </div>

    <div className="flex justify-center">
        <button className="px-4 py-3 bg-black text-white rounded-lg w-full uppercase font-bold">

           Mas información
        </button>
    </div>

</div>
  )
}

export default Card