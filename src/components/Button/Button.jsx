/* eslint-disable react/prop-types */
const Button = ({ children, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-sm
          hover:opacity-80
          transition
          px-4
          w-full
          ${outline ? 'bg-white' : 'bg-[#03b97c]'}
          ${outline ? 'border-black' : 'border-[#03b97c]'}
          ${outline ? 'text-black' : 'text-white'}
          ${small ? 'text-sm' : 'text-md'}
          ${small ? 'py-1' : 'py-3'}
          ${small ? 'font-light' : 'font-semibold'}
          ${small ? 'border-[1px]' : 'border-2'}
        `}
    >
      {Icon && (
        <Icon
          size={24}
          className='
              absolute
              left-4
              top-3
            '
        />
      )}
      {children}
    </button>
  );
};

export default Button;
