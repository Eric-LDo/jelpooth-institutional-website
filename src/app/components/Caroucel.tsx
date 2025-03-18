'use client'
import React from 'react';
import Slider from 'react-slick';
import { caroucelList } from '../data/carouselItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './modules/Caroucel.module.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    fade: true
  };

  return (
    <Slider {...settings} className='w-max-full h-screen relative'>
      {caroucelList.map((item, index) => (
        <div key={index} >
            <div className={styles.caroucelItem} style={{ backgroundImage: `url(${item.url})` }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;