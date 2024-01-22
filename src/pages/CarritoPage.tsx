import useCart from "../hooks/useCart"

const CarritoPage = () => {


  const { cart } = useCart()

  return (
    <div><pre>{JSON.stringify(cart, null, 2)}</pre></div>
  )
}

export default CarritoPage