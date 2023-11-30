import ReactStars from 'react-rating-stars-component';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axiosSecure from '../../../api/axiosFunc';
import { useQuery } from '@tanstack/react-query';
import Container from '../../../components/Shared/Container';
import SectionHeader from '../../../components/Shared/SectionHeader/SectionHeader';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Feedback = () => {
  const params = useParams();
  console.log(params?.id);
  const { data: feedbacks = [] } = useQuery({
    queryKey: ['feedbacks'],
    queryFn: async () => {
      const data = await axiosSecure.get(`/feedbacks/${params?.id}`);
      return data?.data;
    },
  });

  return (
    <div className='py-6'>
      <Helmet>
        <title>Monitor Class Feedback || Dashboard</title>
      </Helmet>
      {/* <Container> */}
        <SectionHeader
          heading={'This Class'}
          headingSpan={'Feedbacks'}
          headingDescription={`Explore insights from our students! Delve into the experiences and thoughts they've shared in the 'Student Feedbacks' section, offering a glimpse into the impact of our courses.`}
        />
        <div className='h-[500px] py-4'>
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
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination]}
            className='mySwiper2 select-none'
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback?._id}>
                <div className='w-full h-full flex flex-col justify-center p-4 flex-nowrap bg-neutral-100 cursor-pointer'>
                  <h3 className='text-2xl font-bold'>{feedback?.classTitle}</h3>
                  <h4 className='text-lg font-medium'>
                    Feedback By : {feedback?.name}
                  </h4>
                  <figure className='flex place-content-center my-4'>
                    <img
                      className='!w-28 !h-28 rounded-3xl'
                      src={feedback?.image}
                      alt=''
                    />
                  </figure>
                  <p>{feedback?.text}</p>
                  <div className='grid place-content-center'>
                    <ReactStars
                      value={feedback?.rating}
                      edit={false}
                      size={24}
                      activeColor='#03b97c'
                      fullIcon={<i className='fa fa-star'></i>}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      {/* </Container> */}
    </div>
  );
};

export default Feedback;
