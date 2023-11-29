/* eslint-disable react/prop-types */
import { updateClassStatus } from '../../../api/auth';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';

const UserDataRow = ({ item }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['classStatus'],
    mutationFn: async (info) => await updateClassStatus(info),
    onSuccess: () => {
      toast.success('Status Update Successfully');
      queryClient.invalidateQueries({ queryKey: ['teacherClasses'] });
    },
  });

  const handleApproved = async () => {
    mutate({ id: item?._id, status: 'approve' });
  };
  const handleReject = async () => {
    mutate({ id: item?._id, status: 'reject' });
  };
  const handleProgress = async () => {
    navigate(`/dashboard/class/${item?._id}`);
  };

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap block w-[150px] whitespace-break-spaces'>
          {item?.classTitle}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm capitalize'>
        <p className='text-gray-900 whitespace-no-wrap block w-[70px] h-16'>
          <img
            className='inline-block w-full h-full'
            src={item?.image}
            alt={item?.classTitle}
            title={item?.classTitle}
          />
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap truncate'>
          {item?.email}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 truncate whitespace-break-spaces'>
          {item?.description?.length > 100
            ? `${item?.description.slice(0, 100)}...`
            : item?.description}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm capitalize'>
        {item?.status ? (
          <p
            className={`${
              item?.status === 'approve' ? 'text-green-500' : 'text-orange-500'
            } whitespace-no-wrap`}
          >
            {item?.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <dir className='flex flex-col justify-evenly p-0 gap-4'>
          <button
            onClick={handleApproved}
            disabled={item?.status === 'approve'}
            className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight w-full'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative truncate'>Approve</span>
          </button>
          <button
            onClick={handleReject}
            disabled={item?.status === 'reject'}
            className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight w-full'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative truncate'>Reject</span>
          </button>
          <button
            onClick={handleProgress}
            disabled={item?.status === 'pending' || item?.status === 'reject'}
            className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight w-full ${
              item?.status === 'pending' || item?.status === 'reject'
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            }`}
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative truncate'>SeeProgress</span>
          </button>
        </dir>
      </td>
    </tr>
  );
};

export default UserDataRow;
