import Link from 'next/link'
import React from 'react'

export const ProjectDetails = ({
  title,
  description,
  stack,
  codeURL,
  demoURL,
}: {
  title: string
  description: string
  stack: string[]
  codeURL: string
  demoURL: string
}) => {
  const stringConcatenator = (array: string[]) => {
    return array.reduce((a, c) => (a += c + ' / '), '').slice(0, -2)
  }

  return (
    <div className='xl:w-5/12 '>
      <div className='section-border-y-grey py-6 xl:py-12 xl:mr-auto xl:max-w-sm'>
        <h2 className='heading-text inline-block xl:mb-6 leading-9 mb-4 '>{title}</h2>
        <div className='md:float-right md:w-1/2 md:px-6 xl:float-none xl:pl-0 xl:w-full py-6'>
          <h4 className='heading-text-thin-md'>Description</h4>
          <p className='normal-text  my-4 '>{description}</p>
        </div>
        <div className='py-6  '>
          <h4 className='heading-text-thin-md'>Tech-stack / Tools</h4>
          <ul className='flex space-x-4 flex-wrap justify-center my-4'>
            {stack.map((tech) => (
              <li key={tech} className='accent-text text-xs uppercase tracking-wide leading-6'>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <Link href={demoURL}>
          <button className='primary-button'>View Demo</button>
        </Link>
        <Link href={codeURL}>
          <button className='secondary-button'>View Code</button>
        </Link>
      </div>
    </div>
  )
}
