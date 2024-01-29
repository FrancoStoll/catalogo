import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppButton from './components/WhatsApp/WhatsApp'


export const Layout = () => {







    return (
        <>
            <Navbar />

            <main>
                <Outlet />
                <WhatsAppButton />
            </main>

            <Footer />

        </>

    )
}
