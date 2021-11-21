import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import styles from '../../styles/Contact.module.scss'

// const messageSent = () =>
//   toast.success(`Thanks for your message! I'll answer soon`, {
//     position: 'bottom-center',
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     progress: undefined,
//   });

// const messageFailed = () =>
//   toast.error(`Please fill all the fields`, {
//     position: 'bottom-center',
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     progress: undefined,
   
//   });

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string(),
        // .max(15, 'Must be 15 characters or less')
        // .required(),
        email: Yup.string().email('Invalid email address'),
        // .required()
        message: Yup.string(),
        // .required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('sent', JSON.stringify(values, null, 2));
        // axios
        //   .post('/api/mail', values)
        //   .then(function (response) {
        //     console.log(response);
        //     messageSent();
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     const { name, email, message } = values;
        //     if (name || email || message === '') {
        //       return messageFailed();
        //     }
        //   });
        setSubmitting(false);
      }}
    >
      <div className={styles.container} id='contact'>
        <Form className={styles.form}>
          <h2>Entre em Contato!</h2>

          <label htmlFor='name'>Nome</label>
          <Field name='name' type='text' />
          <ErrorMessage name='name' />

          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' />

          <label htmlFor='message'>Mensagem</label>
          <Field name='message' component='textarea' rows='10' />
          <ErrorMessage name='message' />

          <div className={styles.mobilewhats}>
            {/* <a href='https://wa.me/telnumber' target='_blank' rel="noreferrer">
            </a> */}

            <button type='submit'>Enviar</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};


export default Contact

