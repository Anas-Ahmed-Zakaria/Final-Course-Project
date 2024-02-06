import './Overview.css'

//import {Swiper , SwiperSlide} from 'swiper/react';
// import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import PageTitle from '../../Components/Layout/PageTitle/PageTitle';

export default function Overview() {
    return (
    <>
    <div className='overview__page mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mt-5'>
                <PageTitle title='Overview Page'/>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-md-12'>
                    <div className='swiperBox'>
                    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider1.jpeg" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider2.jpeg" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider3.webp" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider4.webp" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider5.webp" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider6.jpg" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider7.webp" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider8.webp" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider6.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider9.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider10.webp" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider11.webp" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider12.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider13.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider14.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider15.webp" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider16.webp" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider17.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider18.webp" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider19.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider20.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider21.jpeg" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide shadow'>
          <img className='shadow rounded' src="src/assets/Images/slider22.jpeg" />
        </SwiperSlide>        
      </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

