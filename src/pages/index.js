import React from "react"
import Layout from "../components/layout"
import Image from "../images/web_bg.jpg"
import SEO from "../components/seo"
import MyComponent from "../components/visual"

import styled from "styled-components"

const HeroContainer = styled(props => <div {...props} />)`
  height: 100%;
`

const SideImage = styled.img`
  max-width: 450px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Etusivu" />
    <HeroContainer>
      <div className="row">
        {/* <MyComponent></MyComponent> */}
        <div className="col-12 col-lg-6">
          <h1>Reetta Lipponen</h1>
          <p>
            Olen Joensuulaislähtöinen kuvanveistäjä ja asun tällä hetkellä
            Lappeenrannassa. Koulutukseltani olen kuva-artesaani sekä
            kuvataiteilija amk. Olen vuosien saatossa myös toiminut kuvataiteen
            opetustehtävissä sekä kulttuuritapahtumien tuottajana.
          </p>
          <p>
            Pääasiallinen työskentelymateriaalini on savi ja keramiikka.
            Veistokseni ovat valtaosin esittäviä ja usein niissä on viitteitä
            luonnosta. Toisaalta myös ympäristö- ja yhteisötaide kiinnostavat.
            Inspiroidun ennemmin tunteesta ja hetken mielijohteesta, kun
            pitkällisestä pohdinnasta. En suunnittele liikoja, vaan annan
            teokselle mahdollisuuden muotoutua omanlaisekseen.
          </p>
          <p>
            Esittävien veistosten lisäksi olen viehättynyt herättelemään
            muutakin kuin pelkkää visuaalista maailmaa, koska useammat
            aistiärsykkeet yleensä voimistavat taiteenkokemusta. Haluan
            osallistaa katsojan mukaan ja näin ollen muuttaa hänet kokijaksi,
            osaksi teosta.
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
