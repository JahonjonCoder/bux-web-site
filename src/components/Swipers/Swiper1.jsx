import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Projects1 from '../../data/projects';
import '../../styles/home.css';

const Products1 = () =>{
    return(
        <>
           <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        slidesPerGroup={4}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: {
                              width: 300,
                              slidesPerView: 1,
                            },
                            640:{
                                width:600,
                                slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 3,
                            },
                            991: {
                                slidesPerView: 3,
                              },
                          }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            Projects1.map((item)=>(
                                <div key={item.id}>
                                     <SwiperSlide style={{height:"200px"}} className='swipers'>
                                        <a href="#">
                                            <div className="imgs">
                                                <img src={item.imgUrl} alt="logo" />
                                            </div>
                                        </a>
                                    </SwiperSlide>
                                </div>
                            ))
                        }

                       
                    </Swiper>
        </>
    )
}

export default Products1;
