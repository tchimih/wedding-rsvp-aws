import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Heading: () => <>Questions?</>,
    SubHeading: () => (
      <>
        If you have any other questions other than what we’ve listed here,
        please reach out to{" "}
        <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>.
      </>
    ),
  },
  [LANGUAGE.ES]: {
    Heading: () => <>Preguntas?</>,
    SubHeading: () => (
      <>
        Si tiene alguna otra pregunta además de las que hemos enumerado aquí,
        por favor contacta con{" "}
        <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>.
      </>
    ),
  },
  [LANGUAGE.FR]: {
    Heading: () => <>Questions?</>,
    SubHeading: () => (
      <>
        Si vous avez n'import quelle question pas couverte ici, n'hesitez pas à
        nous contacter à{" "}
        <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>.
      </>
    ),
  },
}
