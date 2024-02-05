import CartCard from "../components/CartCard"
import CartResumen from "../components/CartResumen";
import useCart from "../hooks/useCart"

const CarritoPage = () => {


  const { cart } = useCart();



  return (

    <>
      {cart?.length > 0 ? (
        <div className="mb-10">
          <h1 className="bg-blue-900 text-center text-white py-4 mb-5 text-5xl font-bold">Tú Carrito</h1>


          <div className="px-4 md:px-0">
            <div className="md:flex flex-col lg:flex-row md:gap-10 container mx-auto border p-4 rounded-md min-h-[calc(100vh-45vh)]">
              {/* parte de los productos */}
              <div className="w-9/10 xl:w-2/3">
                {cart?.map((item) => (
                  <CartCard key={item.unique_id} item={item} />
                ))}
              </div>
              {/* parte del resumen */}
              <div className="w-9/10 xl:w-1/3">
                <CartResumen cart={cart} />
              </div>
            </div>
          </div>
        </div>

      ) : (
        <p className="text-center text-2xl flex items-center justify-center h-[calc(100vh-6rem)] uppercase font-medium">No hay productos</p>
      )}
    </>



  )
}

export default CarritoPage