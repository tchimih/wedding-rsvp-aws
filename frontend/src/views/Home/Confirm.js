import React, { useContext, useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { Store } from "../../store"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import isNull from "lodash/isNull"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"
import Container from "react-bootstrap/Container"

import { fetchUserRSVPInformation, putUserConfirmation } from "../../actions"
import { confirmationContent } from "../../content/Home/Confirm"
import { selectLanguage } from "../../utilities/cookies"
import { get } from "lodash"

export const Confirm = () => {
  const { state, dispatch } = useContext(Store)
  const [showConfirmation, setShowConfirmation] = useState(true)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [cookies] = useCookies(["language"])
  const {
    app: {
      user: { email, name },
      rsvp: { allowed, confirmed },
    },
  } = state

  const {
    modalContent,
    modalTitle,
    buttonText,
    townHallText,
    dinerText,
    unauthText,
  } = confirmationContent[selectLanguage(cookies)]

  useEffect(() => {
    if (email) {
      fetchUserRSVPInformation(email, dispatch)
    }
  }, [email, dispatch])

  console.log(allowed)

  const [confirmationChoices, setConfirmationChoices] = useState([
    {
      id: "town_hall",
      label: townHallText,
      confirmed: false,
    },
    {
      id: "diner",
      label: dinerText,
      confirmed: false,
    },
  ])

  const handleStateForPresence = (event) => {
    const identifier = event.target.id
    const value = event.target.checked
    let newValue = confirmationChoices
    newValue.map((choices) => {
      if (choices.id === identifier) {
        choices.confirmed = value
      }
    })
    setConfirmationChoices(newValue)
  }

  const submitPresence = (event) => {
    event.preventDefault()
    alert("Are you sure you want to proceed with this changes ?")
    putUserConfirmation(
      { email },
      confirmationChoices,
      setShowConfirmation,
      dispatch
    )
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isNull(email) ? (
            <Container>
              <Col>
                <Alert variant="info">{unauthText}</Alert>
              </Col>
            </Container>
          ) : (
            <>
              <p>{modalContent}</p>
              <Form>
                {confirmationChoices.map((choice) => (
                  <div key={`default-${choice.id}`} className="mb-3">
                    <Form.Check
                      type={"checkbox"}
                      checked={choice.confirmed}
                      id={choice.id}
                      label={choice.label}
                      onClick={handleStateForPresence}
                    />
                  </div>
                ))}
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!isNull(email) && (
            <Button variant="primary" onClick={submitPresence}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <Button variant="secondary" size="lg" onClick={handleShow}>
        {`${buttonText}`}
      </Button>
    </>
  )
}
