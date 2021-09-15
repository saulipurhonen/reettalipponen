import React from "react"
import Layout from "../components/layout"
import Image from "../images/web_bg_2.png"
import SEO from "../components/seo"

import styled from "styled-components"

const HeroContainer = styled(props => <div {...props} />)`
  height: 100%;
`

const SideImage = styled.img`
  max-width: 100%;
  max-height: 42rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Etusivu" />
    <HeroContainer>
      <div className="row mx-0">
        <div className="col-12 col-lg-6 px-0">
          <h1>Reetta Lipponen</h1>
          <p>
            Olen Joensuulaislähtöinen, nykyisin Lappeenrannassa asuva
            kuvataiteilija. Olen toiminut myös kuvataiteen opetustehtävissä sekä
            kulttuuritapahtumien tuotannoissa. Mielenkiinnon kohteeni
            keskittyvät kuvanveistoon, sekä ympäristö- ja yhteisötaiteeseen.
          </p>
          <p>
            Inspiroidun ennemmin tunteesta ja hetken mielijohteesta, kuin
            pitkällisestä pohdinnasta. En luonnostele tai suunnittele teoksiani
            liian tarkasti, vaan annan niiden monesti muotoutua omanlaisekseen,
            joskus muuttaen suuntaa jopa aivan loppumetreillä. Annan teokselle
            rakennusaineet ja se itse sanelee ehdot, joita hyväksi käyttäen
            muokkaan lopputuloksen.
          </p>
          <p>
            Tälle sattumanvaraisuudelle vastapainoksi teen paljon myös
            esittävää, loppuun saakka hiottua käyttökeramiikkaa. Näiden teosten
            aiheet syntyvät pääosin luonnosta. Tämän lisäksi olen viehättynyt
            herättelemään visuaalisuuden tueksi myös muita aisteja, jonka avulla
            muuttaa katsojan kokijaksi, osaksi teosta.
          </p>
        </div>
        <div className="col">
          <SideImage src={Image}></SideImage>
        </div>
      </div>
    </HeroContainer>
  </Layout>
)

export default IndexPage
