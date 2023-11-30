import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addAssignment, addFeedback, getSingleUsers } from '../../api/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const AssignmentModal = ({ setIsOpen, isOpen, classInfo }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: myInfo = [] } = useQuery({
    queryKey: ['myInfo'],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  });

  const { mutate } = useMutation({
    mutationKey: ['assignment'],
    mutationFn: (feedBack) => addFeedback(feedBack),
    onSuccess: (result) => {
      toast.success(result?.message);
      setIsOpen(false);
      reset();
    },
  });

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const onSubmit = async ({ description }) => {
    try {
      const feedBack = {
        text: description,
        rating: rating ? rating : 1,
        classTitle: classInfo?.classTitle,
        name: myInfo?.name,
        image: myInfo?.image,
        classId: classInfo?._id,
      };

      mutate(feedBack);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium text-center leading-6 text-gray-900'
                  >
                    Add Assignment
                  </Dialog.Title>
                  <div className='mt-4 w-full'>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className='flex gap-3 flex-col'
                    >
                      {/* Feedback Description  */}
                      <div className='flex gap-1 flex-col justify-between items-start'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                          className='!h-40 resize-none w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900 text-xl'
                          id='description'
                          type='number'
                          {...register('description', { required: true })}
                        />
                        {errors.description && (
                          <span className='text-red-500 inline-block'>{`${
                            errors.description.message
                              ? errors.description.message
                              : 'This field is required'
                          }`}</span>
                        )}
                      </div>

                      {/* Assignment Title  */}
                      <div className='flex gap-1 flex-col justify-between items-start'>
                        <label htmlFor='assignmentTitle'>Rating</label>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor='#ffd700'
                        />
                      </div>
                      <hr className='mt-6 ' />
                      <div className='flex mt-2 justify-center gap-5'>
                        <button
                          type='submit'
                          className='inline-flex justify-center rounded-sm border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-[#71cfad] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                          // onClick={() => modalHandler(selected)}
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AssignmentModal;
