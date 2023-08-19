import { FaCartPlus } from "react-icons/fa";
import "./Cards.css"
import propTypes from "prop-types"
import formatCurrent from "../../utility/formatCurrency";
export default function Cards({data}){

    const {title, price, thumbnail} = data;
    return(
       <section className="card">
        <img src={thumbnail.replace(/\w\.jpg/gi,"W.jpg")} alt="product" className="cardImg"/>
        <div className="cardDescription">
            <h2 className="cardPrice">{formatCurrent(price,"BRL")}</h2>
            <h2 className="cardTitle">{title}</h2>
        </div>
        <button className="btnBuy"><FaCartPlus/></button>
       </section> 
    )
}

Cards.propTypes = {
    data: propTypes.shape({}),
}.isRequired;