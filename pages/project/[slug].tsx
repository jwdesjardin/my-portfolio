import React from 'react'

import { ProjectHero } from '../../components/ProjectHero'
import { ProjectDetails } from '../../components/ProjectDetails'
import { ProjectContent } from '../../components/ProjectContent'
import { Interested } from '../../components/Interested'
import { Navigation } from '../../components/Navigation'
import { HeadComponent, Layout } from '../../components/Layout'

import { Projects } from '../../data'
import { InferGetStaticPropsType } from 'next'
import { ImageSlideshow } from '../../components/ImageSlideshow'

export async function getStaticPaths() {
  const paths = Projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = Projects.find((project) => project.slug === params.slug)
  const index = Projects.findIndex((project) => project.slug === params.slug)
  const total = Projects.length - 1

  const previousIdx = index - 1 > -1 ? index - 1 : total
  const nextIdx = index + 1 > total ? 0 : index + 1
  console.log(previousIdx, nextIdx)
  return {
    props: {
      data,
      previous: Projects[previousIdx] || null,
      next: Projects[nextIdx] || null,
    },
  }
}

export default function Project({
  data,
  previous,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(previous, next)

  const [activeImage, setActiveImage] = React.useState<number | null>(null)
  console.log(activeImage)
  return (
    <Layout>
      <HeadComponent title={data.title} />

      {activeImage !== null && (
        <ImageSlideshow
          images={data.images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}

      <ProjectHero imgURL={data.heroImage}></ProjectHero>
      <section className='content-container xl:flex xl:items-start'>
        <ProjectDetails
          title={data.title}
          description={data.description}
          stack={data.stack}
          codeURL={data.code_url}
          demoURL={data.demo_url}
        ></ProjectDetails>
        <ProjectContent
          images={data.images}
          focus={data.focus}
          backend={data?.backend}
          setActiveImage={setActiveImage}
        ></ProjectContent>
      </section>
      <Navigation previous={previous} next={next}></Navigation>
      <Interested></Interested>
    </Layout>
  )
}
