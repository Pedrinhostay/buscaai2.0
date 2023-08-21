import "./SideCart.css"
import { CiCircleRemove } from "react-icons/ci";
import propTypes from "prop-types";
import formatCurrent from "../../utility/formatCurrency";
export default function SideCart({data}) {

  const {thumbnail, title, price} = data;
  return (
    <section className="Cart">
        <img src={thumbnail} alt="produto" />
        <div className="cartInfos">
            <h3 className="cartTitle">{title}</h3>
            <h3 className="cartPrice">{formatCurrent(price, 'BRL')}</h3>
            <button 
            type="button"
            className="remove"
            ><CiCircleRemove/></button>
        </div>
    </section>
  )
}

SideCart.propTypes = {
  data: propTypes.object,
}.isRequired;