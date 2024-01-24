import { ProductosCart } from "../context/CartProvider"


const CartCard = ({ item }: { item: ProductosCart }) => {

    return (

        <div className="flex gap-8 border-b last:border-none py-5 relative">

            <div className="p-2">
                <p className="font-bold">Producto</p>

                <div className="flex gap-3 justify-center items-center h-full">
                    <img src={`./${item?.imagen}`} alt={item?.nombre} width={150} height={150} className="rounded-md" />
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-2xl text-blue-900 uppercase overflow-hidden whitespace-nowrap overflow-ellipsis" style={{ maxWidth: "15ch" }}>{item?.nombre}</p>
                        <p className="text-sm text-slate-600 overflow-hidden whitespace-nowrap overflow-ellipsis" style={{ maxWidth: "20ch" }}>{item.descripcion}</p>
                        <p className="">Talle:{item?.size}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className=" font-bold">Cantidad</p>

                <div className='flex justify-center items-center h-full gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <input type="text" className='w-9 h-9 text-2xl text-center border' value={item?.amount} onChange={() => { }} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="font-bold">Precio</p>

                <div className="flex justify-center items-center h-full">
                    <p className="text-xl font-bold text-blue-900">${item?.precio_total}</p>
                </div>
            </div>


            <div className="flex justify-end items-center mt-4">
                <button className="bg-red-600 py-2 px-3 rounded-lg shadow text-white absolute -top-50 right-10">Eliminar</button>
            </div>

        </div>



    )
}

export default CartCard