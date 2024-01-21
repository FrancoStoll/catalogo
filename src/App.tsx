
import { useEffect, useState } from "react"
import HeroSection from "./components/HeroSection"
import ContactoPage from "./pages/ContactoPage"

import ProductosPage from "./pages/ProductosPage";

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

  return (
    <>

      <HeroSection />
      <ProductosPage  />
      <ContactoPage />
    </>
  )
}

export default App
