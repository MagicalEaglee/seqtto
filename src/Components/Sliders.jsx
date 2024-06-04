import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Sliders.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import cl1 from "../Assets/images/clints/2-150x150-removebg-preview.png"
import cl2 from "../Assets/images/clints/Gs-removebg-preview.png"
import cl3 from "../Assets/images/clints/tr-removebg-preview.png"

import cl5 from "../Assets/images/clints/se7en_tech_it_solutions_logo-removebg-preview.png"
import cl6 from "../Assets/images/clints/TalentoLink-150x150-removebg-preview.png"
import cl7 from "../Assets/images/clints/Thaaja-150x150-removebg-preview.png"
function Sliders() {
  return (
    <>
    <h2 className='servicesh21'>Our Clients</h2>
      <div className="slide-l">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="clint-images">
              <div className="sl-imagee">
                <img src={cl1} alt="" />
              </div>
              <div className="sl-imagee">
                <img src={cl2} alt="" />
              </div>
              <div className="sl-imagee">
                <img src={cl3} alt="" />
              </div>
              <div className="sl-imagee">
              <img src="https://filenow.in/static/media/File_Now_Logo.53b6cc71ad594e1159143f1b5f131916.svg" alt="" />
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src={cl5} alt="" />
              </div>
              <div className="sl-imagee">
                <img src={cl6} alt="" />
              </div>
              <div className="sl-imagee">
                <img src={cl7} alt="" />
              </div>
              <div className="sl-imagee">
              <img className="filenow" src="https://filenow.in/static/media/Dcoder%20Logo.7c440e313ca7a55944eac58b6b3c3dbc.svg" alt="" width="10px" height="10px"/>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src="https://filenow.in/static/media/Brand%20Logo%201.2f2aefd276c8fcf323bd5b3b090598e5.svg" alt="" />
              </div>
              <div className="sl-imagee">
                <img src="https://filenow.in/static/media/School%20Easee%20Logo.d9b4a9e7f1a44df06c7317021ce50de4.svg" alt="" />
              </div>
              <div className="sl-imagee">
                <img src="https://dcoder.co.in/dist/images/logo/logo.png" alt="" />
              </div>
              <div className="sl-imagee">
              <img src="https://filenow.in/static/media/File_Now_Logo.53b6cc71ad594e1159143f1b5f131916.svg" alt="" />
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="slide-sm">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src={cl1} alt="" />
              </div>
              <div className="sl-imagee">
                <img src={cl2} alt="" />
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src={cl3} alt="" />
              </div>
              <div className="sl-imagee">
              <img src="https://filenow.in/static/media/File_Now_Logo.53b6cc71ad594e1159143f1b5f131916.svg" alt="" />
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src={cl5} alt="" />
              </div>
              <div className="sl-imagee">
                <img src={cl6} alt="" />
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src={cl7} alt="" />
              </div>
              <div className="sl-imagee">
              <img className="filenow" src="https://filenow.in/static/media/Dcoder%20Logo.7c440e313ca7a55944eac58b6b3c3dbc.svg" alt="" width="10px" height="10px"/>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src="https://filenow.in/static/media/Brand%20Logo%201.2f2aefd276c8fcf323bd5b3b090598e5.svg" alt="" />
              </div>
              <div className="sl-imagee">
                <img src="https://filenow.in/static/media/School%20Easee%20Logo.d9b4a9e7f1a44df06c7317021ce50de4.svg" alt="" />
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clint-images">
          <div className="sl-imagee">
                <img src={cl1} alt="" />
              </div>
              <div className="sl-imagee">
              <img src="https://filenow.in/static/media/File_Now_Logo.53b6cc71ad594e1159143f1b5f131916.svg" alt="" />
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Sliders
