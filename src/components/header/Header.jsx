
import * as H from "./header.js"
import { FaCartPlus, FaSearch, FaUser} from "react-icons/fa"

export default function Header ({setOpenModal, setSideBar}){
  return (
    <H.Container>
        <H.Content>
            <H.Logo>Buscaai</H.Logo>
            <H.Form>
                <H.input placeholder='Pesquise pelo seu produto...'></H.input>
                <H.button><FaSearch/></H.button>
            </H.Form>
            <H.Icons>
              <H.ItemIcons className='off'><FaSearch/></H.ItemIcons>
              <H.ItemIcons><FaCartPlus onClick={() => setSideBar(true)}/></H.ItemIcons>
              <H.ItemIcons><FaUser onClick={() => setOpenModal(true)}/></H.ItemIcons>
            </H.Icons>
        </H.Content>
    </H.Container>
  )
}
