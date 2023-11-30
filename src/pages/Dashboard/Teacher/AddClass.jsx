import Button from '../../../components/Button/Button';
import SectionHeader from '../../../components/Shared/SectionHeader/SectionHeader';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { getSingleUsers } from '../../../api/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { imageUpload } from '../../../api/imageUploder';
import axiosSecure from '../../../api/axiosFunc';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
  const { user } = useAuth();
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const { data: myInfo, refetch } = useQuery({
    queryKey: ['myInfo', user?.email],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    if (myInfo) {
      setValue('name', myInfo.name);
      setValue('email', myInfo.email);
    }
  }, [myInfo, setValue, load]);

  const { mutate, isLoading } = useMutation({
    mutationKey: ['class'],
    mutationFn: (classData) => {
      return axiosSecure.post('/classes', classData);
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoad(true);
      const imageData = await imageUpload(data?.picture[0]);
      const classFinalData = {
        name: data?.name,
        email: data?.email,
        classTitle: data?.classTitle,
        price: parseFloat(data?.price),
        description: data?.description,
        image: imageData,
        status: 'pending',
      };
      mutate(classFinalData);
      toast.success('Class Added Successfully!');
      navigate('/dashboard/my-class');
    } catch (err) {
      // Handle errors
      toast.error(err.message);
    } finally {
      setLoad(false);
      reset();
    }
  };

  return (
    <div>
      <Helmet>
        <title>Add Class || Dashboard</title>
      </Helmet>
      <div className='my-6'>
        <SectionHeader
          heading={'Add a class for Your'}
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
                {...register('picture', { required: true })}
                accept='image/*'
              />
              {errors.picture && (
                <span className='text-red-500 inline-block'>
                  This field is required
                </span>
              )}
            </div>

            <div>
              <Button disabled={isLoading} type='submit'>
                Add Class
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
