import SectionHeader from '../../../components/Shared/SectionHeader/SectionHeader';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { singleClass, updateClass } from '../../../api/auth';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { imageUpload } from '../../../api/imageUploder';
import Button from '../../../components/Button/Button';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateClass = () => {
  const { user } = useAuth();
  const params = useParams();
  const [load, setLoad] = useState(false);
  const queryClient = useQueryClient();

  const { data: getSingleClass, refetch } = useQuery({
    queryKey: ['getSingleClass', user?.email],
    queryFn: async () => await singleClass(params?.id),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (getSingleClass) {
      setValue('classTitle', getSingleClass?.classTitle);
      setValue('name', getSingleClass?.name);
      setValue('email', getSingleClass.email);
      setValue('price', getSingleClass.price);
      setValue('description', getSingleClass.description);
      setValue('image', getSingleClass.image);
    }
  }, [getSingleClass, setValue, load]);

  const { mutate, isLoading } = useMutation({
    mutationKey: ['class'],
    mutationFn: async (classData) =>
      await updateClass({ id: getSingleClass?._id, updateData: classData }),
    onSuccess: (result) => {
      refetch();
      toast.success(result);
      queryClient.invalidateQueries({ queryKey: ['class'] });
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoad(true);
      const imageData = data?.picture[0]
        ? await imageUpload(data?.picture[0])
        : 'undefined';
      const classFinalData = {
        name: data?.name,
        email: data?.email,
        classTitle: data?.classTitle,
        price: parseFloat(data?.price),
        description: data?.description,
        image: imageData === 'undefined' ? getSingleClass.image : imageData,
      };
      await mutate(classFinalData);
    } catch (err) {
      // Handle errors
      toast.error(err.message);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div>
      <div className='my-6'>
        <SectionHeader
          heading={'Update Your Class foy your'}
          headingSpan={'Students'}
          headingDescription={
            'Tailor your class content to suit the unique needs of your students. From lecture materials to assignments, make it your own.'
          }
        />
      </div>
      <div className='flex justify-center overflow-x-hidden'>
        <div className='flex flex-col w-full sm:max-w-xl p-6 rounded-sm sm:p-10 bg-gray-100 text-gray-900'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex gap-3 flex-col'
          >
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='classTitle'>Class Title</label>
              <input
                className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
                id='classTitle'
                type='text'
                {...register('classTitle', { required: true })}
              />
              {errors.classTitle && (
                <span className='text-red-500 inline-block'>
                  This field is required
                </span>
              )}
            </div>
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='name'>Name</label>
              <input
                disabled
                className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900 text-xl'
                id='name'
                type='name'
                {...register('name')}
              />
            </div>
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='email'>Email</label>
              <input
                disabled
                className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900 text-xl'
                id='email'
                type='text'
                {...register('email')}
              />
            </div>
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='price'>Price (Price in Dollar $)</label>
              <input
                className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900 text-xl'
                id='price'
                type='number'
                step='any'
                defaultValue={user?.price}
                {...register('price', {
                  required: true,
                })}
              />
              {errors.price && (
                <span className='text-red-500 inline-block'>{`${
                  errors.price.message
                    ? errors.price.message
                    : 'This field is required'
                }`}</span>
              )}
            </div>
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='description'>Description</label>
              <textarea
                className='!h-40 resize-none w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900 text-xl'
                id='description'
                type='number'
                defaultValue={user?.description}
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

            <div>
              <label
                htmlFor='image'
                className='inline-block w-full mb-2 text-sm'
              >
                Select Image:
              </label>
              <input
                type='file'
                id='image'
                {...register('picture')}
                accept='image/*'
              />
            </div>

            <div>
              <Button disabled={isLoading} type='submit'>
                Update Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateClass;
