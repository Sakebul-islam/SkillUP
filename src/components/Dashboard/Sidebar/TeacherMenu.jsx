import { GrTableAdd } from 'react-icons/gr';
import { SiGoogleclassroom } from 'react-icons/si';
import MenuItem from './MenuItem';

const TeacherMenu = () => {
  return (
    <>
      <MenuItem
        icon={GrTableAdd}
        label='Add Class'
        address='/dashboard/add-class'
      />
      <MenuItem
        icon={SiGoogleclassroom}
        label='My Class'
        address='/dashboard/my-class'
      />
    </>
  );
};

export default TeacherMenu;
