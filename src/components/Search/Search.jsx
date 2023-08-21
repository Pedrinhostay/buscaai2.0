import * as H from "./Search"
import fetchProducts from "../../api/fetchProducts.js"
import { useContext, useState } from "react"
import {FaSearch} from "react-icons/fa"
import AppContext from "../../context/AppContext";
export default function Search() {

    const [searchValue, setSearchValue] = useState('');
    const {setProducts} = useContext(AppContext);

  const handleSearch = async (ev) => {
    ev.preventDefault();
    
    const products = await fetchProducts(searchValue);
    setProducts(products)
    setSearchValue('');
  }
  return (
    <H.Form onSubmit={handleSearch}>
                <H.input 
                value={searchValue}
                placeholder='Pesquise pelo seu produto...'
                onChange={({target}) => setSearchValue(target.value)}
                ></H.input>
                <H.button><FaSearch/></H.button>
            </H.Form>
  )
}
