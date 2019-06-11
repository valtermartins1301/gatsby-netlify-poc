import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Step from "../components/step"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Step selected="1"/>
    <form name="contact" netlify>
      <h1>Nos conte sobre você!</h1>
      <p>
        Queremos te conhecer para podermos te atender melhor! E não se preocupe, todas as suas informações estão seguras ;)
      </p>

      <p>
        <label> Nome:
              <input type="text" name="name" placeholder="Insira o nome aqui" />
        </label>
      </p>
      <p>
        <label> Email:
              <input type="email" name="email" placeholder="Insira seu email aqui" />
        </label>
      </p>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
