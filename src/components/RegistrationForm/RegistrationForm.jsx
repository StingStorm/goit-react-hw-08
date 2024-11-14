import * as Yup from 'yup';
import { Formik } from 'formik';
import { BaseForm, FormField, SubmitButton } from '../ui/Forms';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const FeedbackSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  userEmail: Yup.string()
    .email('Invalid email address')
    .matches(/^\S+@\S+\.\S+$/, 'Invalid email address')
    .required('Required'),
  userPassword: Yup.string()
    .min(8, 'Too Short!')
    .matches(/[A-Z]/, 'At least one capital letter is required')
    .matches(/[0-9]/, 'At least one digit is required'),
});

const intialValues = {
  userName: '',
  userEmail: '',
  userPassword: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.userName,
        email: values.userEmail,
        password: values.userPassword,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={intialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <BaseForm errors={errors} touched={touched}>
          <FormField type="text" name="userName" label="Name" />
          <FormField type="email" name="userEmail" label="Email" />
          <FormField type="password" name="userPassword" label="Password" />
          <SubmitButton disabled={Object.keys(errors).length > 0}>
            Sign Up
          </SubmitButton>
        </BaseForm>
      )}
    </Formik>
  );
};

export default RegistrationForm;
