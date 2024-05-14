import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './SliderBanner.module.scss';

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<SampleArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${styles.nextArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow: React.FC<SampleArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${styles.arrowbutton}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SliderBanner: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
      <Image src="/banner0.png" alt="Banner 1" width={1300} objectFit='cover' height={611}/>
      <Image src="/banner0_negate.png" alt="Banner 2" width={1300} objectFit='cover' height={611}/>
        {/* <div>
          <Image src="/banner0.png" alt="Banner 1" width={1300} objectFit='cover' height={611}/>
        </div>
        <div>
          <Image src="/banner0_negate.png" alt="Banner 2" width={1300} objectFit='cover' height={611}/>
        </div> */}
      </Slider>
    </div>
  );
};

export default SliderBanner;
