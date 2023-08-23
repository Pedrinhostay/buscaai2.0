import * as S from "./Social"
 import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
export default function Social() {
  return (
    <S.Container>
        <S.Content>
            <a href=""><BsFacebook/></a>
            <a href=""><BsInstagram/></a>
            <a href=""><BsYoutube/></a>
            <a href=""><BsTwitter/></a>
        </S.Content>
    </S.Container>
  )
}
