import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Heading: () => <>Schedule</>,
    SubHeading: () => (
      <span>
        Here's what to expect during our wedding weekend. We can't wait to
        celebrate with you!
      </span>
    ),
  },
  [LANGUAGE.FR]: {
    Heading: () => <>Agenda</>,
    SubHeading: () => (
      <span>
        Vous trouverez ci-dessous le programme de notre mariage, nous avons hâte
        de vous retrouver!
      </span>
    ),
  },
  [LANGUAGE.ES]: {
    Heading: () => <>Horario</>,
    SubHeading: () => (
      <span>
        Esto es lo que puede esperar durante el fin de semana de nuestra boda.
        No podemos esperar a celebrar contigo!
      </span>
    ),
  },
}
