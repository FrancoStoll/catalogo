import { ProductosCart } from "../context/CartProvider"

const CartResumen = ({ cart }: { cart: ProductosCart[] }) => {


    return (
        <div className="sticky top-0">
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-2 border p-4 mt-5 rounded-xl w-full">
                    {cart && cart.map((item) => (
                        <div key={item?.id} className="flex justify-between"><p className="font-bold">{item.nombre}</p>
                            <span className="font-bold">x{item?.amount}</span>
                            <p className="font-bold text-blue-900 ">${item.precio_total && item.amount && (item?.precio_total * item.amount).toFixed(2)}</p>
                        </div>
                    ))}

                    <div className="flex justify-between border-t pt-2"><p className="font-bold">Total a pagar</p>
                        <p className="font-bold text-blue-900">${cart?.reduce((total, item) => total + ((item?.precio_total || 0) * (item?.amount || 0)), 0).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div className="flex mt-5">
                <button className="py-3 px-4 bg-blue-900 uppercase font-bold text-white rounded-md w-full">Realizar Pedido</button>
            </div>
        </div>
    )
}

export default CartResumen