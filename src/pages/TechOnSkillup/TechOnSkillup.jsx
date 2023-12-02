import Container from '../../components/Shared/Container';
import SectionHeader from '../../components/Shared/SectionHeader/SectionHeader';
import { Helmet } from 'react-helmet-async';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import Button from '../../components/Button/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosSecure from '../../api/axiosFunc';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';

const TechOnSkillup = () => {
  const { user, loading } = useAuth();
  const [formLoading, setFormLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const categoryOptions = [
    'web development',
    'mobile app development',
    'data science',
    'machine learning',
    'artificial intelligence',
    'ui/ux design',
    'graphic design',
    'digital marketing',
    'content writing',
    'photography',
    'video editing',
    'music production',
    'business and entrepreneurship',
    'finance and accounting',
    'health and fitness',
    'cooking and culinary arts',
    'languages and linguistics',
    'personal development',
    'gaming and game development',
    'environmental science and sustainability',
  ];

  const { data: teacherData } = useQuery({
    queryKey: ['teachers'],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure(`/teachers?email=${user?.email}`);
      return response?.data;
    },
  });

  const { mutate: requestTeacher = {} } = useMutation({
    mutationKey: ['teachers'],
    mutationFn: async (requestTeacherData) =>
      await axiosSecure.post('/teachers', requestTeacherData),

    onSuccess: () => {
      setFormLoading(false);
      toast.success('Request Successful');
      reset();
      queryClient.invalidateQueries({ queryKey: ['teachers'] });
    },
  });

  const queryClient = useQueryClient();

  const { mutate: requestReview } = useMutation({
    mutationKey: ['teachers'],
    mutationFn: (userEmail) => {
      return axiosSecure.patch(`/teachers/update-status/${userEmail}`);
    },
    onSuccess: () => {
      toast.success('Request for Review Successfully');
      queryClient.invalidateQueries({ queryKey: ['teachers'] });
    },
  });

  const onSubmit = async ({ experience, teachOn, category }) => {
    setFormLoading(true);
    const categoryArray = category.map((item) => item.value);
    try {
      const teacherInfo = {
        name: user?.displayName,
        image: user?.photoURL,
        title: teachOn,
        experience,
        categories: categoryArray,
        email: user?.email,
        status: 'pending',
      };
      await requestTeacher(teacherInfo);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReview = (e) => {
    e.preventDefault();
    requestReview(user?.email);
  };
  if (teacherData?.approve?.length) {
    return (
      <div className='w-full h-screen flex justify-center items-center text-2xl font-bold'>
        Now You are a Teacher
      </div>
    );
  }
  return (
    <div className='min-h-[calc(100vh-167px)] my-12'>
      <Helmet>
        <title>Tech On SkillUP || SkillUP</title>
      </Helmet>
      <Container>
        <SectionHeader heading={'Apply as'} headingSpan={'Teacher'} />
        <div>
          <form
            onSubmit={
              teacherData?.rejected?.length > 0
                ? handleReview
                : handleSubmit(onSubmit)
            }
            className='flex gap-3 flex-col w-11/12 mx-auto md:w-4/5 lg:w-2/4'
          >
            {/* Name Field  */}
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='name'>Name</label>
              <input
                className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
                id='name'
                type='text'
                defaultValue={user?.displayName}
                disabled
                {...register('name')}
              />
              {/* {errors.name && (
                <p className='text-red-500'>
                  {teacherData?.rejected?.length > 0
                    ? ''
                    : errors.name.message
                    ? errors.name.message
                    : 'This field is required'}
                </p>
              )} */}
            </div>
            {/* Title field  */}
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='teachOn'>Title</label>
              <input
                className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
                id='teachOn'
                type='text'
                disabled={teacherData?.rejected?.length > 0}
                {...register('teachOn', { required: true })}
              />
              {errors.teachOn && (
                <p className='text-red-500'>
                  {teacherData?.rejected?.length > 0
                    ? ''
                    : errors.teachOn.message
                    ? errors.teachOn.message
                    : 'This field is required'}
                </p>
              )}
            </div>
            {/* category field  */}
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='category'>Category (Choose at least 5)</label>
              <Controller
                disabled={teacherData?.rejected?.length > 0}
                control={control}
                name='category'
                defaultValue={[]}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={categoryOptions.map((category) => ({
                      value: category,
                      label: category,
                    }))}
                    className='w-full capitalize'
                  />
                )}
                rules={{
                  validate: (selectedOptions) =>
                    (selectedOptions && selectedOptions.length >= 5) ||
                    'Select at least 5 options.',
                }}
              />
              {errors.category && (
                <p className='text-red-500'>
                  {teacherData?.rejected?.length > 0
                    ? ''
                    : errors.category.message
                    ? errors.category.message
                    : 'This field is required'}
                </p>
              )}
            </div>
            {/* experience field  */}
            <div className='flex gap-1 flex-col justify-between items-start'>
              <label htmlFor='experience'>Experience</label>

              <select
                id='experience'
                disabled={teacherData?.rejected?.length > 0}
                defaultValue='' // Change defaultValue to ''
                {...register('experience', { required: true })}
                className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900 text-xl'
              >
                <option disabled value=''>
                  Who shot first?
                </option>
                <option value='beginner'>Beginner</option>
                <option value='experienced'>Experienced</option>
                <option value='some-idea'>Has Some Idea</option>
              </select>

              {errors.experience && (
                <p className='text-red-500'>
                  {teacherData?.rejected?.length > 0
                    ? ''
                    : errors.experience.message
                    ? errors.experience.message
                    : 'This field is required'}
                </p>
              )}
            </div>

            {/* Submit Button  */}
            <div>
              <Button
                disabled={
                  formLoading ||
                  teacherData?.pending?.length > 0 ||
                  teacherData?.approve?.length > 0
                }
                type='submit'
              >
                {teacherData?.pending?.length > 0
                  ? 'Under Review'
                  : teacherData?.rejected?.length > 0
                  ? 'Request to Another'
                  : 'Submit for review'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TechOnSkillup;
