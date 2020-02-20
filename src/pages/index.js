import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col bg-image d-md-block"></div>
      <div className="col col-md-7 content text-center text-md-left">
        <div className="row" 
          style={{
          height: `100vh`,
          }}>
          <div className="col align-self-center">
            <h1>Hi people.</h1>
            <h2>This site is under construction.</h2>
            <h3>reetta.lipponen@hotmail.com</h3>
          </div>
        </div>  
      </div>
    </div>


  </Layout>
)

export default IndexPage
