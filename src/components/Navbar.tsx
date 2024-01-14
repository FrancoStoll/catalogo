

const Navbar = () => {
    return (
        <header className="shadow-lg h-16 sticky">
            <div className="container flex justify-between m-auto rounded">
                <div className="w-20 cursor-pointer">
                    <img  src="https://us.123rf.com/450wm/logoking33/logoking332011/logoking33201100066/159766658-plantilla-de-vector-de-dise%C3%B1o-de-logotipo-de-carta-ie-ei-dise%C3%B1o-del-logotipo-ie-ei.jpg?ver=6" alt="logo" />
                </div>


                <nav className="flex items-center">
                    <ul className="hidden md:flex md:gap-3  text-gray-700">
                        <li className="cursor-pointer">Inicio</li>
                        <li className="cursor-pointer">Productos</li>
                        <li className="cursor-pointer">Contacto</li>
                        <li className="cursor-pointer">Sobre Nosotros</li>
                    </ul>
                </nav>
                <div className="flex items-center gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <div className="md:hidden px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </div>

                </div>

            </div>
        </header>
    )
}

export default Navbar