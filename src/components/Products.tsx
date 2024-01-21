import { useEffect, useState } from "react"
import { Product } from '../App';
import Card from "./Card/Card"
import Pagination from "./Pagination"

const Products = ({ handleModalProduct, }: { handleModalProduct: (prod: Product) => void }) => {


    // Productos y Filtros de productos
    const [products, setProducts] = useState<Product[]>([])
    const [categoria, setCategoria] = useState<string>('');
    const [precioMax, setPrecioMax] = useState<number>(0);

    // Paginación
    const totalProducts = products.length
    const [productsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)


    // Para el Slice .slice(firstIndex, lastIndex)
    const lastIndex = currentPage * productsPerPage // 1 * 6 || 2 * 6 = 12 
    const firstIndex = lastIndex - productsPerPage // 6 - 6 || 12 - 6 = 6

    useEffect(() => {

        const fetchProducts = async () => {


            const response = await fetch('./data.json')

            const data = await response.json();
            setProducts(data.productos);
        }
        fetchProducts();
        setCurrentPage(1)
    }, [categoria, precioMax])






    const filterProducts = () => {
        // Filtrar por categoría
        let filteredProducts = products;


        if (categoria !== 'all' && categoria !== '') {
            filteredProducts = products.filter(prod => prod.categoria === categoria);
        }

        // Filtrar por precio máximo
        if (precioMax) {
            filteredProducts = filteredProducts.filter(prod => prod.precio_total <= precioMax);
        }

        setProducts(filteredProducts);
    }


    return (
        <section>



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
                            <select onChange={(e) => setCategoria(e.target.value)} className="p-3 border rounded-lg" name="categoria" id="categoria">
                                <option value="" disabled>Seleccione una categoría</option>
                                <option value="all">Todas</option>
                                <option value="remera">Remeras</option>
                                <option value="pantalon">Pantalones</option>
                                <option value="medias">Medias</option>
                            </select>
                        </div>

                        <div className="flex gap-3 items-center">
                            <label htmlFor="precio" className="text-gray-700">Precio máximo:</label>
                            <input value={+precioMax} onChange={e => setPrecioMax(+e.target.value)} className="p-3 border rounded-lg" type="text" id="precio" name="precio" placeholder="Ingrese precio máximo" />
                        </div>

                        <button className="bg-blue-900 py-2 px-3 rounded-lg shadow text-white" onClick={filterProducts}>Filtrar</button>


                    </div>
                </div>
            </div>

            <Pagination productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts} />


            <div className="container place-items-center mx-auto py-5 grid gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {products.map((prod: Product) => (
                    <Card key={prod.id} prod={prod} handleModalProduct={handleModalProduct} />
                )).slice(firstIndex, lastIndex)}
            </div>


            <Pagination productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts} />

        </section>

    )
}

export default Products