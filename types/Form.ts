import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from 'react-hook-form';

export type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl>;
export type FormRegister = UseFormRegister<FieldValues>;
