import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the immensely useful Gatsby Tutorial.</p>
      <StaticImage 
        alt="Curious Little Calf" 
        src="../images/babymoo.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
export default IndexPage