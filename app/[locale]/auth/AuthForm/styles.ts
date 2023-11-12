import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    wrapper: 'bg-primaryDark px-8 py-6  rounded-md border-secondaryDark border w-96',
    form: 'flex flex-col gap-10',
    tabsWrapper: 'text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mb-12',
    tab: 'inline-block w-full  text-gray-900  dark:text-white dark:hover:bg-gray-700 p-4',
  },
  variants: {
    first: {
      true: {
        tab: 'inline-block w-full p-4  bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg  dark:bg-gray-800 ',
      },
    },
    last: {
      true: {
        tab: 'inline-block w-full  p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 ',
      },
    },
    active: {
      true: {
        tab: 'dark:bg-primary bg-primary active dark:hover:bg-primary hover:bg-primary',
      },
    },
    loading: {
      true: {
        wrapper: 'after:animate-inputBorderAnimationInfinite relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary',
      },
    },
  },
});

export default styles;
