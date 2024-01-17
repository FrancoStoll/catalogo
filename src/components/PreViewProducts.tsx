import { Link } from "react-router-dom"
import { Product } from "../App"
import Card from "./Card/Card"

const PreViewProducts = ({ products }: { products: Product[] }) => {
    return (
        <section>


            <h2 className="text-5xl text-center p-6 font-bold text-blue-900">Nuestros Productos</h2>
            <div className="bg-blue-900 text-white p-4 text-center">
                <p className="text-lg font-semibold">¡Oferta Especial!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugiat aperiam dolorem iure.</p>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 p-4 justify-start md:justify-center items-center text-lg">
                        <p className="font-bold">Filtro:</p>

                        <div className="flex gap-3 items-center">
                            <label htmlFor="categoria" className="text-gray-700">Categoría:</label>
                            <select className="p-3 border rounded-lg" name="categoria" id="categoria">
                                <option value="" disabled selected>Seleccione una categoría</option>
                                {/* Agregar opciones de categoría aquí */}
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

            <Link to='/productos' className="flex justify-end items-end container mx-auto px-10">
                <p className="p-4 bg-blue-800 text-white border mt-10 rounded-lg shadow-lg">Ver mas {">>"}</p>
            </Link>


            <div className="container place-items-center mx-auto py-5 grid gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {products.slice(0, 12).map((prod: Product) => (
                    <Card key={prod.nombre} prod={prod} />
                ))}
            </div>

        </section>

    )
}

export default PreViewProducts