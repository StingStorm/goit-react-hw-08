import * as Yup from 'yup';
import clsx from 'clsx';
import { useEffect, useId, useState } from 'react';
import {
  Navigate,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentContact } from '../../redux/contacts/selectors';

import css from './ContactInfo.module.css';
import Avatar from '../ui/Avatar/Avatar';
import { Button, IconButton } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CloseIcon from '@mui/icons-material/Close';
import { updateContact } from '../../redux/contacts/operations';

const FeedbackSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(/^\+?[0-9]+(-[0-9]+)*$/, 'Please enter a valid phone number')
    .min(7, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const ContactInfo = () => {
  const firstNameId = useId();
  const lastNameId = useId();
  const phoneNumberId = useId();

  const { contactId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useSelector(selectCurrentContact);
  const openModal = useOutletContext();

  useEffect(() => {
    setIsEditing(false);
  }, [contactId]);

  if (!contact) {
    return <Navigate to="/contacts" replace />;
  }

  const nameInitials = contact?.name.match(/[A-Z]/g);
  const [firstName, ...lastName] = contact.name.split(' ');

  const handleSubmit = values => {
    dispatch(
      updateContact({
        contactId,
        contactBody: {
          name: values.firstName + ' ' + values.lastName,
          number: values.phoneNumber,
        },
      })
    );

    setIsEditing(false);
  };

  const handleClose = () => {
    navigate('/contacts');
  };

  return (
    <>
      {!isEditing && (
        <Button
          variant="contained"
          color="border"
          size="small"
          sx={{
            textTransform: 'capitalize',
            position: 'absolute',
            top: '16px',
            right: '16px',
            letterSpacing: '0.06em',
            minWidth: '50px',
            boxShadow: 'none',
          }}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      )}
      {isEditing ? (
        <Button
          variant="contained"
          color="border"
          size="small"
          sx={{
            textTransform: 'capitalize',
            position: 'absolute',
            left: '62px',
            zIndex: '10',
            letterSpacing: '0.06em',
            minWidth: '50px',
            boxShadow: 'none',
          }}
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </Button>
      ) : (
        <IconButton
          title="Close"
          size="small"
          sx={{
            position: 'absolute',
            left: '17px',
            zIndex: '10',
          }}
          onClick={handleClose}
        >
          <CloseIcon color="primary" fontSize="1rem" />
        </IconButton>
      )}
      <Avatar id={contact.id} width={'75px'} height={'75px'}>
        {nameInitials ? nameInitials.join('') : contact.name[0].toUpperCase()}
      </Avatar>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: firstName,
          lastName: lastName.join(' '),
          phoneNumber: contact.number,
        }}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.editForm}>
            {isEditing && (
              <Button
                type="submit"
                variant="contained"
                color="border"
                size="small"
                sx={{
                  textTransform: 'capitalize',
                  position: 'absolute',
                  top: '-75px',
                  right: '0',
                  minWidth: '50px',
                  width: '50px',
                  boxShadow: 'none',
                }}
              >
                Done
              </Button>
            )}
            <div>
              <label htmlFor={firstNameId}>First Name</label>
              {isEditing ? (
                <div className={css.inputBox}>
                  <Field
                    className={clsx(
                      css.fieldInput,
                      errors.firstName && touched.firstName
                        ? css.errorInput
                        : ''
                    )}
                    type="text"
                    name="firstName"
                    id={firstNameId}
                    autoFocus
                  />
                  <EditNoteIcon />
                </div>
              ) : (
                <span className={css.contactInfoDisplayText}>{firstName}</span>
              )}
              <ErrorMessage
                className={css.errorMsg}
                name="firstName"
                component="span"
              />
            </div>
            <div>
              <label htmlFor={lastNameId}>Last Name</label>
              {isEditing ? (
                <div className={css.inputBox}>
                  <Field
                    className={clsx(
                      css.fieldInput,
                      errors.lastName && touched.lastName ? css.errorInput : ''
                    )}
                    type="text"
                    name="lastName"
                    id={lastNameId}
                  />
                  <EditNoteIcon />
                </div>
              ) : (
                <span className={css.contactInfoDisplayText}>
                  {lastName.length > 0 ? lastName.join(' ') : '...'}
                </span>
              )}
            </div>
            <div>
              <label htmlFor={phoneNumberId}>Phone Number</label>
              {isEditing ? (
                <div className={css.inputBox}>
                  <Field
                    className={clsx(
                      css.fieldInput,
                      errors.phoneNumber && touched.phoneNumber
                        ? css.errorInput
                        : ''
                    )}
                    type="text"
                    name="phoneNumber"
                    id={phoneNumberId}
                  />
                  <EditNoteIcon />
                </div>
              ) : (
                <span className={css.contactInfoDisplayText}>
                  {contact.number}
                </span>
              )}
              <ErrorMessage
                className={css.errorMsg}
                name="phoneNumber"
                component="span"
              />
            </div>
          </Form>
        )}
      </Formik>
      {isEditing && (
        <Button
          variant="contained"
          color="accent"
          sx={{ borderWidth: '2px', display: 'flex', margin: '0 auto' }}
          onClick={() => openModal(contact)}
        >
          Delete Contact
        </Button>
      )}
    </>
  );
};

export default ContactInfo;
