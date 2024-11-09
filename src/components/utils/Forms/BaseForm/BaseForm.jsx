import css from './BaseForm.module.css';
import { Form } from 'formik';
import { Children, cloneElement } from 'react';

const BaseForm = ({
  children,
  className = '',
  errors,
  touched,
  width = null,
  height = null,
  minHeight = null,
}) => {
  return (
    <Form
      className={`${css.baseForm} ${className}`}
      style={{
        width: `${width}`,
        height: `${height}`,
        minHeight: `${minHeight}`,
      }}
    >
      {Children.map(children, child =>
        cloneElement(child, {
          errors,
          touched,
        })
      )}
    </Form>
  );
};

export default BaseForm;
