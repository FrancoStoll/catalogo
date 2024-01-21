import { Link } from "react-router-dom"


const HeroSection = () => {
    return (
        <section className="container mx-auto">
            <div className="md:flex md:h-[calc(100vh-4rem)]">
                <div className="md:w-1/2 flex flex-col justify-center p-5 items-start gap-3">
                    <h1 className="text-6xl">Mira nuestro <span className="font-bold text-blue-900">catalogo</span><br />
                        contactanos para mas <span className="font-bold text-blue-900">información.</span>
                    </h1>
                    <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit ab inventore cum maxime consequatur, optio sint cumque dignissimos, ratione unde eos.</p>

                    <div className="flex gap-3 justify-center w-full md:justify-start">
                        <Link to="/productos" className="font-bold uppercase px-4 py-3 bg-black text-white rounded shadow hover:bg-blue-900 focus:outline-none focus:shadow-outline transition-all transition-duration:150ms">
                            Ver Productos
                        </Link>
                        <Link to="/contacto" className="font-bold uppercase px-4 py-3 shadow-xl text-black rounded  hover:bg-blue-900 focus:outline-none focus:shadow-outline transition-all transition-duration:150ms hover:text-white">
                            Contactanos
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center md:justify-end">
                    <img src="./heroimage.webp" alt="heroimg" className="w-full h-full object-cover filter brightness-75  py-10" />

                </div>
            </div>
        </section>
    )
}

export default HeroSection