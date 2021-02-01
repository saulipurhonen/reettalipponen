import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"

import Lotus1 from "../images/lotus_1.webp"
import Lotus2 from "../images/lotus_2.webp"
import Lotus3 from "../images/lotus_3.webp"
import Lotus4 from "../images/lotus_4.webp"

import Tree1 from "../images/tree_1.webp"
import Tree2 from "../images/tree_2.webp"

import Willow1 from "../images/tree2_1.webp"
import Willow2 from "../images/tree2_2.webp"
import Willow3 from "../images/tree2_3.webp"

import Meeting from "../images/meeting_1.webp"
import LotusRaku from "../images/lotus_raku.webp"


const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: "none",
  },
  thumbnail: {
    maxWidth: "250px",
    height: "auto",
    cursor: "pointer",
  },
  closeButton: {
    position: "absolute",
    top: "-2rem",
    color: "white",
  },
}))

const works = [
  {
    label: "Lotuksen tarina",
    description1: "Moniaistillinen installaatio",
    description2: "130 x 52 x 80cm",
    description2: "2020",
    description3: "Posliini, kulta ja vesi",
    images: [Lotus1, Lotus2, Lotus3],
  },
  {
    label: "Tree of Life",
    description1: "Yhteisötaideteos",
    description2: "120 x 100 x 100cm",
    description2: "2018",
    description3: "Kierrätetty metalli, multa ja siemenet",
    images: [Tree1, Tree2],
  },
  {
    label: "Dancing Old Willow",
    description1: "5 x 3m",
    description2: "2017",
    description2: "Maali, kattohuopa ja kierrätetty posliini",
    images: [Willow1, Willow2, Willow3],
  },
  {
    label: "Kohtaaminen",
    description1: "6 x 13 x 14cm",
    description2: "2017",
    description2: "Keramiikka",
    images: [Meeting],
  },
  {
    label: "Lotus",
    description1: "25 x 25 x 7cm",
    description2: "2020",
    description2: "Raku-keramiikka",
    images: [LotusRaku],
  },
]

const Image = path => {
  return <img src={path.path}></img>
}

const getModalStyle = () => {
  return {
    top: "2rem",
    margin: "0px auto",
    display: "inline-block",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    bottom: "10px",
    transform: "translateX(-50%)",
  }
}

const WorksPage = () => {
  const classes = useStyles()
  const [showDialog, setShowDialog] = useState(false)
  const [modalStyle] = useState(getModalStyle)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const [imagePath, setImagePath] = useState("")

  const handleClick = (path) => {
    setImagePath(path)
    open()
  }

  return (
    <Layout>
      <SEO title="Työt" />
      <div className="row d-flex justify-content-center">
        <div className="text-center">
        <h1>Työt</h1>
        </div>
      </div>


      {works.map((work, i) => (
        <div key={i}y>
          <div className="row d-flex justify-content-center">
            {work.images.map((img, j) => (
              <div key={j} className="col-auto pt-1">
                <img
                  className={classes.thumbnail}
                  src={work.images[j]}
                  onClick={() => handleClick(work.images[j])}
                ></img>
              </div>
            ))}
          </div>
          <div className="row d-flex justify-content-center pb-5">
            <div className="col-auto text-center">
              <span className="d-block">{work.label}</span>
              <span className="d-block">{work.description1}</span>
              <span className="d-block">{work.description2}</span>
              <span className="d-block">{work.description3}</span>
              <span className="d-block">{work?.description4}</span>
            </div>
          </div>
        </div>
      ))}
      <Modal open={showDialog} onClose={close}>
        <div style={modalStyle} className={classes.paper}>
          <Button className={classes.closeButton} onClick={() => close()}>
            Sulje
            <CloseIcon />
          </Button>

          <img src={imagePath}></img>
        </div>
      </Modal>
    </Layout>
  )
}

export default WorksPage