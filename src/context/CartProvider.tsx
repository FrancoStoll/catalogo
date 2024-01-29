import { ReactNode, createContext, useEffect, useState } from 'react';



interface CartContextInterface {
    cart: ProductosCart[],
    handleProductModal: (productoModal: ProductosCart) => void
    handleProductDelete: (id: number) => void
    handleAddAmountCart: (id: number) => void
    handleRemoveAmountCart: (id: number, amount: number) => void

}

export interface ProductosCart {
    id: number;
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


const localStorageValue = localStorage.getItem('cart');
const initialState = localStorageValue ? JSON.parse(localStorageValue) : []

const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<ProductosCart[]>(initialState)



    useEffect(() => {

        // add to local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])


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

    const handleProductDelete = (id: number) => {

        const updateCart = cart.filter(item => item.id !== id)

        setCart(updateCart)

    }

    const handleAddAmountCart = (id: number) => {



        const addAmount = cart.map(item => {

            if (item.id === id) {
                return { ...item, amount: (item.amount || 1) + 1 }
            } else {
                return item
            }
        })
        setCart(addAmount)


    }

    const handleRemoveAmountCart = (id: number, amount: number) => {


        if (amount <= 1) return

        const removeAmount = cart.map(item => {

            if (item.id === id) {
                return { ...item, amount: (item.amount || 1) - 1 }
            } else {
                return item
            }
        })
        setCart(removeAmount)


    }


    return (
        <CartContext.Provider value={{
            cart,
            handleProductModal,
            handleProductDelete,
            handleAddAmountCart,
            handleRemoveAmountCart

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

