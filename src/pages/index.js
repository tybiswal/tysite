import * as React from 'react'
import Layout from "../components/layout"
// import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import ImageBox from '../components/imagebox'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the immensely useful Gatsby Tutorial.</p>
      <ImageBox>
        <p>This is a few-months-old calf.</p>
      </ImageBox>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
export default IndexPage