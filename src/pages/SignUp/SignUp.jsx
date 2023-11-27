import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { imageUpload } from '../../api/imageUploder';
import toast from 'react-hot-toast';
import { getToken } from '../../api/auth';
import { useMutation } from '@tanstack/react-query';
import axiosSecure from '../../api/axiosFunc';

const SignUp = () => {
  const { createUser, updateUserProfile, loading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationKey: ['users'],
    mutationFn: (bookingData) => {
      return axiosSecure.post('/users', bookingData);
    },
  });

  const onSubmit = async (data) => {
    try {
      const imageData = await imageUpload(data?.picture[0]);
      const result = await createUser(data?.email, data?.password);
      console.log('[Result]', result);
      await updateUserProfile(data?.name, imageData);
      console.log('[updateUserProfile]', result);
      await mutate({
        name: result?.user?.displayName,
        image: result?.user?.photoURL,
        email: result?.user?.email,
        role: 'student',
      });
      await getToken(result?.user?.email);
      toast.success('SignUp Success');
      navigate('/');
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
    } finally {
      reset();
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen overflow-x-hidden'>
      <div className='flex flex-col w-11/12 sm:max-w-md p-6 rounded-sm sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to SkillUp</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col'>
          {/* Input Name  */}
          <div className='flex gap-1 flex-col justify-between items-start'>
            <label htmlFor='name'>Name</label>
            <input
              className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
              id='name'
              type='text'
              placeholder='Enter Your Name Hare'
              {...register('name', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          {/* image input Field  */}
          <div>
            <label htmlFor='image' className='inline-block w-full mb-2 text-sm'>
              Select Image:
            </label>
            <input
              required=''
              type='file'
              id='image'
              {...register('picture', { required: true })}
              accept='image/*'
            />
          </div>
          {/* Email Field  */}
          <div className='flex gap-1 flex-col justify-between items-start'>
            <label htmlFor='email'>Email</label>
            <input
              className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
              id='email'
              type='email'
              placeholder='Enter Your Email Hare'
              {...register('email', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          {/* Input Password */}
          <div className='flex gap-1 flex-col justify-between items-start'>
            <label htmlFor='password'>Password</label>
            <input
              className='w-full px-3 py-2 border rounded-sm border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900 text-xl'
              id='password'
              type='password'
              placeholder='**********'
              {...register('password', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div>
            <Button disabled={loading} type='submit'>
              Sign Up
            </Button>
          </div>
        </form>
        <div className='divider'></div>
        <p className='px-3 sm:px-6 text-sm text-center text-gray-400'>
          Already have an account?&nbsp;
          <Link
            className='hover:underline hover:text-[#03b97c] text-gray-600'
            to='/signin'
          >
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
