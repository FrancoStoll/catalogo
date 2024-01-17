
import { useEffect, useState } from "react"
import HeroSection from "./components/HeroSection"
import ContactoPage from "./pages/ContactoPage"
import PreViewProducts from "./components/PreViewProducts";

export interface Product {
  id: number;
  categoria: string;
  nombre: string;
  descripcion: string;
  en_oferta?: boolean;
  precio_oferta?: number;
  precio_total: number;
  imagen: string;

}




function App() {


  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      // fetch in public data json
      const response = await fetch('./data.json')

      const data = await response.json();
      setProducts(data.productos);
    }
    fetchProducts();

  }, [])



  return (
    <>

      <HeroSection />
      <PreViewProducts products={products} />
      <ContactoPage />
    </>
  )
}

export default App
