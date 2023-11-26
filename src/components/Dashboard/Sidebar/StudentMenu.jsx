import { MdOutlinePlaylistAddCircle } from 'react-icons/md';
import MenuItem from './MenuItem';

const StudentMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdOutlinePlaylistAddCircle}
        label='My Enroll class'
        address='/dashboard/my-enroll-class'
      />
    </>
  );
};

export default StudentMenu;
