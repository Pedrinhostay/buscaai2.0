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
import Provider from './context/Provider.jsx';
import ModalForm from './components/ModalForm/ModalForm.jsx';
import Infos from './components/Infos/Infos.jsx';



function App() {
  const [openModal, setOpenModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  return (
    <Provider>
    <Header setOpenModal={setOpenModal} setSideBar={setSideBar}/>
    <Nav/>
    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      <ModalForm/>
    </Modal>
    <SideBar isOpen={sideBar} setSideBarOpen={() => setSideBar(!sideBar)}/>
    <Carousel/>
    <BestSeller/>
    <Products/>
    <Infos/>
    </Provider>
  )
}

export default App