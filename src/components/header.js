import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  color: #fff;
  padding-left: 1rem;
  &:hover {
    color: #9adfac;
  }
`
const Branding = styled.span`
  font-size: 1.5rem;
  margin-top: -1rem;
`

const linkList = [
  { label: "Etusivu", target: "/" },
  // { label: "Artist statement", target: "/artist-statement" },
  { label: "Työt", target: "/works" },
  { label: "CV", target: "/cv" },
  { label: "Yhteystiedot", target: "/contact" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light pl-0"
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          textAlign: "right",
        }}
      >
        <Branding>reettalipponen.art</Branding>
        <button
          style={{
            marginTop: `-0.7rem`,
          }}
          className="navbar-toggler ml-auto p-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleClick()}
        >
          <div id="nav-icon" className={menuOpen ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pt-3 pt-lg-0">
            {linkList.map((link, i) => (
              <li className="nav-item" key={i}>
                <StyledLink to={link.target}>{link.label}</StyledLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
