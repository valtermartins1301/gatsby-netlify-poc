import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LeadForm } from "lead-form"

const IndexPage = () => (
  <div>
    <Helmet>
    </Helmet>
    <Layout>
      <SEO title="Home" />

      <LeadForm/>
    </Layout>
  </div>
)

export default IndexPage
