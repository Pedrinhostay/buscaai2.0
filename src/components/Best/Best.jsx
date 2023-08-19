import * as B from "./best.js"
import { Swiper, SwiperSlide } from 'swiper/react';
export default function BestSeller(){

    const cards = [
        {id: 1, images: "/best.jpg",title:"Fifa 23", description:"FIFA 23 é um jogo eletrônico de simulação de futebol desenvolvido pela Electronic Arts."},
        {id: 2, images: "/best1.jpg",title:"Paydal 2", description:"PAYDAY é um jogo de tiro cooperativo para quatro jogadores cheio de ação em que você é pago para roubar bancos."},
        {id: 3, images: "/best2.jpg",title:"Street Fighter", description:"Street Fighter é um videojogo de luta publicado pela Capcom, que o produziu em colaboração com o estúdio Dimps."},
        {id: 4, images: "/best3.jpg",title:"The Last Of Us", description:"The Last of Us é um jogo eletrônico pós-apocalíptico de ação-aventura e sobrevivência apresentado a partir de uma perspectiva em terceira pessoa."},
        {id: 5, images: "/best4.jpg",title:"Dark Souls 3", description:"Dark Souls é um jogo eletrônico de RPG de ação desenvolvido pela FromSoftware e publicado pela Namco Bandai Games."},
        {id: 6, images: "/best5.jpg",title:"God Of War", description:"God of War é uma série de jogos eletrônicos de ação-aventura criada por David Jaffe da Santa Monica Studio, da Sony."},
        {id: 7, images: "/best6.jpg",title:"Hogwarts Legacy", description:"Hogwarts Legacy é um RPG de ação e mundo aberto ambientado no mundo apresentado nos livros de Harry Potter."},
        {id: 8, images: "/best7.jpg",title:"Minecraft", description:"Minecraft é um jogo de construção em mundo aberto desenvolvido pela Mojang Studios."},
        {id: 9, images: "/best8.jpg",title:"Gta 5", description:"Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games"},
    ]

    return (
        <B.Container>
            <B.title>Os Jogos mais vendidos</B.title>
            <Swiper
            watchSlidesProgress={true}
             slidesPerView={4}
             navigation
            >
            {cards.map((item) => (
                <SwiperSlide key={item.id} className="bestCard">
                    <img src={item.images} alt="Mais vendidos" className='slideCard'/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </SwiperSlide>
            ))}
            </Swiper>
        </B.Container>
    )
}