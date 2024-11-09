import * as Yup from 'yup';
import { Formik } from 'formik';
import { BaseForm, FormField, SubmitButton } from '../utils/Forms';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(/^\+?[0-9]+(-[0-9]+)*$/, 'Please enter a valid phone number')
    .min(7, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  contactName: '',
  phoneNumber: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.phoneNumber,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <BaseForm errors={errors} touched={touched} minHeight="95%">
          <FormField type="text" name="contactName" label="Name" />
          <FormField type="tel" name="phoneNumber" label="Phone Number" />
          <SubmitButton disabled={Object.keys(errors).length > 0}>
            Add Contact
          </SubmitButton>
        </BaseForm>
      )}
    </Formik>
  );
};

export default ContactForm;
