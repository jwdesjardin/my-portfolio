import React from 'react'
import { HeadComponent, Layout } from '../components/Layout'
import { Interested } from '../components/Interested'
import { DownArrowsSVG } from '../components/Icons'
import Link from 'next/link'

export default function Home() {
  const scrollToAbout = () => {
    window.scrollTo(0, 800)
  }

  return (
    <Layout>
      <HeadComponent title='Home' />

      {/* Hero */}
      <section className='content-container relative mb-24'>
        <div className='mb-6 mt-2 xl:mt-6 flex-center'>
          <img
            className='md:hidden w-fill'
            src='https://ik.imagekit.io/jwdesjardin/tr:w-311,h-271/portfolio_hero.JPG'
            width='311'
            height='271'
          />
          <img
            className='hidden md:block xl:hidden'
            src='https://ik.imagekit.io/jwdesjardin/tr:w-688,h-600/portfolio_hero.JPG'
            width='688'
            height='600'
          />
          <img
            className='hidden xl:block'
            src='https://ik.imagekit.io/jwdesjardin/tr:w-1110,h-600/portfolio_hero.JPG'
            width='1110'
            height='600'
          />
        </div>

        <div className='block relative md:hero-psuedo'>
          <h1 className='heading-text md:max-w-md md:py-12 leading-10 mb-8 '>
            I’m Joey Desjardin
            <br></br>
            and I love to build
            <br></br>
            high quality web applications.
          </h1>
          <button
            className='secondary-button text-myCyan-500 hover:text-myGrey-100'
            onClick={scrollToAbout}
          >
            <div className='flex justify-between items-center w-full'>
              <div className='mr-10 '>
                <DownArrowsSVG></DownArrowsSVG>
              </div>
              <span className='text-myGrey-100'>About Me</span>
            </div>
          </button>
        </div>
      </section>

      {/* About me */}
      <section className='content-container md:flex '>
        <div className='md:w-5/12 xl:w-1/2 flex-shrink-0 flex-center  '>
          <img
            className='md:hidden w-fill'
            src='https://ik.imagekit.io/jwdesjardin/tr:w-311/profile.jpg'
            width='311'
            height='346'
          />
          <img
            className='hidden md:block xl:hidden'
            src='https://ik.imagekit.io/jwdesjardin/tr:w-300,h-550/profile.jpg'
            width='300'
            height='550'
          />
          <img
            className='hidden xl:block'
            src='https://ik.imagekit.io/jwdesjardin/tr:w-600/profile.jpg'
            width='540'
            height='600'
          />
        </div>
        <div className='section-border-y-grey pt-8 pb-12 mt-8 md:w-7/12 xl:w-1/2 md:ml-16 xl:mx-auto xl:max-w-sm xl:py-12 md:mt-0'>
          <h2 className='heading-text mb-6'>About Me</h2>
          <p className='normal-text mb-6'>
            I’m a junior front-end developer looking for a new role in an exciting company. When
            building a project, I tend to use React, Typescript, Next.js, and Tailwind CSS, but I
            can adapt to whatever tools are required. I focus on building websites that are
            accessible and performant and using best practices from the beginning. I also challenge
            myself to continue to learn new technologies and add to my coding toolkit. I’m based in
            the Bay Area and can come into work on-site and I’m also happy working remotely and have
            experience in remote teams. I have strong leadership and communication skills from my
            previous work experience. I am a self-starter and resourceful learner. I am eager to
            learn and grow as a developer. I’d love you to check out my work.
          </p>
          <Link href='/portfolio'>
            <button className='primary-button'>Go To Portfolio</button>
          </Link>
        </div>
      </section>

      <Interested></Interested>
    </Layout>
  )
}
