import { ReactNode, createContext, useState } from 'react';



interface CartContextInterface {
    cart: ProductosCart[],
    handleProductModal: (productoModal: ProductosCart) => void
}

export interface ProductosCart {
    id?: number;
    categoria?: string;
    nombre?: string;
    descripcion?: string;
    en_oferta?: boolean;
    precio_oferta?: number;
    precio_total?: number;
    imagen?: string;
    amount?: number,
    size?: string;

}


const CartContext = createContext({} as CartContextInterface)


const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<ProductosCart[]>([])



    const handleProductModal = (data: ProductosCart) => {
        const existProduct = cart.find(c => c.id === data.id && c.size === data.size)

        if (existProduct) {
            setCart(prev => (
                prev.map(item => (
                    item.id === data.id ? { ...item, amount: (item.amount || 0) + (data.amount || 1) } : item
                ))
            ))
            return
        }
        setCart(prev => ([
            ...prev,
            data
        ]))
    }


    return (
        <CartContext.Provider value={{
            cart,
            handleProductModal,

        }
        }>
            {children}
        </CartContext.Provider>
    )
}


export {
    CartProvider
}

export default CartContext

