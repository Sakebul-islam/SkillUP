import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitAssignment } from '../../../api/auth';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';

const ClassDataRow = ({ assignment, assignmentStatus }) => {
  const { user } = useAuth();
  const params = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['classStatus'],
    mutationFn: async (assignmentInfo) =>
      await submitAssignment(assignmentInfo),
    onSuccess: () => {
      toast.success('Assignment Submit Successfully');
      queryClient.invalidateQueries({
        queryKey: ['getSingleClasss'],
      });
    },
  });

  const handleSubmit = () => {
    const assignmentInfo = {
      date: new Date(),
      classId: params?.id,
      assignmentId: assignment?.assignmentId,
      email: user?.email,
    };
    mutate(assignmentInfo);
  };
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap block w-[150px] whitespace-break-spaces'>
          {assignment?.assignmentTitle}
        </p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap max-w-[200px]'>
          {assignment?.description}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap max-w-[200px]'>
          {new Date(assignment?.assignmentDeadline).toLocaleString()}
        </p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <dir className='flex flex-col justify-evenly p-0 gap-4'>
          <button
            disabled={
              assignmentStatus?.assignmentId === assignment?.assignmentId
            }
            onClick={handleSubmit}
            className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight w-full 
            ${
              assignmentStatus?.assignmentId === assignment?.assignmentId
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            }
            `}
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative truncate'>Submit</span>
          </button>
        </dir>
      </td>
    </tr>
  );
};

export default ClassDataRow;
