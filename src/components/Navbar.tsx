import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import useCart from "../hooks/useCart";


interface Page {
    path: string;
    name: string;
}

const Navbar = () => {

    const location = useLocation()
    const [isMenuOpen, SetIsMenuOpen] = useState(false)
    const { cart } = useCart()

    const toggleMenu = () => {

        SetIsMenuOpen(!isMenuOpen)
    }


    const pages: Page[] = [
        { path: '/', name: "Inicio" },
        { path: '/productos', name: "Productos" },
        { path: '/contacto', name: "Contacto" },
        { path: '/about', name: "Sobre Nosotros" },
    ]



    return (
        <header className="shadow-lg">
            <div className="container flex justify-between m-auto rounded">
                <div className="w-20 cursor-pointer">
                    <Link to='/'>
                        <img src="https://us.123rf.com/450wm/logoking33/logoking332011/logoking33201100066/159766658-plantilla-de-vector-de-dise%C3%B1o-de-logotipo-de-carta-ie-ei-dise%C3%B1o-del-logotipo-ie-ei.jpg?ver=6" alt="logo"  className="animate__animated animate__rotateInDownLeft"/>
                    </Link>
                </div>


                <nav className="flex items-center  animate__animated animate__fadeInDown">
                    <ul className="hidden md:flex md:gap-3 text-gray-700">
                        {pages.map((page) => {
                            return (
                                <Link to={page.path} key={page.path}>
                                    <li className={`${location.pathname == page.path ? 'border-b-2 border-blue-900' : ''} cursor-pointer  px-4 py-2 text-gray-700 hover:bg-gray-100`} >
                                        {page.name}
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to='/carrito' className="relative animate__animated animate__pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <div className="absolute -top-2 right-1 bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs font-bold">{cart ? cart.length : 0}</div>
                    </Link>



                    <div className="md:hidden px-3">
                        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>



                        <div className={`fixed top-0 right-0 h-[550px] bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden w-64 p-4 z-50`}>
                            <div className="flex justify-end">
                                <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </div>

                            {pages.map(page => (
                                <Link onClick={toggleMenu} to={page.path} key={page.path} className={`${location.pathname == page.path ? 'border-b-2 border-blue-900' : ''} block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer`}>
                                    {page.name}
                                </Link>
                            ))}


                        </div>
                    </div>

                </div>

            </div>
        </header >
    )
}

export default Navbar