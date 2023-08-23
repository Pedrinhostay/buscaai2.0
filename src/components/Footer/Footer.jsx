import * as F from "./Footer";
import { BiLogoMastercard, BiLogoVisa,BiCreditCard, BiEnvelope,BiLogoEbay } from "react-icons/bi"
export default function Footer() {
  return (
    <F.Container>
        <F.Content>
            <F.Itens>
                <h2>Institucional</h2>
                <ul>
                    <li>Sobre a Buscaai</li>
                    <li>Responsabilidade Social</li>
                    <li>Meio Ambiente</li>
                    <li>Blog</li>
                </ul>
            </F.Itens>
            <F.Itens>
                <h2>Políticas</h2>
                <ul>
                    <li>Termos de Uso</li>
                    <li>Política de Troca e Devolução</li>
                    <li>Política de Pagamento</li>
                    <li>Política de Privacidade</li>
                </ul>
            </F.Itens>
            <F.Itens>
                <h2>Atendimento</h2>
                <ul>
                    <li>Fale conosco</li>
                    <li>Seg / Sex - 8h00 às 20h00</li>
                    <li>Sáb - 8h00 às 14h00</li>
                </ul>
            </F.Itens>
            <F.Itens>
                    <h2>Formas de Pagamento</h2>
                <div>
                    <span><BiLogoVisa/></span>
                    <span><BiLogoMastercard/></span>
                    <span><BiCreditCard/></span>
                    <span><BiEnvelope/></span>
                    <span><BiLogoEbay/></span>
                </div>
            </F.Itens>
        </F.Content>
    </F.Container>
  )
}
