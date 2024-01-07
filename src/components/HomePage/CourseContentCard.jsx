/* eslint-disable react/prop-types */

const CourseContentCard = ({ liveCourse }) => {
  return (
    <div
      className='border-2 border-[#03b97c] rounded-sm p-6 bg-neutral-100'
      data-aos='zoom-in'
    >
      <div
        className='text-9xl grid place-content-center my-4 cursor-pointer text-gray-700'
        title={liveCourse?.title}
      >
        {liveCourse?.icon}
      </div>
      <div>
        <h2
          className='text-2xl font-bold line-clamp-1 mb-2'
          title={liveCourse?.title}
        >
          {liveCourse?.title}
        </h2>
        <p className='line-clamp-3'>{liveCourse?.description}</p>
      </div>
    </div>
  );
};

export default CourseContentCard;
