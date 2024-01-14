const HeroSection = () => {
    return (
        <section className="container mx-auto">
            <div className="md:flex h-[calc(100vh-4rem)]">
                <div className="md:w-1/2 flex flex-col justify-center p-5 items-start gap-3">
                  <h1 className="text-4xl">Mira nuestros <span className="text-blue-900">productos,</span><br />
                  contactanos para mas <span className="text-blue-900">información.</span>
                  </h1>
                  <p className="text-gray-700 md:w-[25rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit ab inventore cum maxime consequatur, optio sint cumque dignissimos, ratione unde eos.</p>

                  <div className="flex gap-3">
                    <button className="uppercase px-4 py-3 bg-black text-white rounded shadow hover:bg-blue-900 focus:outline-none focus:shadow-outline transition-all transition-duration:150ms">
                        Ver Productos
                    </button>
                    <button className="uppercase px-4 py-3 shadow-xl text-black rounded  hover:bg-blue-900 focus:outline-none focus:shadow-outline transition-all transition-duration:150ms">
                        Contactanos
                    </button>
                  </div>
                </div>

                <div className="md:w-2/2">
                    <img src="./heroimage.jpg" alt="heroimg" className="w-full h-full object-cover filter brightness-75" />

                </div>
            </div>
        </section>
    )
}

export default HeroSection