
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppButton from './components/WhatsApp/WhatsApp'
import useCart from './hooks/useCart'

export const Layout = () => {


    const {cart} = useCart()


    

    return (
        <>
            <Navbar cart={cart}/>

            <main>
                <Outlet />
                <WhatsAppButton />
            </main>

            <Footer />

        </>

    )
}
