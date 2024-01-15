const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="bg-black text-gray-400 container mx-auto py-5 text-lg">

                <div className="flex flex-col md:flex-row items-center md:justify-between">

                    <ul className="flex flex-col gap-2 p-4">
                        <li>
                            <div className="w-20 cursor-pointer">
                                <img className="rounded-xl" src="https://us.123rf.com/450wm/logoking33/logoking332011/logoking33201100066/159766658-plantilla-de-vector-de-dise%C3%B1o-de-logotipo-de-carta-ie-ei-dise%C3%B1o-del-logotipo-ie-ei.jpg?ver=6" alt="logo" />
                            </div>
                        </li>
                        <li className="w-56">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eligendi.
                        </li>
                    </ul>

                    <ul className="p-4 w-56">
                        <li className="uppercase text-white">Explorar</li>
                        <li className="cursor-pointer">Inicio</li>
                        <li className="cursor-pointer">Productos</li>
                        <li className="cursor-pointer">Contacto</li>
                        <li className="cursor-pointer">Sobre Nosotros</li>
                    </ul>

                    <ul className="p-4 w-56">
                        <li className="uppercase text-white">
                            Nuestras Redes:
                        </li>
                        <li className="">
                            <div className="flex gap-2 items-center">
                                <img className="w-8 h-8" src="./instagram.svg" alt="instagram" />
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                            </div>

                        </li>
                        <li className="">
                            <div className="flex gap-2 items-center">
                                <img className="w-8 h-8" src="./whatsapp.svg" alt="whatsapp" />
                                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">Whatsapp</a>
                            </div>

                        </li>
                        <li className="">
                            <div className="flex gap-2 items-center">
                                <img className="w-8 h-8" src="./facebook.svg" alt="facebook" />
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                            </div>

                        </li>
                        <li className="">
                            <div className="flex gap-2 items-center">
                                <img className="w-8 h-8" src="./tiktok.svg" alt="tiktok" />
                                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
                            </div>

                        </li>
                    </ul>


                </div>

                <p className="text-center">Todos los derechos reservados &#169;</p>


            </div>

        </footer>
    )
}

export default Footer