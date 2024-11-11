import * as Yup from 'yup';
import { Formik } from 'formik';
import { BaseForm, FormField, SubmitButton } from '../ui/Forms';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const FeedbackSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email('Invalid email address')
    .matches(/^\S+@\S+\.\S+$/, 'Invalid email address')
    .required('Required'),
  userPassword: Yup.string().min(8, 'Too Short!').required('Required'),
});

const intialValues = {
  userEmail: '',
  userPassword: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
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
          <FormField type="email" name="userEmail" label="Email" />
          <FormField type="password" name="userPassword" label="Password" />
          <SubmitButton disabled={Object.keys(errors).length > 0}>
            Log In
          </SubmitButton>
        </BaseForm>
      )}
    </Formik>
  );
};

export default LoginForm;
