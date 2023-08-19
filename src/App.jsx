import { useState } from 'react'
import Header from './components/header/Header.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import Nav from './components/Navigation/Nav.jsx';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Modal from './components/Modal/Modal.jsx';
import SideBar from './components/Sidebar/Sidebar.jsx';
import BestSeller from './components/Best/Best.jsx';
import Products from './components/Products/Products.jsx';


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
    <Header setOpenModal={setOpenModal} setSideBar={setSideBar}/>
    <Nav/>
    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      <form>
        <h2>Cadastro</h2>
        <p>Faça já seu login na plataforma.</p>
        <input type="text" placeholder='Digite seu melhor Email...'/>
        <input type="text" placeholder='Digite sua melhor senha...'/>
        <button>Enviar</button>
        <div>Por favor ler os <span>termos de segurança</span></div>
      </form>
    </Modal>
    <SideBar isOpen={sideBar} setSideBarOpen={() => setSideBar(!sideBar)}/>
    <Carousel/>
    <BestSeller/>
    <Products/>
    </>
  )
}

export default App
