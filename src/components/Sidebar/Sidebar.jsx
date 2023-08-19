import { FaTimes } from "react-icons/fa"
import * as S from "./sidebar.js"
export default function SideBar({isOpen, children, setSideBarOpen}){
    
    if(isOpen){
        return (
            <S.Aside>
                <header>
                    <h2>Carrinho</h2>
                    <a href=""><FaTimes onClick={() => setSideBarOpen }/></a>
                </header>
                <div>{children}</div>
            </S.Aside>
        )
    }
    

    return null
}