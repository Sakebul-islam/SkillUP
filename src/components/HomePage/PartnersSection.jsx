import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import partner1 from '../../assets/images/partners/p1.png';
import partner2 from '../../assets/images/partners/p2.png';
import partner3 from '../../assets/images/partners/p3.png';
import partner4 from '../../assets/images/partners/p4.png';
import Container from '../Shared/Container';

const PartnersSection = () => {
  return (
    <div className='py-12'>
      <Container>
        <SectionHeader
          heading={'Our Partners'}
          headingDescription={'Those are our Collaboration partners'}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto'>
          <img className='block w-full sm-w-[200px] px-8 py-2' src={partner1} alt='' />
          <img className='block w-full sm-w-[200px] px-8 py-2' src={partner2} alt='' />
          <img className='block w-full sm-w-[200px] px-8 py-2' src={partner3} alt='' />
          <img className='block w-full sm-w-[200px] px-8 py-2' src={partner4} alt='' />
        </div>
      </Container>
    </div>
  );
};

export default PartnersSection;
