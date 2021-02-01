/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <div className="container-fluid">
        <Header></Header>
        <main>{children}</main>
      </div>
      {/* <footer
          style={{
            position: "absolute",
            width: "100%",
            bottom: "0",
            height: "2.5rem",
            textAlign: "center",
            // color: 'rgb(255, 255, 255)'
          }}
        >
          <div className="row">
            <div className="col footer text-center">
              © {new Date().getFullYear()} Reetta Lipponen
            </div>
          </div>
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
