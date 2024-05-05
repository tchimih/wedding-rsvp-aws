import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Title: () => (
      <>
        <h2>Caroline</h2>
        and
        <h2>Anis</h2>
        are getting married!
      </>
    ),
    Date: () => (
      <div className="d-flex flex-column">
        <div>
          <span>June 22, 2024</span>
        </div>
      </div>
    ),
    Location: () => <span>Sèvres town hall (92310)</span>,
    locationLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
  },
  [LANGUAGE.FR]: {
    Title: () => (
      <>
        <h2>Caroline</h2>
        et
        <h2>Anis</h2>
        <span>se marrient!</span>
      </>
    ),
    Date: () => (
      <div className="d-flex flex-column">
        <div>
          <span>Le 22 Juin 2024 à 11h30</span>
        </div>
      </div>
    ),
    Location: () => <span>à la mairie de Sèvres (92310)</span>,
    locationLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
  },
  [LANGUAGE.ES]: {
    Title: () => (
      <>
        <h2>Caroline</h2>
        <p>y</p>
        <h2>Anis</h2>
        se van a casar!
      </>
    ),
    Date: () => (
      <div className="d-flex flex-column">
        <div>
          <span>22 de junio de 2024</span>
        </div>
      </div>
    ),
    Location: () => <span>ayuntamiento de Sèvres (92310)</span>,
    locationLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
  },
}
