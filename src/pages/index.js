import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Arrow from '../components/Icons/Arrow'
import './page-1.css'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteIndexQuery {
        site {
          siteMetadata {
            title
            data {
              title
              event {
                date
                city
                country
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div>
          <div className="intro page">
            <img alt="København konferanse logo" src="./static/kobenhavn.png" />
            <h1>{data.site.siteMetadata.data.title}</h1>
            <div>
              <p className="white">
                Tid: {data.site.siteMetadata.data.event.date}
              </p>
              <p className="white">
                Sted: {data.site.siteMetadata.data.event.city},{' '}
                {data.site.siteMetadata.data.event.country}
              </p>
            </div>
            <div className="button-group">
              <Link className="button white hidden" to="/speakers/">
                Talere
              </Link>
              <Link className="button white" to="/schedule/">
                Skjema
              </Link>
            </div>
            <a href="#info" className="arrow">
              <Arrow />
            </a>
          </div>
          <div id="info" className="info">
            <h2>Informasjon</h2>
            <p>
              Knowit Stavanger arrangerer fagseminar årlig. Det er de ansatte
              selv som lager programmet. Høsten 2019 vil den bli avholdt 4.
              april - 7. april 2019 i Købenavn i Danmark.
            </p>
            <p>Tidligere har vi besøkt bl.a. Berlin, Lofoten, Praha, Kiel og Madrid.</p>
          </div>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
