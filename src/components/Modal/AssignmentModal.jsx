import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addAssignment } from '../../api/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const AssignmentModal = ({ setIsOpen, isOpen }) => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['assignment'],
    mutationFn: (assignment) => addAssignment({ id: params?.id, assignment }),
    onSuccess: (result) => {
      toast.success(result);
      setIsOpen(false);
      reset();
      queryClient.invalidateQueries({ queryKey: ['classProgress'] });
    },
  });

  const onSubmit = async (data) => {
    try {
      const assignment = {
        assignmentTitle: data?.assignmentTitle,
        assignmentDeadline: data?.assignmentDeadline,
        description: data?.description,
      };
      mutate(assignment);
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
                      {/* Assignment Title  */}
                      <div className='flex gap-1 flex-col justify-between items-start'>
                        <label htmlFor='assignmentTitle'>
                          Assignment Title
                        </label>
                        <input
                          className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
                          id='assignmentTitle'
                          type='text'
                          placeholder='Enter Your Name Hare'
                          {...register('assignmentTitle', { required: true })}
                        />
                        {errors.assignmentTitle && (
                          <span className='text-red-500'>
                            This field is required
                          </span>
                        )}
                      </div>
                      {/* Assignment Deadline  */}
                      <div className='flex gap-1 flex-col justify-between items-start'>
                        <label htmlFor='assignmentDeadline'>
                          Assignment Deadline
                        </label>
                        <input
                          className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
                          id='assignmentDeadline'
                          type='datetime-local'
                          placeholder='Enter Your Name Hare'
                          {...register('assignmentDeadline', {
                            required: true,
                          })}
                        />
                        {errors.assignmentDeadline && (
                          <span className='text-red-500'>
                            This field is required
                          </span>
                        )}
                      </div>
                      {/* Assignment Description  */}
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
                      <hr className='mt-6 ' />
                      <div className='flex mt-2 justify-center gap-5'>
                        <button
                          type='submit'
                          className='inline-flex justify-center rounded-sm border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-[#71cfad] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                          //   onClick={() => modalHandler(selected)}
                        >
                          Create
                        </button>
                        <button
                          type='button'
                          className='inline-flex justify-center rounded-sm border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                          onClick={() => setIsOpen(false)}
                        >
                          Cancel
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
