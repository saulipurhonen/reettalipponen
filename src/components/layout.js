import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import Helmet from "react-helmet"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  footer: {
    width: "100%",
    bottom: "0",
    textAlign: "center",
    clear: "both",
    position: "relative",
    height: "2rem",
    marginTop: "-2rem",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Helmet>
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
      <footer className={classes.footer}>
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
