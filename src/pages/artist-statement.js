import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Artist statement" />
    <h1>Artist statement</h1>
    <p className="col-12 col-lg-6 px-0">
      Olen Joensuulaislähtöinen kuvanveistäjä ja asun tällä hetkellä
      Lappeenrannassa. Koulutukseltani olen kuva-artesaani sekä kuvataiteilija
      amk. Olen vuosien saatossa myös toiminut kuvataiteen opetustehtävissä sekä
      kulttuuritapahtumien tuottajana.
    </p>
    <p className="col-12 col-lg-6 px-0">
      Pääasiallinen työskentelymateriaalini on savi ja keramiikka. Veistokseni
      ovat valtaosin esittäviä ja usein niissä on viitteitä luonnosta. Toisaalta
      myös ympäristö- ja yhteisötaide kiinnostavat. Inspiroidun ennemmin
      tunteesta ja hetken mielijohteesta, kun pitkällisestä pohdinnasta. En
      suunnittele liikoja, vaan annan teokselle mahdollisuuden muotoutua
      omanlaisekseen.
    </p>
    <p className="col-12 col-lg-6 px-0">
      Esittävien veistosten lisäksi olen viehättynyt herättelemään muutakin kuin
      pelkkää visuaalista maailmaa, koska useammat aistiärsykkeet yleensä
      voimistavat taiteenkokemusta. Haluan osallistaa katsojan mukaan ja näin
      ollen muuttaa hänet kokijaksi, osaksi teosta.
    </p>
  </Layout>
)

export default SecondPage
