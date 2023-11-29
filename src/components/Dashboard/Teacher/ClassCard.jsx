import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { deleteClass } from '../../../api/auth';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ClassCard = ({ myClass }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['teacherStatus'],
    mutationFn: async (id) => await deleteClass(id),
    onSuccess: (result) => {
      toast.success(result);
      queryClient.invalidateQueries({ queryKey: ['getSingleClass'] });
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(myClass?._id);
      }
    });
  };
  return (
    <div className='flex flex-col rounded-md bg-neutral-100'>
      <figure className='relative'>
        <img
          className='min-h-[162px] sm:max-h-96 w-full rounded-t-md'
          draggable='false'
          src={myClass?.image}
          alt={myClass?.name}
          title={myClass?.name}
        />
        <span
          className={`absolute px-2 py-0.5 select-none capitalize text-white top-1 right-3 rounded-md ${
            myClass?.status === 'approve'
              ? 'bg-[#03b97c]'
              : myClass?.status === 'pending'
              ? 'bg-blue-500'
              : 'bg-red-500'
          }`}
        >
          {myClass?.status}
        </span>
      </figure>
      <div className='p-4 flex-grow'>
        <h3 className='line-clamp-2	text-lg font-bold min-h-[56px]'>{myClass?.classTitle}</h3>
        <div className='divider m-0'></div>
        <div className='flex flex-col justify-between'>
          <span>Name : {myClass?.name}</span>
          <span>Email : {myClass?.email}</span>
        </div>
        <p className='text-lg font-bold'>Price : ${myClass?.price}</p>
        <div className='divider m-0'></div>
        <div>
          {myClass?.description?.length > 150
            ? `${myClass?.description.slice(0, 100)}...`
            : myClass?.description}
        </div>
      </div>
      <div className='p-4 w-full flex justify-between flex-nowrap gap-1 select-none'>
        <Link
          to={`/dashboard/edit/${myClass?._id}`}
          className='text-md rounded-sm font-bold bg-[#03b97c] px-3 py-2 sm:px-4 sm:py-3 text-white truncate'
        >
          Update
        </Link>
        <Link
          to={
            myClass?.status === 'approve'
              ? `/dashboard/my-class/${myClass?._id}`
              : ''
          }
          className={`text-md font-bold bg-blue-500 px-3 py-2 sm:px-4 sm:py-3 text-white truncate ${
            myClass?.status === 'approve'
              ? `cursor-pointer`
              : 'cursor-not-allowed'
          }`}
        >
          See Details
        </Link>
        <button
          onClick={handleDelete}
          className='text-md rounded-sm font-bold bg-red-400 px-3 py-2 sm:px-4 sm:py-3 text-white truncate'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
