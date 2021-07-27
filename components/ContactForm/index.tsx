import React, { ReactNode } from 'react'
import { Formik } from 'formik'

const ContactForm = () => {
  return (
    <section className='content-container mb-20 xl:flex xl:py-10'>
      <h2 className='heading-text mt-10 mb-6 xl:w-5/12 xl:mt-0'>Contact Me</h2>
      <a href='mailto:jwdesjardin@gmail.com'>
        <button className='secondary-button'>Send Email</button>
      </a>
    </section>
  )
}

export default ContactForm
