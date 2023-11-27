/* eslint-disable react/prop-types */
import { useState } from 'react';
import { updateRole } from '../../../api/auth';
import UpdateUserRole from '../../Modal/UpdateUserRole';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';

const UserDataRow = ({ user, refetch }) => {
  const { user: systemUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = async (role) => {
    console.log({ email: user?.email, role });
    try {
      const data = await updateRole({ email: user?.email, role });
      if (data?.modifiedCount > 0) {
        refetch();
        toast.success('User Role Updated successfully!');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap truncate'>
          {user?.name}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap truncate'>
          {user?.email}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm capitalize'>
        <p className='text-gray-900 whitespace-no-wrap block w-[70px] h-16'>
          <img
            className='inline-block w-full h-full'
            src={user?.image}
            alt={user?.name}
            title={user?.name}
          />
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm capitalize'>
        {user?.role ? (
          <p
            className={`${
              user.role === 'admin'
                ? 'text-green-500'
                : user.role === 'student'
                ? 'text-orange-500'
                : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user?.role}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          disabled={systemUser?.email === user?.email}
          onClick={() => setIsOpen(true)}
          className={`relative ${
            systemUser?.email === user?.email
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
          } inline-block px-3 py-1 font-semibold text-green-900 leading-tight`}
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative truncate'>Update Role</span>
        </button>
        <UpdateUserRole
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
          modalHandler={modalHandler}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
