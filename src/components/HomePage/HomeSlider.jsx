import Slider from '../Shared/Slider/GallerySlider';
import Container from '../Shared/Container';

const HomeSlider = () => {
  const slideImages = [
    'https://i.ibb.co/C1gxkFb/slide-1.png',
    'https://i.ibb.co/SmLcpyL/slide-2.png',
    'https://i.ibb.co/FsG3713/slide-3.png',
    'https://i.ibb.co/FHV4X0g/slide-4.png',
    'https://i.ibb.co/868dkhQ/slide-5.png',
    'https://i.ibb.co/G9D1gRP/slide-6.png',
    'https://i.ibb.co/VQMQBDV/slide-7.png',
    'https://i.ibb.co/ZdWch8j/slide-8.png',
    'https://i.ibb.co/Lh6yLy0/slide-9.png',
    'https://i.ibb.co/bBBSFD7/slide-10.png',
    'https://i.ibb.co/6DNC1Fn/slide-11.png',
    'https://i.ibb.co/xqD1Mk6/slide-12.png',
  ];
  return (
    <>
      <Container>
        <Slider slideImages={slideImages} />
      </Container>
    </>
  );
};

export default HomeSlider;
