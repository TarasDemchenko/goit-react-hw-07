import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { addContactThaunk } from '../../redux/contactsOps';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactThaunk(values));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor="name">
              <span className={css.form_name}> Name</span>
            </label>
            <div className={css.form_error}>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className={css.form_input}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.form_error_msg}
              />
            </div>
          </div>

          <div>
            <label htmlFor="number">
              <span className={css.form_name}>Number</span>
            </label>
            <Field
              id="number"
              name="number"
              placeholder="Number"
              className={css.form_input}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.form_error_msg}
            />
          </div>

          <button type="submit" className={css.form_btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
