import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import Helmet from "react-helmet"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  customHtml: {
    position: "absolute",
    width: 600,
    backgroundColor: "none",
  },
}))

const Layout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{
        class: "customHtml",
        style: "height: 100%"
      }}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <div
        className="container-fluid"
        style={{
          marginBottom: "2rem",
        }}
      >
        <Header></Header>
        <main>{children}</main>
      </div>
      <footer
        style={{
          width: "100%",
          bottom: "0",
          textAlign: "center",
          clear: "both",
          position: "relative",
          height: "2rem",
          marginTop: "-2rem",
        }}
      >
        <div className="row mx-0">
          <div className="col footer text-center px-0">
            © {new Date().getFullYear()} Reetta Lipponen
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
