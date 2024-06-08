import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className="page-section bg-secondary" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 text-white">Contact Me</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-3">
                <input className="form-control" id="name" {...register('name', { required: true })} placeholder="Enter your name..." />
                <label htmlFor="name">Full name</label>
                {errors.name && <div className="invalid-feedback">A name is required.</div>}
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} placeholder="name@example.com" />
                <label htmlFor="email">Email address</label>
                {errors.email && <div className="invalid-feedback">An email is required and must be valid.</div>}
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" {...register('phone', { required: false })} placeholder="(123) 456-7890" />
                <label htmlFor="phone">Phone number</label>
                {errors.phone && <div className="invalid-feedback">A phone number is required.</div>}
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" {...register('message', { required: true })} placeholder="Enter your message here..." style={{ height: "10rem" }}></textarea>
                <label htmlFor="message">Message</label>
                {errors.message && <div className="invalid-feedback">A message is required.</div>}
              </div>
              <br />
              <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
