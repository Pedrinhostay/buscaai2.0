
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Carousel(){
    const data = [
        {id: 1, images:"/carousel4.jpg"},
        {id: 2, images:"/carousel2.jpg"},
        {id: 3, images:"/carousel3.jpeg"},
        {id: 4, images:"/carousel6.jpg"},
        {id: 5, images:"/carousel7.jpg"},
    ]
    return(
        <Swiper 
        slidesPerView={1}
        navigation
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.images} alt="slider" className='slide-item'/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}