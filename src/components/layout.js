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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          textAlign: 'left',
          color: 'black'
        }}
      >
        <main>{children}</main>
        <footer style={{
          position: 'absolute',
          width: '100%',
          bottom: '0',
          height: '2.5rem',
          textAlign: 'left',
          color: 'black'
        }}>
        <div className="row">
          <div className="col"></div>
          <div className="col col-md-7 footer text-center text-md-left">
            © {new Date().getFullYear()}, Reetta Lipponen
          </div>
        </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
