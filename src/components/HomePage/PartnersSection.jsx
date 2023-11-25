// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './PartnersSection.css';

// import required modules
import { Autoplay } from 'swiper/modules';

import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import partner1 from '../../assets/images/partners/p1.png';
import partner2 from '../../assets/images/partners/p2.png';
import partner3 from '../../assets/images/partners/p3.png';
import partner4 from '../../assets/images/partners/p4.png';
import partner5 from '../../assets/images/partners/p5.png';
import partner6 from '../../assets/images/partners/p6.png';
import Container from '../Shared/Container';

const PartnersSection = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6];
  return (
    <div className='py-12'>
      <Container>
        <SectionHeader
          heading={'Our Partners'}
          headingDescription={'Those are our Collaboration partners'}
        />
        <div className='h-[40vh] flex flex-row justify-center items-center py-4 overflow-clip'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay]}
            className='mySwiper4'
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <figure className='flex justify-center items-center my-4'>
                  <img className='!w-full rounded-3xl' src={partner} alt='' />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default PartnersSection;
