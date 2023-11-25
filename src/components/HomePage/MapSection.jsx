import Container from '../Shared/Container';

const MapSection = () => {
  return (
    <Container>
      <iframe
        className='w-full'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.1570066859545!2d90.36752180422846!3d23.807430362327658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1886e3bc115%3A0xe33e60b303df4a5c!2sDhaka%20Mirpur%2010!5e0!3m2!1sen!2sbd!4v1700943267535!5m2!1sen!2sbd'
        width='600'
        height='450'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </Container>
  );
};

export default MapSection;
