import MenuItem from './MenuItem';
import { RiUserReceivedLine } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { SiGoogleclassroom } from 'react-icons/si';

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={RiUserReceivedLine}
        label='Teacher Request'
        address='/dashboard/teacher-request'
      />
      <MenuItem icon={IoIosPeople} label='Users' address='/dashboard/users' />
      <MenuItem
        icon={SiGoogleclassroom}
        label='All classes'
        address='/dashboard/all-classes'
      />
    </>
  );
};

export default AdminMenu;
