
import { useState } from 'react';
import { Product } from '../App';
import useCart from '../hooks/useCart';


const SIZES_CONST = ['s', 'm', 'l', 'xl', '2xl']

function MyModal({ closeModal, productModal }: { closeModal: () => void, productModal?: Product }) {



	const [amount, setAmount] = useState<number>(1)
	const [sizes, setSizes] = useState<string>('')
	const { handleProductModal } = useCart();

	const [alert, setAlert] = useState(false);



	return (


		<div className='flex p-2 gap-5 md:w-[700px] w-[300px] flex-col md:flex-row items-center relative'>
			{productModal !== undefined ? (
				<>
					<div onClick={closeModal} className='absolute cursor-pointer -right-3 -top-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
						<path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
					</svg>
					</div>
					{/* imagen */}
					<div className='w-1/3 flex justify-center items-center' >
						<img className='shadow-2xl' src={`./${productModal.imagen}`} alt="imagen prueba" />
					</div>

					{/* informacion del producto */}
					<div className='w-2/3'>
						<h1 className='text-center text-4xl font-bold text-blue-900'>{productModal.nombre}</h1>
						<p className='text-sm text-gray-500 py-4'>{productModal.descripcion}</p>


						{alert && <p className='bg-red-300 text-red-950 py-2 px-3'>Agrege un talle primero</p>}
						<p>Talles:</p>
						<div className='flex gap-3 mt-1'>

							{SIZES_CONST.map(size => (
								<p onClick={() => setSizes(size)} key={size} className={`${size.toLocaleLowerCase() == sizes.toLocaleLowerCase() ? 'border-blue-900 border-2' : ''} border px-2 py-1 text-sm uppercase cursor-pointer`}>{size}</p>
							))}
						</div>

						<div className='mt-2'>
							<p>Modificar cantidad:</p>
							<div className='flex items-center gap-2'>
								<svg onClick={() => setAmount(prev => prev - 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-9 h-9">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
								</svg>
								<input type="text" value={+amount} className='w-9 h-9 text-2xl text-center' onChange={(e) => setAmount(+e.target.value)} />
								<svg onClick={() => setAmount(prev => prev + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-9 h-9">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
								</svg>
							</div>
						</div>


						<div className="w-full flex justify-between items-center mt-4">
							<p className="font-bold text-xl">${(productModal.precio_total * amount).toFixed(2)}</p>
							{productModal.en_oferta && <p className="bg-green-300 py-2 px-4 rounded font-bold text-green-700">Oferta</p>}

						</div>


						<button
							onClick={() => {
								if (sizes !== '') {

									const cartItem = { ...productModal, amount, sizes: sizes }

									handleProductModal(cartItem)

									closeModal()

									return
								}
								setAlert(true)
							}

							}
							className="font-bold uppercase mt-4 w-full px-4 py-3 bg-black text-white rounded shadow hover:bg-blue-900 focus:outline-none focus:shadow-outline transition-all transition-duration:150ms">
							Agregar al carrito
						</button>


					</div>
				</>) : (<p>Cargando</p>)
			}

		</div >
	)
}

export default MyModal