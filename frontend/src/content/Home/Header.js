import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: () => <span>We&apos;re getting married!</span>,
  [LANGUAGE.FR]: () => <span>Nous allons nous marier!</span>,
  [LANGUAGE.ES]: () => <span>Nos vamos a casar!</span>,
}
