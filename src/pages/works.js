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

import Tree1 from "../images/tree_1.webp"
import Tree2 from "../images/tree_2.webp"

import Willow1 from "../images/tree2_1.webp"
import Willow2 from "../images/tree2_2.webp"
import Willow3 from "../images/tree2_3.webp"

import Meeting from "../images/meeting_1.webp"
import LotusRaku from "../images/lotus_raku.webp"

import Siivous from "../images/siivous.jpg"


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
  bigImage: {
    maxHeight: "95%",
  }
}))

const works = [
  {
    label: "Lotuksen tarina",
    description1: "Osallistava moniaistillinen installaatio",
    description2: "130 x 52 x 80cm",
    description3: "2020",
    description4: "Posliini, kulta ja vesi",
    images: [Lotus1, Lotus2, Lotus3],
  },
  {
    label: "Elämänpuu",
    description1: "Osallistava teos",
    description2: "120 x 100 x 100cm",
    description3: "2018",
    description4: "Kierrätetty metalli, multa ja siemenet",
    images: [Tree1, Tree2],
  },
  {
    label: "Dancing Old Willow",
    description1: "5 x 3m",
    description2: "2017",
    description3: "Maali, kattohuopa ja kierrätetty posliini",
    images: [Willow1, Willow2, Willow3],
  },
  {
    label: "Kohtaaminen",
    description1: "6 x 13 x 14cm",
    description2: "2017",
    description3: "Keramiikka",
    images: [Meeting],
  },
  {
    label: "Lotus",
    description1: "25 x 25 x 7cm",
    description2: "2020",
    description3: "Raku-keramiikka",
    images: [LotusRaku],
  },
  {
    label: "Siivouspäivä",
    description1: "30 x 90cm",
    description2: "2018",
    description3: "Rikkalapio, multa ja ohra",
    images: [Siivous],
  },
]

const getModalStyle = () => {
  return {
    top: "5rem",
    margin: "0px auto",
    display: "inline-block",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    bottom: "10px",
    transform: "translateX(-50%)",
    maxWidth: "90%",
    maxHeight: "100%",
  }
}

const WorksPage = () => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [showDialog, setShowDialog] = useState(false)
  const [imagePath, setImagePath] = useState("")

  const handleClick = (path) => {
    setImagePath(path)
    setShowDialog(true)
  }

  return (
    <Layout>
      <SEO title="Teokset" />
      <div className="row d-flex justify-content-center">
        <div className="text-center">
        <h1>Teokset</h1>
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
                  alt=""
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
      <Modal open={showDialog} onClose={() => setShowDialog(false)}>
        <div style={modalStyle} className={classes.paper}>
          <Button className={classes.closeButton} onClick={() => setShowDialog(false)}>
            Sulje
            <CloseIcon />
          </Button>

          <img className={classes.bigImage} src={imagePath}></img>
        </div>
      </Modal>
    </Layout>
  )
}

export default WorksPage
