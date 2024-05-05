import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"

import { selectLanguage } from "../../utilities/cookies"
import { title, faqs } from "../../content/FAQ"
import { Header } from "../../components/Header"
import { Item } from "../../components/Item"

function FAQ() {
  const [cookies] = useCookies(["language"])

  const { Heading, SubHeading } = title[selectLanguage(cookies)]
  const faqItems = faqs[cookies.language]

  return (
    <>
      <Header Heading={Heading} SubHeading={SubHeading} />
      <Container fluid>
        {faqItems.map(({ Question, Answer }, idx) => (
          <div style={{ marginBottom: 100 }}>
            <Item key={idx} LeftMainTitle={Question} RightDetails={Answer} />
          </div>
        ))}
      </Container>
    </>
  )
}

export default FAQ
