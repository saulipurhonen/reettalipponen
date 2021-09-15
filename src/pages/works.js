import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"

import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"

import Lotus1 from "../images/large/lotus_1.jpeg"
import Lotus2 from "../images/large/lotus_2.jpeg"
import Lotus3 from "../images/large/lotus_3.jpeg"
import Lotus1_thumbnail from "../images/thumbnails/lotus_1.jpg"
import Lotus2_thumbnail from "../images/thumbnails/lotus_2.jpg"
import Lotus3_thumbnail from "../images/thumbnails/lotus_3.jpg"

import Tree1 from "../images/large/tree_1.jpg"
import Tree2 from "../images/large/tree_2.jpg"
import Tree1_thumbnail from "../images/thumbnails/tree_1.jpg"
import Tree2_thumbnail from "../images/thumbnails/tree_2.jpg"

import Willow1 from "../images/large/tree2_1.jpeg"
import Willow2 from "../images/large/tree2_2.jpeg"
import Willow3 from "../images/large/tree2_3.jpeg"
import Willow1_thumbnail from "../images/thumbnails/tree2_1.jpg"
import Willow2_thumbnail from "../images/thumbnails/tree2_2.jpg"
import Willow3_thumbnail from "../images/thumbnails/tree2_3.jpg"

import Meeting from "../images/large/meeting_1.jpg"
import Meeting_thumbnail from "../images/thumbnails/meeting_1.jpg"

import LotusRaku from "../images/large/lotus_raku.jpg"
import LotusRaku_thumbnail from "../images/thumbnails/lotus_raku.jpg"

import Siivous from "../images/large/siivous.jpg"
import Siivous_thumbnail from "../images/thumbnails/siivous.jpg"

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
  },
}))

const works = [
  {
    label: "Lotuksen tarina",
    description1: "Osallistava moniaistillinen installaatio",
    description2: "130 x 52 x 80cm",
    description3: "2020",
    description4: "Posliini, kulta ja vesi",
    images: [Lotus1, Lotus2, Lotus3],
    thumbnails: [Lotus1_thumbnail, Lotus2_thumbnail, Lotus3_thumbnail],
  },
  {
    label: "Elämänpuu",
    description1: "Osallistava teos",
    description2: "120 x 100 x 100cm",
    description3: "2018",
    description4: "Kierrätetty metalli, multa ja siemenet",
    images: [Tree1, Tree2],
    thumbnails: [Tree1_thumbnail, Tree2_thumbnail],
  },
  {
    label: "Dancing Old Willow",
    description1: "5 x 3m",
    description2: "2017",
    description3: "Maali, kattohuopa ja kierrätetty posliini",
    images: [Willow1, Willow2, Willow3],
    thumbnails: [Willow1_thumbnail, Willow2_thumbnail, Willow3_thumbnail],
  },
  {
    label: "Kohtaaminen",
    description1: "6 x 13 x 14cm",
    description2: "2017",
    description3: "Keramiikka",
    images: [Meeting],
    thumbnails: [Meeting_thumbnail],
  },
  {
    label: "Lotus",
    description1: "25 x 25 x 7cm",
    description2: "2020",
    description3: "Raku-keramiikka",
    images: [LotusRaku],
    thumbnails: [LotusRaku_thumbnail],
  },
  {
    label: "Siivouspäivä",
    description1: "30 x 90cm",
    description2: "2018",
    description3: "Rikkalapio, multa ja ohra",
    images: [Siivous],
    thumbnails: [Siivous_thumbnail],
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

  const handleClick = path => {
    setImagePath(path)
    setShowDialog(true)
  }

  const lightboxOptions = {
    settings: {
      autoplaySpeed: 0,
      disableWheelControls: true,
    },
    buttons: {
      showDownloadButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
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
        <SimpleReactLightbox>
          <SRLWrapper options={lightboxOptions}>
            <div key={i} y>
              <div className="row d-flex justify-content-center">
                {work.images.map((img, j) => (
                  <div key={j} className="col-auto pt-1">
                    <a href={img}>
                    <img
                      className={classes.thumbnail}
                      src={work.thumbnails[j]}
                      alt=""
                      // onClick={() => handleClick(img)}
                    ></img>
                    </a>

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
          </SRLWrapper>
        </SimpleReactLightbox>
      ))}

      <Modal open={showDialog} onClose={() => setShowDialog(false)}>
        <div style={modalStyle} className={classes.paper}>
          <Button
            className={classes.closeButton}
            onClick={() => setShowDialog(false)}
          >
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
