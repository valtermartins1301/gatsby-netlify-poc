import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Step from "../components/step"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Step selected="1"/>

    <h1>Login</h1>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage