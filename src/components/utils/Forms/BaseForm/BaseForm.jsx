import css from './BaseForm.module.css';
import { Form } from 'formik';
import { Children, cloneElement } from 'react';

const BaseForm = ({ children, className = '', errors, touched }) => {
  return (
    <Form className={`${css.baseForm} ${className}`}>
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
