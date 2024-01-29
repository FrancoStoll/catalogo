import { ProductosCart } from "../context/CartProvider"
import useCart from '../hooks/useCart';


const CartCard = ({ item }: { item: ProductosCart }) => {


    const { handleProductDelete, handleAddAmountCart, handleRemoveAmountCart } = useCart()


    return (

        <div className="flex flex-col md:flex-row md:gap-10 gap-2 border-b last:border-none pb-5 xl:h-[180px]">

            <div className="flex-2">
                <p className="font-bold">Producto</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center h-full">
                    <img src={`./${item?.imagen}`} alt={item?.nombre} className="rounded w-32 h-32 object-cover py-2" />
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-xl text-blue-900 overflow-hidden whitespace-nowrap overflow-ellipsis" style={{ maxWidth: "15ch" }}>{item?.nombre}</p>
                        <p className="text-sm text-slate-600 overflow-hidden whitespace-nowrap overflow-ellipsis" style={{ maxWidth: "20ch" }}>{item.descripcion}</p>
                        <p className="">Talle:{" "} <span className="uppercase">{item?.size}</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
                <p className=" font-bold">Cantidad</p>

                <div className='flex justify-center items-center h-full gap-1'>
                    <button onClick={() => handleRemoveAmountCart(item.id, item.amount || 0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <input type="text" className='w-9 h-9 text-2xl text-center border' value={item?.amount} onChange={() => { }} />
                    <button onClick={() => handleAddAmountCart(item.id)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center flex-1">
                <p className="font-bold text-center">Precio</p>

                <div className="flex items-center h-full">
                    <p className="text-xl font-medium text-blue-900">${item?.precio_total}</p>
                </div>
            </div>


            <div className="flex justify-center items-center mt-4">
                <button className="bg-red-600 py-2 px-3 rounded-lg shadow text-white" onClick={() => handleProductDelete(+item.id)}>Eliminar</button>
            </div>

        </div>



    )
}

export default CartCard