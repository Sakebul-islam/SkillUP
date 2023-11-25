import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 w-2/4'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col'>
          <div className='flex gap-1 flex-col justify-between items-start'>
            <label htmlFor='email'>Email</label>
            <input
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
              id='email'
              {...register('email', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className='flex gap-1 flex-col justify-between items-start'>
            <label htmlFor='email'>Password</label>
            <input
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#03b97c] bg-gray-200 text-gray-900'
              id='email'
              {...register('password', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <div>
            <Button type='submit'>Sign In</Button>
          </div>
        </form>
        <div className='divider'></div>

        <div className='flex justify-center items-center space-x-2 border p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle />
          <p>Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
