import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Step from "../components/step"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Step selected="1"/>
    <form>
      <h1>Nos conte sobre você!</h1>
      <p class="decorated-heading__description">
        Queremos te conhecer para podermos te atender melhor! E não se preocupe, todas as suas informações estão seguras ;)
      </p>

      <div class="col-medium-12 vertical-offset5">
        <div class="form-group">
          <label class="form-group__label">Nome</label>
          <input class="form-group__text-field" type="text" placeholder="Insira o nome aqui" />
        </div>
      </div>
    </form>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
