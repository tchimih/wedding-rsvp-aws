import React, { useContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { object, number, string } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { Formik } from "formik"
import isUndefined from "lodash/isUndefined"
import isNull from "lodash/isNull"
import get from "lodash/get"
import range from "lodash/range"
import { Switch } from "@material-ui/core"

import { selectLanguage } from "../../../../utilities/cookies"
import { Store } from "../../../../store"
import {
  fetchUserRSVPInformation,
  putUserRSVPInformation,
} from "../../../../actions"
import { rsvpForm } from "../../../../content/RSVP"
import styles from "../Forms.module.scss"
import { Confirm } from "../../../Home/Confirm"

const schema = object({
  weddingGuests: number().required(),
  songs: string(),
  needTransport: string(),
})

const YES = "Yes"
const NO = "No"

function RSVPForm() {
  const { state, dispatch } = useContext(Store)
  const [cookies] = useCookies(["language"])

  const [showConfirmation, setShowConfirmation] = useState(true)

  const {
    app: {
      user: { email },
      rsvp: { allowed, confirmed },
    },
  } = state

  const {
    AlertNoEmail,
    submitButtonText,
    updateButtonText,
    yesLabel,
    noLabel,
    WeddingFormHeader,
    NumberOfGuestsLabel,
    zeroLabel,
    NumberOfGuestsHelp,
    TransportationLabel,
    TransportationHelp,
    TransportationHelpinfo,
    FoodDietLabel,
    FoodDietLabelHelper,
    FoodAlergiesLabel,
    OriginLabel,
    SongsLabel,
    SongsHelp,
    AlertRSVPUpdated,
    townHallConfirmation,
    dinerConfirmation,
  } = rsvpForm[selectLanguage(cookies)]

  useEffect(() => {
    if (email) {
      fetchUserRSVPInformation(email, dispatch)
    }
  }, [email, dispatch])

  const submitForm = (values, actions) => {
    const { setSubmitting, setStatus } = actions
    putUserRSVPInformation(
      { email, ...values },
      setSubmitting,
      setStatus,
      setShowConfirmation,
      dispatch
    )
  }

  if (isNull(allowed)) {
    return (
      <Container>
        <Col className={styles.intro}>
          <Alert variant="info">
            <AlertNoEmail />
          </Alert>
          <Confirm />
        </Col>
      </Container>
    )
  }

  // wedding values
  const weddingMaxGuests = 4
  const weddingConfirmedGuests = get(confirmed, ["ConfirmedGuests"])
  const weddingSongs = get(confirmed, ["SongsRequest"])
  const needTransport = get(confirmed, ["NeedTransport"])
  const mealPreference = get(confirmed, ["MealPreference"])
  const comingToTheTownHall = get(confirmed, ["comingToTownHall"])
  const comingToTheDiner = get(confirmed, ["comingToDiner"])
  const allergies = get(confirmed, ["Allergies"])

  const buttonText = isUndefined(weddingConfirmedGuests)
    ? submitButtonText
    : updateButtonText

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        weddingGuests: weddingConfirmedGuests || 0,
        needTransport: needTransport || NO,
        mealPreference: mealPreference || "NONE",
        comingToTheDiner: comingToTheDiner || false,
        comingToTheTownHall: comingToTheTownHall || false,
        allergies: allergies || "",
        songs: weddingSongs || "",
      }}
      onSubmit={submitForm}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isSubmitting,
        errors,
        status,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className={styles.form}>
          <div className="text-center">
            <h3 className="weddingHeader">
              <WeddingFormHeader />
            </h3>
          </div>
          <Form.Group controlId="controlIdWeddingConfirmation">
            <Switch
              name="comingToTheDiner"
              value={values.comingToTheDiner}
              checked={values.comingToTheDiner}
              onChange={handleChange}
            />{" "}
            <Form.Text>{dinerConfirmation}</Form.Text>
            <br />
          </Form.Group>
          <Switch
            name="comingToTheTownHall"
            value={values.comingToTheTownHall}
            checked={values.comingToTheTownHall}
            onChange={handleChange}
          />{" "}
          <Form.Text>{townHallConfirmation}</Form.Text>
          <Form.Group controlId="controlIdWeddingGuests">
            <Form.Label>
              <NumberOfGuestsLabel />
            </Form.Label>
            <Form.Control
              name="weddingGuests"
              as="select"
              value={values.weddingGuests}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.weddingGuests && errors.weddingGuests}
            >
              {range(0, weddingMaxGuests + 1).map((idx) => (
                <option
                  label={idx === 0 ? zeroLabel : idx}
                  value={idx}
                  key={idx}
                >
                  {idx === 0 ? zeroLabel : idx}
                </option>
              ))}
            </Form.Control>
            <Form.Text className="text-muted">
              <NumberOfGuestsHelp />
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="controlIdNeedBus">
            <Form.Label>
              <TransportationLabel />
            </Form.Label>
            <Form.Control
              name="needTransport"
              as="select"
              value={values.needTransport}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.needTransport && errors.needTransport}
            >
              <option label={yesLabel} value={YES} key={YES}>
                {yesLabel}
              </option>
              <option label={noLabel} value={NO} key={NO}>
                {noLabel}
              </option>
            </Form.Control>
            <Form.Text className="text-muted">
              <TransportationHelp />
            </Form.Text>
          </Form.Group>
          {values.needTransport === YES && (
            <Alert variant="info">
              <TransportationHelpinfo />
            </Alert>
          )}
          <Form.Group controlId="controlIdFootDiet">
            <Form.Label>
              <FoodDietLabel />
            </Form.Label>
            <Form.Control
              name="mealPreference"
              as="select"
              value={values.mealPreference}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.weddingGuests && errors.weddingGuests}
            >
              {["NONE", "HALAL حلال ☪️", "VEGAN 🥦"].map((idx) => (
                <option
                  label={idx === 0 ? zeroLabel : idx}
                  value={idx}
                  key={idx}
                >
                  {idx === 0 ? zeroLabel : idx}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="controlIdAllergies">
            <Form.Label>
              <FoodAlergiesLabel />
            </Form.Label>
            <Form.Control
              name="allergies"
              as="textarea"
              rows="3"
              value={values.allergies}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.songs && errors.songs}
            />
            <Form.Text className="text-muted">
              <SongsHelp />
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="controlIdFootDiet">
            <Form.Label>
              <SongsLabel />
            </Form.Label>
            <Form.Control
              name="songs"
              as="textarea"
              rows="3"
              value={values.songs}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.songs && errors.songs}
            />
            <Form.Text className="text-muted">
              <SongsHelp />
            </Form.Text>
          </Form.Group>
          <Button
            className="mt-5"
            variant="primary"
            type="submit"
            size="lg"
            disabled={isSubmitting}
            block
          >
            {buttonText}
          </Button>
          {status && (
            <Alert variant="danger" className="mt-4">
              {status}
            </Alert>
          )}
          <Alert
            variant="success"
            className="mt-4"
            onClose={() => setShowConfirmation(false)}
            show={showConfirmation}
          >
            <AlertRSVPUpdated />
          </Alert>
        </Form>
      )}
    </Formik>
  )
}

export default RSVPForm
