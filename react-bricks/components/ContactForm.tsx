import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from '../../css/Contact.module.css';

type FormErrors = {
  user_name?: string;
  user_email?: string;
  message?: string;
}

type FormDetails = {
  user_name: string;
  user_email: string;
  message: string;
}

interface ContactFormProps {
  submitForm: (details: FormDetails) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ submitForm }) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [details, setDetails] = useState<FormDetails>({
    user_name: '',
    user_email: '',
    message: '',
  });

  function validateForm() {
    const formErrors: FormErrors = {};
    let isFormValid = true;

    if(!details.user_name) {
      formErrors.user_name = 'your name';
      isFormValid = false;
    }
    if(!details.user_email) {
      formErrors.user_email = 'your email';
      isFormValid = false;
    }
    if(!details.message) {
      formErrors.message = 'a message for why you are reaching out';
      isFormValid = false;
    }

    setErrors(formErrors);
    return isFormValid;
  }

  useEffect(() => {
    if(Object.keys(errors).length > 0) {
      alert(`Oops! Please enter more information to submit the form: ${Object.values(errors).join(', ')}.`)
    }
  }, [errors]);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setDetails((prev) => (
      {...prev, [name]: value}
    ));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if(!validateForm()) {
      return;
    } else {
      submitForm(details);
    }
  }

  return (
    <form id="contact-form" className={styles.contactForm} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" onChange={handleChange}/>
      {errors.user_name && <span style={{ color: '#F5647F', fontSize: '0.75rem', alignSelf: 'center' }}>Please enter your name</span>}

      <label>Email</label>
      <input type="email" name="user_email" onChange={handleChange}/>
      {errors.user_email && <span style={{ color: '#F5647F', fontSize: '0.75rem', alignSelf: 'center' }}>Please enter a valid email</span>}

      <label>Message</label>
      <textarea name="message" onChange={handleChange}/>
      {errors.message && <span style={{ color: '#F5647F', fontSize: '0.75rem', alignSelf: 'center' }}>Please enter a message</span>}
    </form>
  );
}

export default ContactForm;