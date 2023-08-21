
import Search from "../Search/Search.jsx"
import * as H from "./header.js"
import { FaCartPlus, FaUser} from "react-icons/fa"
import propTypes from "prop-types";
export default function Header ({setOpenModal, setSideBar}){

  return (
    <H.Container>
        <H.Content>
            <H.Logo>Buscaai</H.Logo>
            <Search/>
            <H.Icons>
              <H.ItemIcons><FaCartPlus onClick={() => setSideBar(true)}/></H.ItemIcons>
              <H.ItemIcons><FaUser onClick={() => setOpenModal(true)}/></H.ItemIcons>
            </H.Icons>
        </H.Content>
    </H.Container>
  )
}
Header.propTypes ={
  children: propTypes.any,
}.isRequired;