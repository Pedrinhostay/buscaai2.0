import { FaCartPlus } from "react-icons/fa";
import "./Cards.css"
import propTypes from "prop-types"
import formatCurrent from "../../utility/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
export default function Cards({data}){
    const {title, price, thumbnail} = data;

    const {cartItems,setCartItems} = useContext(AppContext);

    const handleAddCart =() => setCartItems([...cartItems, data]);
    
    return(
       <section className="card">
        <img src={thumbnail.replace(/\w\.jpg/gi,"W.jpg")} alt="product" className="cardImg"/>
        <div className="cardDescription">
            <h2 className="cardPrice">{formatCurrent(price,"BRL")}</h2>
            <h2 className="cardTitle">{title}</h2>
        </div>
        <button 
        className="btnBuy"
        onClick={handleAddCart}
        ><FaCartPlus/></button>
       </section> 
    )
}

Cards.propTypes = {
    data: propTypes.shape({}),
}.isRequired;