import Link from 'next/link'
import React from 'react'
import { GithubSVG, LinkedinSVG, TwitterSVG } from '../Icons'

const SocialLinks = ({ fillColor = '#33323D' }: { fillColor?: string }): React.ReactElement => {
  return (
    <div className='flex items-center'>
      <Link href='https://github.com/jwdesjardin'>
        <a target='_blank'>
          <GithubSVG
            className='mr-4 cursor-pointer hover:transform hover:scale-110 '
            fillColor={fillColor}
          ></GithubSVG>
        </a>
      </Link>
      <Link passHref href='https://www.linkedin.com/in/joey-desjardin/'>
        <a target='_blank'>
          <LinkedinSVG
            className='cursor-pointer hover:transform hover:scale-105'
            fillColor={fillColor}
          ></LinkedinSVG>
        </a>
      </Link>
    </div>
  )
}

export default SocialLinks
