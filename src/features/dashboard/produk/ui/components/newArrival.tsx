import { Carousel, PageHeader } from 'antd'
import React from 'react'
import { Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import CardComponents from './card'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const NewArrival = () => {
  return (
    <div>
        <PageHeader 
            title="New Arrival"
        />
        <Swiper            
            slidesPerView={5}
            spaceBetween={20}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <CardComponents title="A"/>    
            </SwiperSlide>
                <SwiperSlide>
                   <CardComponents title="B"/>    
            </SwiperSlide>
             <SwiperSlide>
                <CardComponents title="C"/>    
             </SwiperSlide>
             <SwiperSlide>
                 <CardComponents title="D"/>    
            </SwiperSlide>
            <SwiperSlide>
                <CardComponents title="E"/>    
            </SwiperSlide>
             <SwiperSlide>
                <CardComponents title="F"/>    
            </SwiperSlide>
            <SwiperSlide>
                <CardComponents title="F"/>    
            </SwiperSlide>
            <SwiperSlide>
                <CardComponents title="F"/>    
            </SwiperSlide>
            <SwiperSlide>
                <CardComponents title="F"/>    
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default NewArrival