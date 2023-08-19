import { useState, useEffect } from "react"
import fetchProducts from "../../api/fetchProducts"
import Cards from "../Cards/Cards";
import "./Products.css"
export default function Products(){
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetchProducts('console').then((res) => {
            setProducts(res)
        })
    }, [])

    console.log(products)
    return(
        <>
            <h1 className="heading">Os melhores produtos</h1>
        <section className="products">
            {products.map((product) => <Cards key={product.id} data={product}/>)}
        </section>
        </>
    )
}