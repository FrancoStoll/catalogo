import Modal from 'react-modal'
import Products from "../components/Products"
import MyModal from '../components/MyModal';
import { useState } from 'react';
import { Product } from '../App';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const ProductosPage = () => {


  const [productModal, setProductModal] = useState<Product | undefined>()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  function closeModal() {
    setIsModalOpen(false)
    setProductModal(undefined)
  }

  function openModal() {
    setIsModalOpen(true)
  }
  const handleModalProduct = (producto: Product) => {
    openModal()
    setProductModal(producto)
  }

  return (
    <>
      <Products handleModalProduct={handleModalProduct} />

      <Modal isOpen={isModalOpen} style={customStyles} onRequestClose={closeModal}>
        <MyModal closeModal={closeModal}  productModal={productModal}/>
      </Modal>
    </>
  )
}

export default ProductosPage