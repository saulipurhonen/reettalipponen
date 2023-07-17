import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const cvData = [
  {
    label: "Taideopinnot",
    items: [
      {
        years: "2016 - 2020",
        location:
          "Kulttuurialan amk-tutkinto, kuvataiteilija, LAB-ammattikorkeakoulu, Lappeenranta",
      },
      {
        years: "2014 - 2015",
        location: "Keramiikan perusteet, Joensuun seudun kansalaisopisto",
      },
      {
        years: "2008 - 2011",
        location:
          "Kuvallisen ilmaisun perustutkinto, Ammattiopisto Outokumpu",
      },
    ],
  },
  {
    label: "Kulttuurialan työkokemus",
    items: [
      {
        years: "2023 -",
        location: "Koulutaiteilija, Metamorfoosi -hanke, Sammonlahden yläkoulu, Lappeenranta",
      },
      {
        years: "2022 - 2023",
        location: "Ohjaaja, Harrastehaavi -hanke, Lappeenrannan nuorisotoimi",
      },
      {
        years: "2022 -",
        location: "Koulutaiteilija, Yhteisötaiteen kurssi, Sammonlahden yläkoulu, Lappeenranta",
      },
      {
        years: "2022 -",
        location: "Tuntiopettaja, kuvataiteen perusopetus, Savitaipaleen kansalaisopisto",
      },
      {
        years: "2018",
        location: "Kuvataideopettaja, maahanmuuttajien kuvataidetyöpaja, Imatra",
      },
      {
        years: "2017 - 2023",
        location: "Tuottaja, LastenPop-kulttuuritapahtuma, Joensuu",
      },
      {
        years: "2015 - 2016",
        location: "Kuvataideopettaja, Lasten- ja nuorten kuvataideleiri, Joensuun seudun kansalaisopisto",
      },
      {
        years: "2013 - 2015",
        location: "Kuvataideopettaja, iltapäiväkerho, Pielisensuun Ev. Lut. seurakunta",
      },
      {
        years: "2012 - 2016",
        location: "Tuntiopettaja, kuvataiteen perusopetus, Joensuun seudun kansalaisopisto",
      },
    ],
  },
  {
    label: "Yksityisnäyttelyt",
    items: [
      {
        years: "2019",
        location: "Voimia luonnosta, Galleria Honkaharju, Imatra",
      },
    ],
  },
  {
    label: "Ryhmänäyttelyt",
    items: [
      {
        years: "2023",
        location: "Päin punaista, Taidekeskus Ahjo, Joensuu",
      },
      {
        years: "2023",
        location: "Näyteikkunataidenäyttely, kauppakeskus Opri, Lappeenranta",
      },
      {
        years: "2023",
        location: "Musta Lista -kollektiivin tammikuun näyttelym kulttuuritila Nuijamies, Lappeenranta",
      },
      {
        years: "2022",
        location: "Patoan metsästä majan - EKTS uusien jäsenten näyttely, Taidekeskus ITÄ, Lappeenranta",
      },
      {
        years: "2022",
        location: "Kesänäyttely, Taideolohuone Katariina, Lappeenranta",
      },
      {
        years: "2022",
        location: "X-Tempore, Walleniuksen Wapriikki, Juupajoki",
      },
      {
        years: "2022",
        location: "Yksinkeltaista, Vihreä makasiini, Lappeenranta",
      },
      {
        years: "2021",
        location: "Kaikki Mustaa, Kaapelitehdas, Helsinki",
      },
      {
        years: "2020",
        location: "Via Dolorosa, Imatran taidemuseo, Imatra",
      },
      {
        years: "2019",
        location: "Loppu, Taidebunkkeri, Imatra",
      },
      {
        years: "2019",
        location: "Stockfors Art Fair, Pyhtää",
      },
      {
        years: "2018",
        location: "Toronto, Tartto, Viro",
      },
      {
        years: "2017",
        location: "Valta ja Vallattomuus, Imatra",
      },
      {
        years: "2014",
        location: "Keramiikan joulunäyttely, Joensuun pääkirjasto",
      },
      {
        years: "2011",
        location: "Loppurutistuksia, Taidekeskus Ahjo, Joensuu",
      },
      {
        years: "2010",
        location: "Mediainstallaatioita, Kevätkumpu-kulttuurifestivaali, Outokumpu",
      },
      {
        years: "2009",
        location: "Kaukainen eilinen, Kevätkumpu-kulttuurifestivaali, Outokumpu",
      },
      {
        years: "2008",
        location: "Point of view, Kevätkumpu-kulttuurifestivaali, Outokumpu",
      },
    ],
  },
  {
    label: "Julkiset teokset",
    items: [
      {
        years: "2021",
        location: "Vesi, ilma ja maa- akustiikkataulut, Lappeenrannan kirkko",
      },
      {
        years: "2020",
        location: "Tihku, Urkin Piilopirtin taidepuutarha, Nokia",
      },
      {
        years: "2017",
        location: "Universumi- tilateos (yhteistyö), Konnunsuon vastaanottokeskus, Lappeenranta",
      },
      {
        years: "2013",
        location: "Usko, toivo, rakkaus- veistossarja, sanomalehti Karjalaisen etusivu",
      },
      {
        years: "2013",
        location: "Keramiikkaveistoksia, Pielisensuun kirkko, Joensuu",
      },
      {
        years: "2011-",
        location: "Seimiasetelma, Joulusesongin aikaan, Joensuun Taitokortteli",
      },
      {
        years: "2011",
        location: "Makujen sinfonia- tilateos, ammattiopisto Outokumpu, Outokumpu",
      },
      {
        years: "2009",
        location: "Istuvat lehmät- muraali (yhteistyö), Aution tila, Outokumpu",
      },
    ],
  },
  {
    label: "Yhteisötaideteokset",
    items: [
      {
        years: "2022",
        location: "Värit, Pohjoinen rantapuisto, Joensuu",
      },
      {
        years: "2022",
        location: "Värit, Mäntylän päiväkodin piha, Lappeenranta",
      },
      {
        years: "2022",
        location: "Hyönteishotellikylä, Taideolohuone Katariinan piha, Lappeenrannan linnoitus",
      },
      {
        years: "2019",
        location: "Metsän peitto, LastenPop-kulttuuritapahtuma, Joensuu",
      }
    ],
  },
]

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="CV" />
      <h1>CV</h1>
      <h2>Henkilötiedot</h2>
      <ul className="list-unstyled mx-0">
        <li>Lipponen Reetta Emilia</li>
        <li>1986, Joensuu</li>
      </ul>

      {cvData.map((data, i) => (
        <div key={i}>
          <h2>{data.label}</h2>
          <div className="pb-4">
            {data.items.map((item, j) => (
              <div key={j} className="row pb-3 pb-lg-0 mx-0">
                <div className="col-3 col-lg-2 pl-0">{item.years}</div>
                <div className="col col-lg-9">{item.location}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default SecondPage
