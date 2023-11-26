// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './PartnersSection.css';

// import required modules
import { Autoplay } from 'swiper/modules';

import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import Container from '../Shared/Container';

const PartnersSection = () => {
  const partners = [
    'https://i.ibb.co/WFB56xx/p1.png',
    'https://i.ibb.co/qk83VQ6/p2.png',
    'https://i.ibb.co/QPSh9MY/p3.png',
    'https://i.ibb.co/9nwMQ9g/p4.png',
    'https://i.ibb.co/KjSJz54/p5.png',
    'https://i.ibb.co/TKJWcMY/p6.png',
    'https://i.ibb.co/tJD3y24/p7.png',
    'https://i.ibb.co/RP9nmKt/p8.png',
    'https://i.ibb.co/Sn7BMNG/p9.png',
  ];
  return (
    <div className='py-12'>
      <Container>
        <SectionHeader
          heading={'Our'}
          headingSpan={'Partners'}
          headingDescription={'Those are our Collaboration partners'}
        />
        <div className='h-[20vh] flex flex-row justify-center items-center py-4 overflow-clip'>
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
