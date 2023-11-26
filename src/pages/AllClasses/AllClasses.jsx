import { Helmet } from 'react-helmet-async';
import Container from '../../components/Shared/Container';

const AllClasses = () => {
  return (
    <div className='min-h-[calc(100vh-167px)] h-full'>
      <Helmet>
        <title>All Classes || SkillUP</title>
      </Helmet>
      <Container></Container>
    </div>
  );
}

export default AllClasses