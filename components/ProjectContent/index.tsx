import React from 'react'
import Image from 'next/image'

export const ProjectContent = ({
  focus,
  backend,
  images,
  setActiveImage,
}: {
  focus: string[]
  backend?: string[]
  images: string[]
  setActiveImage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const showModal = (idx: number) => {
    setActiveImage(idx)
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
    document.body.style.width = '100vw'
  }

  return (
    <div className='pt-12 pb-8 xl:w-7/12 xl:pl-12 xl:pt-0'>
      <h2 className='heading-text-thin-md mb-6'>My Project Focus</h2>
      <div className='mb-10'>
        <ul className='list-disc my-4'>
          {focus.map((point, idx) => (
            <li key={idx} className='text-xs tracking-wide leading-6 ml-6 '>
              {point}
            </li>
          ))}
          {backend && (
            <div className='pt-4'>
              <h4 className='my-4 uppercase font-bold'>Backend</h4>
              {backend.map((point, idx) => (
                <li key={idx} className='text-xs tracking-wide leading-6 ml-6 '>
                  {point}
                </li>
              ))}
            </div>
          )}
        </ul>
      </div>

      <h2 className='heading-text-thin-md mb-10'>Static Previews</h2>
      {images.map((image, idx) => (
        <div
          key={idx}
          className='mb-8 hover:cursor-pointer'
          onClick={(e) => {
            console.log(window)
            console.log(window.screen.width)
            // This will only run with the width of the window is above the value set in pixels
            if (window.screen.width > 1000) {
              showModal(idx)
            }
          }}
        >
          <Image src={image} width='635' height='400' />
        </div>
      ))}
    </div>
  )
}
