/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStatus } from '../../../api/auth';
import toast from 'react-hot-toast';

const UserDataRow = ({ user, refetch }) => {
  const queryClient = useQueryClient();

  const { mutate: updateTeacherStatus } = useMutation({
    mutationKey: ['teacherStatus'],
    mutationFn: async (teacherInfo) => await updateStatus(teacherInfo),
    onSuccess: () => {
      toast.success('Status Update Successfully');
      queryClient.invalidateQueries({ queryKey: ['teacherRequests'] });
    },
  });

  const handleApproved = async () => {
    const newStatus = {
      id: user?._id,
      status: 'approved',
    };
    try {
      updateTeacherStatus(newStatus);
      refetch();
    } catch (error) {
      toast.error(error.message);
    } finally {
      //
    }
  };
  const handleReject = async () => {
    const newStatus = {
      id: user?._id,
      status: 'reject',
    };
    try {
      updateTeacherStatus(newStatus);
      refetch();
    } catch (error) {
      toast.error(error.message);
    } finally {
      //
    }
  };

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap truncate'>
          {user?.name}
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
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap truncate capitalize'>
          {user?.experience}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap truncate capitalize'>
          {user?.title}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.categories.map((category, index) => (
          <p
            key={index}
            className='text-gray-900 whitespace-no-wrap truncate capitalize'
          >
            {`${index + 1}. ${category}`}
          </p>
        ))}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm capitalize'>
        {user?.status ? (
          <p
            className={`${
              user?.status === 'pending'
                ? 'text-orange-500'
                : user?.status === 'approved'
                ? 'text-green-500'
                : 'text-red-500'
            } whitespace-no-wrap`}
          >
            {user?.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <dir className='flex flex-col justify-evenly p-0 gap-4'>
          <button
            onClick={handleApproved}
            disabled={user?.status === 'approved'}
            className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight w-full'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative truncate'>Approved</span>
          </button>
          <button
            onClick={handleReject}
            disabled={user?.status === 'reject'}
            className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight w-full'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative truncate'>Reject</span>
          </button>
        </dir>
      </td>
    </tr>
  );
};

export default UserDataRow;
