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



            <div>
                <p className="text-center text-6xl mt-10 text-blue-900">Productos</p>
            </div>

            <div className="flex justify-end items-end container mx-auto px-10">
                <Link to='/productos' className="p-4 bg-blue-800 text-white hover:text-teal-500 border  rounded-lg shadow-lg">Ver mas {">>"}</Link>
            </div>


            <div className="container place-items-center mx-auto py-5 grid gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {products.slice(0, 12).map((prod: Product) => (
                    <Card key={prod.nombre} prod={prod} />
                ))}
            </div>

        </section>

    )
}

export default PreViewProducts