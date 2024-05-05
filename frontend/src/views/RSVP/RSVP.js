import React, { useContext } from "react"
import { useCookies } from "react-cookie"

import { selectLanguage } from "../../utilities/cookies"
import { Store } from "../../store"
import { title } from "../../content/RSVP"
import { Header } from "../../components/Header"

import { RSVPForm } from "./Forms"

function RSVP() {
  const { state } = useContext(Store)
  const [cookies] = useCookies(["language"])

  const {
    app: { user },
  } = state

  const { Heading, SubHeading, SubHeadingAuthenticated } =
    title[selectLanguage(cookies)]

  return (
    <>
      <Header
        Heading={Heading}
        SubHeading={
          user.isAuthenticated
            ? () => <SubHeadingAuthenticated user={user} />
            : SubHeading
        }
      />
      {user.isAuthenticated && <RSVPForm />}
    </>
  )
}

export default RSVP
