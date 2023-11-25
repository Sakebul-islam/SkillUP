import Slider from '../Shared/Slider/Slider';

import slide1 from '../../assets/images/slider/slide-1.jpg';
import slide2 from '../../assets/images/slider/slide-2.jpg';
import slide3 from '../../assets/images/slider/slide-3.jpg';
import slide4 from '../../assets/images/slider/slide-4.jpg';
import slide5 from '../../assets/images/slider/slide-5.jpg';
import slide6 from '../../assets/images/slider/slide-6.jpg';
import slide7 from '../../assets/images/slider/slide-7.jpg';
import slide8 from '../../assets/images/slider/slide-8.jpg';
import slide9 from '../../assets/images/slider/slide-9.jpg';
import slide10 from '../../assets/images/slider/slide-10.jpg';
import slide11 from '../../assets/images/slider/slide-11.jpg';
import slide12 from '../../assets/images/slider/slide-12.jpg';

const HomeSlider = () => {
  const slideImages = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
  ];
  return (
    <>
      <Slider slideImages={slideImages} />
    </>
  );
};

export default HomeSlider;
