import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(7, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const intialValues = {
  contactName: '',
  phoneNumber: '',
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const emailFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.contactName,
      number: values.phoneNumber,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={intialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}></label>
          <Field type="text" name="contactName" id={nameFieldId} />
          <ErrorMessage name="contactName" component="span" />
        </div>
        <div>
          <label htmlFor={emailFieldId}></label>
          <Field type="text" name="phoneNumber" id={emailFieldId} />
          <ErrorMessage name="phoneNumber" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
