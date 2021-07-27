import React from 'react'
import SocialLinks from '../components/SocialLinks'
import ContactForm from '../components/ContactForm'
import { HeadComponent, Layout } from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <HeadComponent title='Contact Me'></HeadComponent>
      {/* Get in touch */}
      <section className='content-container section-border-y-grey py-8 xl:py-10 mt-2 md:mt-12 mb-8 xl:flex'>
        <h2 className='heading-text mb-6 xl:w-5/12'>Get in Touch</h2>
        <div className='xl:w-7/12'>
          <p className='normal-text mb-6'>
            I’d love to hear about what you’re working on and how I could help. I’m currently
            looking for a new role and am open to a wide range of opportunities. My preference would
            be to find a position in a company in the Bay Area. But I’m also happy to hear about
            opportunites that don’t fit that description. I’m a hard-working and positive person who
            will always approach each task with a sense of purpose and attention to detail. Please
            feel free to check out my Github profile below or get in touch with me via email or
            Linkedin.
          </p>
          <SocialLinks fillColor='#33323D'></SocialLinks>
        </div>
      </section>

      <ContactForm></ContactForm>
    </Layout>
  )
}
