/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { deleteClass } from '../../../api/auth';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ClassCard = ({ data: singleClass }) => {
  // const queryClient = useQueryClient();

  // const { mutate } = useMutation({
  //   mutationKey: ['teacherStatus'],
  //   mutationFn: async (id) => await deleteClass(id),
  //   onSuccess: (result) => {
  //     toast.success(result);
  //     queryClient.invalidateQueries({ queryKey: ['getSingleClass'] });
  //   },
  // });

  // const handleDelete = () => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // mutate(singleClass?._id);
  //     }
  //   });
  // };

  return (
    <div className='flex flex-col rounded-md bg-neutral-100'>
      <figure className=''>
        <img
          className='min-h-[162px] sm:max-h-96 w-full rounded-t-md'
          draggable='false'
          src={singleClass?.image}
          alt={singleClass?.name}
          title={singleClass?.name}
        />
      </figure>
      <div className='p-4 flex-grow'>
        <h3 className='line-clamp-2	text-lg font-bold'>
          {singleClass?.classTitle}
        </h3>
        <div className='divider m-0'></div>
        <div className='flex flex-col justify-between'>
          <span>Author : {singleClass?.name}</span>
        </div>
        <p className='text-lg font-bold'>Price : ${singleClass?.price}</p>
        <div className='divider m-0 after:bg-[#03b97c] before:bg-[#03b97c]'></div>
        <p className='text-lg font-bold'>
          Total Enroll : {singleClass?.enroll}
        </p>
        <div className='divider m-0 after:bg-[#03b97c] before:bg-[#03b97c]'></div>
        <div>
          {singleClass?.description?.length > 150
            ? `${singleClass?.description.slice(0, 80)}...`
            : singleClass?.description}
        </div>
      </div>
      <div className='p-4 w-full select-none'>
        <Link
          to={`/class/${singleClass?._id}`}
          className='text-md block text-center rounded-sm font-bold bg-[#03b97c] px-3 py-2 sm:px-4 sm:py-3 text-white truncate w-full'
        >
          Enroll
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
