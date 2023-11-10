import { useTranslations } from 'next-intl';

function useValidations() {
  const t = useTranslations('Validations');

  const requiredMessage = (name: string) => t('required', { name });
  const emailMessage = () => t('email');

  return {
    requiredMessage,
    emailMessage,
  };
}
export default useValidations;
