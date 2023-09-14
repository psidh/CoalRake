import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import certificatesData from '../data/data';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;

const Features: React.FC = () => {
  const [sliderInitialized, setSliderInitialized] = useState(false);

  useEffect(() => {
    setSliderInitialized(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile screens
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-in" style={{ fontFamily: 'Ambit, sans-serif' }}>
  <div className="py-6 bg-gray-200 md:py-12 mt-4 ">
    <div className="container bg-gray-4w00 mx-auto text-center">
      <h2 className="md:text-4xl text-3xl font-semibold my-4 mb-8">Features</h2>
      <Slider {...settings}>
        {certificatesData.map((certificate, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-black">{certificate.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>

  );
};

export default Features;
