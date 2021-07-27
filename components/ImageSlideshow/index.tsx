import React from 'react'
import Image from 'next/image'
import { ArrowLeftSVG, ArrowRightSVG } from '../Icons'

export const ImageSlideshow = ({
  images,
  activeImage,
  setActiveImage,
}: {
  images: string[]
  activeImage: number
  setActiveImage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const fullImages = images.map((image) => image.replace(/tr:w-600,h-378/, 'tr:w-1270,h-800'))
  const buttonClasses = 'bg-white h-12 w-12 rounded-full flex justify-center items-center'

  const wrapFunction = (inc: boolean, currentIndex: number, length: number): number => {
    if (inc) {
      if (currentIndex + 1 > length) {
        return 0
      }
      return currentIndex + 1
    }
    if (currentIndex - 1 < 0) {
      return length
    }
    return currentIndex - 1
  }

  const closeModal = () => {
    const body = document.body
    const scrollY = body.style.top
    body.style.position = ''
    body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    setActiveImage(null)
  }

  return (
    <>
      <div
        id='overlay'
        className={
          'bg-black bg-opacity-50 flex justify-center items-center h-screen w-screen z-50 fixed top-0'
        }
        onClick={(e) => {
          console.log(e.target)
          const target = e.target as HTMLDivElement
          if (target.id === 'overlay') {
            closeModal()
          }
        }}
      >
        <div className='items-center flex'>
          <button
            className={buttonClasses + ' mr-6'}
            onClick={() => setActiveImage(wrapFunction(false, activeImage, images.length - 1))}
          >
            <ArrowLeftSVG></ArrowLeftSVG>
          </button>

          <Image src={fullImages[activeImage]} width='1270' height='800' />
          <button
            className={buttonClasses + ' ml-6'}
            onClick={() => setActiveImage(wrapFunction(true, activeImage, images.length - 1))}
          >
            <ArrowRightSVG></ArrowRightSVG>
          </button>
        </div>
      </div>
    </>
  )
}
