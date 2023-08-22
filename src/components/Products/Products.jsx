import {  useEffect, useContext } from "react"

import fetchProducts from "../../api/fetchProducts"
import "./Products.css"
import Cards from "../ProductsCards/Cards";
import AppContext from "../../context/AppContext";

export default function Products(){
    
    const {products, setProducts} =useContext(AppContext);

    useEffect( () => {
        fetchProducts('jogos console').then((res) => {
            setProducts(res);
        })
    }, [])

    return(
        <>
            <h1 className="heading">Os melhores produtos</h1>
        <section className="products">
            {products.map((product) => <Cards key={product.id} data={product}/>)}
        </section>
        </>
    )
}