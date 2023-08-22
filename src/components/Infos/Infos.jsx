import * as I from "./Infos"
import { FaHive, FaUncharted ,FaChromecast, FaWpforms} from "react-icons/fa"
export default function Infos() {
  return (
    <I.Container>
        <I.Content>
            <I.Info>
                    <span><FaUncharted/></span>
                <div>
                    <h2>Loja Oficial</h2>
                    <p>As melhores vantagens de comprar direto da fábrica</p>
                </div>
            </I.Info>
            <I.Info>
                    <span><FaChromecast/></span>
                <div>
                    <h2>Parcelamento</h2>
                    <p>Parcele sua compra até 10 vezes sem juros</p>
                </div>
            </I.Info>
            <I.Info>
                    <span><FaHive/></span>
                <div>
                    <h2>Frete</h2>
                    <p>Em compras acima de R$150 reais o frete é gratis.</p>
                </div>
            </I.Info>
            <I.Info>
                    <span><FaWpforms/></span>
                <div>
                    <h2>Pagamento via PIX</h2>
                    <p>Pague suas compras muito mais rápido.</p>
                </div>
            </I.Info>
        </I.Content>
    </I.Container>
  )
}
