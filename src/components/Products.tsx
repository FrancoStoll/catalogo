import Card from "./Card/Card"

const Products = () => {
    return (
        <section>


            <h2 className="text-5xl text-center p-6 font-bold text-blue-900">Nuestros Productos</h2>
            <div className="bg-blue-900 text-white p-4 text-center">
                <p className="text-lg font-semibold">¡Oferta Especial!</p>
                <p>Descuento del 20% en todos nuestros productos. ¡No te lo pierdas!</p>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 p-4 justify-start md:justify-center items-center text-lg">
                        <p className="font-bold">Filtro:</p>

                        <div className="flex gap-3 items-center">
                            <label htmlFor="categoria" className="text-gray-700">Categoría:</label>
                            <select className="p-3 border rounded-lg" name="categoria" id="categoria">
                                <option value="" disabled selected>Seleccione una categoría</option>
                                {/* Agrega opciones de categoría aquí */}
                            </select>
                        </div>

                        <div className="flex gap-3 items-center">
                            <label htmlFor="precio" className="text-gray-700">Precio máximo:</label>
                            <input className="p-3 border rounded-lg" type="text" id="precio" name="precio" placeholder="Ingrese precio máximo" />
                        </div>

                        <button className="bg-blue-900 py-2 px-3 rounded-lg shadow text-white">Filtrar</button>


                    </div>
                </div>
            </div>




            <div className="container place-items-center mx-auto py-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </section>

    )
}

export default Products