import * as M from "./modal.js";
import { FaTimes } from "react-icons/fa";

export default function Modal({isOpen, setModalOpen, children}){

    if(isOpen){
        return (
            <M.Container>
                <M.Content>
                    <div>{children}</div>
                    <a href=""><FaTimes onClick={() => setModalOpen }></FaTimes></a>
                </M.Content>
                </M.Container>
        )
    }
    

    return null
}
