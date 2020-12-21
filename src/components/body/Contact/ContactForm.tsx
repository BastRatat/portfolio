// redirect form data to API, handle errors, create a validation form

// @ts-nocheck
import React, { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Formik, Field, Form, useField } from 'formik';
import emailjs from 'emailjs-com'

const ContactForm:React.FunctionComponent = () => {
  
  const [hasError, setHasError] = useState<boolean>(false)
  const [messageSent, setMessageSent] = useState<boolean>(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ky0zz0b', 'template_ebua76n', e.target, 'user_rmnvJll19tNuCfacJBA9A')
      .then((result) => {
        setMessageSent(true)
      }, (error) => {
        setHasError(true)
      });
    e.target.reset()
  }

  
  return (
    <Container className="d-flex justify-content-center my-3">
      <form onSubmit={sendEmail}>
        {hasError && (
          <div>
            <Alert variant='danger' className="alert text-center">Service indisponible</Alert>
          </div>
        )}
        {messageSent && (
          <div>
            <Alert variant='success' className="alert text-center">Message envoyé</Alert>
          </div>
        )}
        <div className="fields m-2">
          <input type="text" name="name" className="input-fields" />
        </div>
        <div className="fields m-2">
          <input type="email" name="email" className="input-fields" />
        </div>
        <div className="fields m-2">
          <textarea name="body" className="text-area"/>
        </div>
        <Button type="submit" className="tech-btn ml-3 mb-3">Envoyer</Button>
      </form>
    </Container>
  )
}

export default ContactForm