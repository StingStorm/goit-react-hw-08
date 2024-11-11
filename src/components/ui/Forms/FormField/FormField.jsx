import { ErrorMessage, Field } from 'formik';
import { useId } from 'react';
import css from './FormField.module.css';
import clsx from 'clsx';

const FormField = ({ type, name, label, errors, touched }) => {
  const fieldId = useId();
  return (
    <div className={css.fieldBox}>
      <label htmlFor={fieldId}>{label}</label>
      <Field
        className={clsx(
          css.fieldInput,
          errors[name] && touched[name] ? css.errorInput : ''
        )}
        type={type}
        name={name}
        id={fieldId}
      />
      <ErrorMessage className={css.errorMsg} name={name} component="span" />
    </div>
  );
};

export default FormField;
