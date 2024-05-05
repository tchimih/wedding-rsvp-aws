import React, { useContext } from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import isNull from "lodash/isNull"
import Col from "react-bootstrap/Col"

import { Confirm } from "../Confirm"
import { selectLanguage } from "../../../utilities/cookies"
import { details } from "../../../content/Home"
import { AddToCalendarButton } from "add-to-calendar-button-react"

import styles from "./Details.module.scss"
import { LANGUAGE } from "../../../actions/constants"
import { Store } from "../../../store"

export const calendarTextConfig = {
  [LANGUAGE.FR]: {
    title: "Mariage Caroline et Anis",
    description: `Caroline et Anis ont le plaisir de vous convier à leur mariage à la mairie de Sèvres suivi d'un dîné de célébration au domaine de Bethemont voici le planning:

- 11h30 à 12h: Mariage civile à la mairie de Sèvres.
- à partir de 19h jusqu'à 23h: Dîné de célébration au domaine de Béthemont.

Au plaisir de vous voir 😊
    `,
    language: "fr",
    rsvpText:
      "Merci de confirmer votre présence en remplissant le forumulaire ",
    rsvpNonConnteted:
      "Merci de vous connecter afin de confirmer votre présence ",
    here: "ici",
  },
  [LANGUAGE.EN]: {
    title: "Caroline and Anis' wedding",
    description: `Caroline and Anis are pleased to invite you to their wedding at the Sèvres town hall followed by a celebratory dinner at the Bethemont estate. Here's the schedule:

- 11:30 am to 12 pm: Civil wedding ceremony at the Sèvres town hall.
- Starting from 7 pm to 11 pm: Celebratory dinner at the Bethemont estate.

Looking forward to seeing you 😊`,
    language: "en",
    rsvpText: "Make sure to RSVP by filling the form ",
    rsvpNonConnteted:
      "Make sure to sign in to proceed with the RSVP ",
    here: "here",
  },
  [LANGUAGE.ES]: {
    title: "La boda de Carolina y Anís",
    description: `Carolina y Anís tienen el placer de invitarlos a su boda en el ayuntamiento de Sèvres, seguida de una cena de celebración en el dominio de Bethemont. Aquí está el itinerario:

- De 11:30 a.m. a 12 p.m.: Ceremonia civil de la boda en el ayuntamiento de Sèvres.
- Desde las 7 p.m. hasta las 11 p.m.: Cena de celebración en el dominio de Bethemont.

¡Esperamos verlos 😊!`,
    rsvpText: "Make sure to RSVP by filling the form ",
    rsvpNonConnteted:
      "Make sure to sign in to proceed with the RSVP ",
    here: "here",
  },
}

function Details() {
  const [cookies] = useCookies(["language"])
  const { state, dispatch } = useContext(Store)

  const { Title, Date, Location, locationLink } =
    details[selectLanguage(cookies)]
  const {
    app: {
      user: { email },
      rsvp: { allowed, confirmed },
    },
  } = state

  return (
    <section>
      <Container fluid>
        <Row>
          <Col className={styles.details}>
            <h1 className={styles.announcement}>
              <Title />
            </h1>
            <h1 className={styles.date}>
              <Date />
            </h1>
            <h2
              style={{
                fontFamily: "Ember",
                color: "rgb(255, 255, 255)",
                fontWeight: 400,
                textTransform: "none",
                lineHeight: 1.6,
                letterSpacing: "normal",
                fontSize: "24px",
              }}
            >
              {!isNull(email) ? (
                <>
                  {calendarTextConfig[selectLanguage(cookies)].rsvpText}
                  <a href={`${window.location.href}rsvp`}>
                    {calendarTextConfig[selectLanguage(cookies)].here}
                  </a>
                </>
              ) : (
                <>
                  {calendarTextConfig[selectLanguage(cookies)].rsvpNonConnteted}
                  <a href={`${window.location.href}auth`}>
                    {calendarTextConfig[selectLanguage(cookies)].here}
                  </a>
                </>
              )}
            </h2>
            {!isNull(email) && (
              <span
                className={`${styles.calendar} d-flex justify-content-center`}
              >
                <AddToCalendarButton
                  name={calendarTextConfig[selectLanguage(cookies)].title}
                  description={
                    calendarTextConfig[selectLanguage(cookies)].description
                  }
                  startDate="2024-06-22"
                  startTime="11:30"
                  endDate="2024-06-22"
                  endTime="23:00"
                  options={["Google", "iCal", "Microsoft365", "Outlook.com"]}
                  timeZone="Europe/Paris"
                  listStyle="overlay"
                  styleDark="system"
                  availability="busy"
                  location="Mairie de Sèvres, 54 Grande Rue, 92310 Sèvres, France"
                  language={
                    calendarTextConfig[selectLanguage(cookies)].language
                  }
                ></AddToCalendarButton>
              </span>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Details
