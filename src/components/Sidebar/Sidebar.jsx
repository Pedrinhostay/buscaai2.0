import { FaTimes } from "react-icons/fa";
import * as S from "./sidebar.js";
import propTypes from "prop-types";
import SideCart from "../SideCart/SideCart.jsx";
import { useContext } from "react";
import AppContext from "../../context/AppContext.js";
export default function SideBar({isOpen, setSideBarOpen}){

    const {cartItems} = useContext(AppContext);


    if(isOpen){
        return (
            <S.Aside>
                <header>
                    <h2>Carrinho</h2>
                    <a href=""><FaTimes onClick={() => setSideBarOpen }/></a>
                </header>
                <div>{cartItems.map((cartItem)=> <SideCart key={cartItem.id} data={cartItem}/>)}</div>
            </S.Aside>
        )
    }
    

    return null
}
SideBar.propTypes ={
    children: propTypes.any,
  }.isRequired;