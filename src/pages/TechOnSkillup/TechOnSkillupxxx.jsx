import Container from '../../components/Shared/Container';
import SectionHeader from '../../components/Shared/SectionHeader/SectionHeader';
import { Helmet } from 'react-helmet-async';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import Button from '../../components/Button/Button';

const TechOnSkillup = () => {
  const categoryOptions = [
    'Web Development',
    'Mobile App Development',
    'Data Science',
    // ... (other categories)
  ];

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    reset();
  };

  return (
    <div className='min-h-[calc(100vh-167px)] my-6'>
      <Helmet>
        <title>Tech On SkillUP || SkillUP</title>
      </Helmet>
      <Container>
        <SectionHeader heading={'Apply as'} headingSpan={'Teacher'} />
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            {/* Category field */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='category' className='text-lg font-semibold'>
                Category (Choose at least 2)
              </label>
              <Controller
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
                    className='w-full'
                  />
                )}
                rules={{
                  validate: (selectedOptions) =>
                    (selectedOptions && selectedOptions.length >= 2) ||
                    'Select at least 2 options.',
                }}
              />
              {errors.category && (
                <p className='text-red-500'>
                  {errors.category.message || 'This field is required'}
                </p>
              )}
            </div>

            {/* Submit button */}
            <div>
              <Button type='submit'>Submit for Review</Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TechOnSkillup;
