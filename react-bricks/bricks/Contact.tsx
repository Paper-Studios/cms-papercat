import React from 'react';
import { types, Image } from 'react-bricks/frontend';
import emailjs from '@emailjs/browser';
import ContactForm from '../components/ContactForm';
import Button from './layout/Button';

import styles from '../../css/Contact.module.css';

function submitForm(details) {
  const { user_name, user_email, message } = details;
  const templateParams = {
    user_name,
    user_email,
    message
  }
  emailjs.send('service', 'template', templateParams, 'somekey')
    .then(() => {
      alert('Thanks! We\'ll be in touch.');
    })
    .catch((err) => {
      alert('Something went wrong');
      console.error('Contact Us submission failed: ', err);
    })
}

const Contact: types.Brick = () => {
  return (
    <div className={styles.contactContent}>
      <Image
        propName='contactImg'
        alt='Contact Us'
        imageClassName={styles.contactImg}
        aspectRatio={1.34}
      />
      <div className={styles.contactFormContainer}>
        <ContactForm submitForm={submitForm} />
        <Button icon="send" text="Send" form={true} buttonType="submit" type="submit" size="normal"/>
      </div>
    </div>
  )
};

Contact.schema = {
  name: 'contact',
  label: 'Contact Page',
};

export default Contact;