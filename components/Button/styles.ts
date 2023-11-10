import { VariantProps, tv } from 'tailwind-variants';

const styles = tv({
  base: 'text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
  variants: {
    variant: {
      dark: 'text-white bg-secondaryDark hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-secondaryDark dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
      secondary:
        'bg-secondary dark:bg-secondary text-primaryDark hover:bg-yellow-500 focus:ring-yellow-300 dark:hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-800',
    },
  },
});

export default styles;

export type ButtonVariants = VariantProps<typeof styles>;
