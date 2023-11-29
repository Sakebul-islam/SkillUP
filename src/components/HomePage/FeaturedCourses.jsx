import { useQuery } from '@tanstack/react-query';
import Container from '../Shared/Container';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import FeaturedClassCard from '../HomePage/FeaturedClassCard';
import { featuredCourses } from '../../api/auth';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './FeaturedCourses.css';

const FeaturedCourses = () => {
  const { data: featuredCourse = [] } = useQuery({
    queryKey: ['featuredCourse'],
    queryFn: async () => await featuredCourses(),
  });

  console.log(featuredCourse);
  return (
    <div className='py-6'>
      <Container>
        <SectionHeader
          heading={`Our Featured`}
          headingSpan={'Courses'}
          headingDescription={`Explore our top-rated and highly enrolled courses – the best of the best for your learning journey`}
        />

        <div className='h-[620px] py-4'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination]}
            className='mySwiper5 select-none'
          >
            {featuredCourse.map((course) => (
              <SwiperSlide key={course?._id}>
                <FeaturedClassCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
