import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    wrapper:
      'w-full m-1 relative focus-within:after:animate-inputBorderAnimation  focus-within:after:absolute focus-within:after:bottom-0 focus-within:after:left-0 focus-within:after:w-full focus-within:after:h-[1px] focus-within:after:bg-white',
    labelStyles:
      'absolute left-0 ml-1 -translate-y-3 px-1 text-sm duration-200 ease-linear peer-placeholder-shown:translate-y-6 peer-placeholder-shown:text-base peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm',
    input:
      'p-4 border-b text-white bg-transparent outline-none transition-all duration-500 peer w-full placeholder:text-transparent placeholder-shown:border-gray-600  focus:placeholder-gray-600',
    errorLabel: 'absolute top-16 w-full left-0 text-xs text-danger',
  },
  variants: {
    error: {
      true: {
        input: 'border-b-transparent placeholder-shown:border-b-transparent',
        wrapper: 'border-b border-b-danger focus-within:after:hidden',
      },
    },
  },
});

export default styles;
