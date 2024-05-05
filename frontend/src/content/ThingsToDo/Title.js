import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Heading: () => <>Things to Do</>,
    SubHeading: () => (
      <>
        We’re so excited to share a few of our favorite places in the area with
        you. If you wish to explore them, we recommend renting a car from
        Barcelona's airport. At dusk, if you are planning to be close to the
        water, we recommend to use mosquito repellent.
      </>
    ),
    link: "https://terresdelebre.travel/en",
  },
}
