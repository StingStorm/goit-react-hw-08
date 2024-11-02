import { ErrorMessage, Field } from 'formik';
import { useId } from 'react';
import css from './FormField.module.css';

const FormField = ({ type, name, label, errors, touched }) => {
  const fieldId = useId();
  return (
    <div>
      <label htmlFor={fieldId}>{label}</label>
      <Field
        className={
          errors.phoneNumber && touched.phoneNumber ? css.errorInput : ''
        }
        type={type}
        name={name}
        id={fieldId}
      />
      <ErrorMessage className={css.errorMsg} name={name} component="span" />
    </div>
  );
};

export default FormField;
