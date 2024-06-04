import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { NavLink, Outlet } from 'react-router-dom';

export default function Sliderr() {
    return (
        <>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={
          false
        }
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper-mobi"
      >
        <SwiperSlide>
            <NavLink to="Ios">
                <h5>Ios</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Android">
                <h5>Android</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Cross">
                <h5>Cross</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Mobileweb">
                <h5>Mobile web</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Hybrid">
                <h5>Hybrid</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="PWA">
                <h5>PWA</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="ReactNative">
                <h5>React Native </h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Flutter">
                <h5>Flutter</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Xamarin">
                <h5>Xamarin</h5>
            </NavLink>
        </SwiperSlide>
      </Swiper>
           <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={
          false
        }
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper-mobi2"
      >
        <SwiperSlide>
            <NavLink to="Ios">
                <h5>Ios</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Android">
                <h5>Android</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Cross">
                <h5>Cross</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Mobileweb">
                <h5>Mobile web</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Hybrid">
                <h5>Hybrid</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="PWA">
                <h5>PWA</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="ReactNative">
                <h5>React Native </h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Flutter">
                <h5>Flutter</h5>
            </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="Xamarin">
                <h5>Xamarin</h5>
            </NavLink>
        </SwiperSlide>
      </Swiper>
      <div className="mobou">
      <Outlet/>
      </div>
        </>
      );
}
