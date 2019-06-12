import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Step from "../components/step"

const ContactSection = ({classNames}) => {
  return (
    <section>
      <h2>Contact information</h2>
      <p>
        <label for="name">
          <span>Name: </span>
        </label>
        <input type="text" id="name" name="username"/>
      </p>
      <p>
        <label for="mail">
          <span>E-mail: </span>
        </label>
        <input type="email" id="mail" name="usermail"/>
      </p>
    </section>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Step selected="1"/>

    <form name="contact" method="POST" data-netlify="true">
      <h1>Simulation Form</h1>

      <ContactSection/>
    </form>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
