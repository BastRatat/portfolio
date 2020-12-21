// redirect form data to API, handle errors, create a validation form

// @ts-nocheck
import React, { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Formik, Field, Form, useField } from 'formik';

interface formDataProps {
  firstName: string,
  lastName: string,
  email: string,
  body: string
}

const MyTextArea = ({...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const formInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  body: ''
}

const ContactForm:React.FunctionComponent = () => {
  
  const [hasError, setHasError] = useState<boolean>(false)
  const [messageSent, setMessageSent] = useState<boolean>(false)

  const handleSubmit = async (formData:formDataProps) => {
    try {
      console.log(formData)
    } catch(error) {
      console.error(error)
    }
  }
  
  return (
    <Container className="d-flex justify-content-center m-2">
      {hasError && (
        <Alert variant='danger' className="alert text-center">Error</Alert>
      )}
      {messageSent && (
        <Alert variant='success' className="alert text-center">Message envoyé</Alert>
      )}
      <Formik
        initialValues={formInitialValues}
        onSubmit={
          (values, actions) => {
            const dataToAPI = {
              firstName: `${values.firstName}`,
              lastName: `${values.lastName}`,
              email: `${values.email}`,
              body: `${values.body}`,
            }
            handleSubmit(dataToAPI)
            actions.setSubmitting(false)
            actions.resetForm()
          }
        }
      >
        {({errors, touched, handleSubmit, handleChange, handleBlur, values }) => (
          <Form>
            <div className="fields m-2">
              <Field
                type="text"
                className="input-fields"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                name="firstName"
                placeholder="Prénom"
              />
            </div>
            <div className="fields m-2">
              <Field
                type="text"
                className="input-fields"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                name="lastName"
                placeholder="Nom de famille"
              />              
            </div>
            <div className="fields m-2">
              <Field
                type="email"
                className="input-fields"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                placeholder="Email"
              />              
            </div>
            <div className="fields m-2">
              <MyTextArea
                onChange={handleChange}
                className="text-area"
                onBlur={handleBlur}
                value={values.body}
                name="body"
                rows="3"
                placeholder="Votre message"
              />              
            </div>
            <div className="m-3 d-flex justify-content-center">
              <Button type="submit" className="tech-btn">Envoyer</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default ContactForm