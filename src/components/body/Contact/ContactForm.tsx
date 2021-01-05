// redirect form data to API, handle errors, create a validation form

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com'

const ContactForm:React.FunctionComponent = () => {
  
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [messageSent, setMessageSent] = useState<boolean>(false)

  const checkFields = () => {
    if (name === '' || email === '' || message === '') {
      return true
    } else {
      return false
    }
  }

  const handleChange = (event, state) => {
    if (state === 'name') setName(event.target.value)
    if (state === 'email') setEmail(event.target.value)
    if (state === 'message') setMessage(event.target.value)
  }

  const sendEmail = (event) => {
    emailjs.sendForm('service_ky0zz0b', 'template_ebua76n', event.target, 'user_rmnvJll19tNuCfacJBA9A')
      .then((result) => {
        setMessageSent(true)
      }, (error) => {
        setHasError(true)
      });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || email === '' || message === '') setIsEmpty(true)
    sendEmail(event)    
    event.target.reset();
  }

  return (
    <Container className="d-flex justify-content-center my-3">
      <form onSubmit={handleSubmit}>
        {hasError && (
          <div className="d-flex justify-content-center">
            <Alert variant='danger' className="alert text-center">Service indisponible</Alert>
          </div>
        )}
        {messageSent && (
          <div className="d-flex justify-content-center">
            <Alert variant='success' className="alert text-center">Message envoyé</Alert>
          </div>
        )}
        {isEmpty && (
          <div className="d-flex justify-content-center">
            <Alert variant='danger' className="alert text-center">Merci de remplir les champs</Alert>
          </div>          
        )}
        <div className="fields m-2">
          <input type="text" name="name" className="input-fields" placeholder="Nom" onChange={(event) => handleChange(event, 'name')} value={name} />
        </div>

        <div className="fields m-2">
          <input type="email" name="email" className="input-fields" placeholder="email" onChange={(event) => handleChange(event, 'email')} value={email}/>
        </div>
        <div className="fields m-2">
          <textarea name="body" className="text-area" placeholder="Votre message" onChange={(event) => handleChange(event, 'message')} value={message} />
        </div>
        <button type="submit" className="tech-btn ml-3 mb-3" disabled={(checkFields()) ? true : false}>Envoyer</button>
      </form>
    </Container>
  )
}

export default ContactForm