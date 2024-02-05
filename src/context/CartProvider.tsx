import { ReactNode, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



interface CartContextInterface {
    cart: ProductosCart[],
    handleProductModal: (productoModal: ProductosCart) => void
    handleProductDelete: (id: number) => void
    handleAddAmountCart: (id: number, size: string) => void
    handleRemoveAmountCart: (id: number, amount: number, size: string) => void

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
    unique_id: string;
}


const CartContext = createContext({} as CartContextInterface)


const localStorageValue = localStorage.getItem('cart');
const initialState = localStorageValue ? JSON.parse(localStorageValue) : []

const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<ProductosCart[]>(initialState)
    const navigate = useNavigate()


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
            data,

        ]))

        navigate('/carrito')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    const handleProductDelete = (id: number) => {


        const updateCart = cart.filter(item => item.id !== id)

        setCart(updateCart)

    }

    const handleAddAmountCart = (id: number, size: string) => {


        const existProduct = cart.find(c => c.id === id && c.size === size)
        if (existProduct) {
            const addAmount = cart.map(item => {

                if (item.id === id && item.size === size) {
                    return { ...item, amount: (item.amount || 1) + 1 }
                } else {
                    return item
                }
            })
            setCart(addAmount)
        }



    }

    const handleRemoveAmountCart = (id: number, amount: number, size: string) => {

        const existProduct = cart.find(c => c.id === id && c.size === size)

        if (existProduct) {
            if (amount <= 1) return

            const removeAmount = cart.map(item => {

                if (item.id === id && item.size === size) {
                    return { ...item, amount: (item.amount || 1) - 1 }
                } else {
                    return item
                }
            })
            setCart(removeAmount)
        }



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

