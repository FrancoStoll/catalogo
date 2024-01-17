import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout.tsx'
import ProductosPage from './pages/ProductosPage.tsx'
import ContactoPage from './pages/ContactoPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import CarritoPage from './pages/CarritoPage.tsx'
import { CartProvider } from './context/CartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<App />} />
            <Route path='/productos' element={<ProductosPage />} />
            <Route path='/contacto' element={<ContactoPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/carrito' element={<CarritoPage />} />



          </Route>

        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
