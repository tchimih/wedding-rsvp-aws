import get from "lodash/get"

import {
  signUpWithCognito,
  signInWithCognito,
  signOutWithCognito,
  currentAuthenticatedUserWithCognito,
  getItemFromDynamo,
  putItemToDynamo,
} from "../services"

import { APP } from "./constants"

export const initializeApp = async (dispatch) => {
  const CognitoUser = await currentAuthenticatedUserWithCognito()

  if (CognitoUser) {
    const {
      attributes: { sub: username, name, email },
    } = CognitoUser

    dispatch({
      type: APP.SET.INITIALIZE_USER,
      payload: {
        username,
        name,
        email,
      },
    })
  }
}

export const signUp = async (
  { name, email, password },
  setSubmitting,
  setStatus,
  history,
  dispatch
) => {
  try {
    const { userSub: username } = await signUpWithCognito({
      username: email,
      password,
      attributes: {
        email,
        name,
      },
    })

    await signInWithCognito(username, password)

    dispatch({
      type: APP.SET.USER_SIGN_IN,
      payload: {
        username,
        name,
        email,
      },
    })
  } catch (error) {
    const { message } = error
    setStatus(message)
    dispatch({
      type: APP.SET.USER_ERROR,
      payload: message,
    })
  }

  setSubmitting(false)
}

export const signIn = async (
  { email: providedEmail, password },
  setSubmitting,
  setStatus,
  history,
  dispatch
) => {
  try {
    const CognitoUser = await signInWithCognito(providedEmail, password)

    const {
      attributes: { sub: username, name, email },
    } = CognitoUser

    dispatch({
      type: APP.SET.USER_SIGN_IN,
      payload: {
        username,
        name,
        email,
      },
    })
  } catch (error) {
    let { message } = error

    setStatus(message)
    dispatch({
      type: APP.SET.USER_ERROR,
      payload: message,
    })
  }
  setSubmitting(false)
}

export const signOut = async (dispatch) => {
  try {
    await signOutWithCognito()
    dispatch({
      type: APP.SET.USER_SIGN_OUT,
    })
  } catch (error) {
    const { message } = error
    dispatch({
      type: APP.SET.USER_ERROR,
      payload: message,
    })
  }
}

export const fetchUserRSVPInformation = async (email, dispatch) => {
  try {
    const { Item } = await getItemFromDynamo({
      Email: email.toLowerCase(),
      Domain: "RSVP",
    })

    const { Item: ConfirmationItem } = await getItemFromDynamo({
      Email: email.toLowerCase(),
      Domain: "RSVP_CONFIRMATION",
    })

    const allowed = Item
    const confirmed = ConfirmationItem

    dispatch({
      type: APP.SET.RSVP,
      payload: {
        allowed,
        confirmed,
      },
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const putUserConfirmation = async (
  { email },
  choices,
  setShowConfirmation,
  dispatch
) => {
  const comingToTownHallFormatted = choices.some(
    (choice) => choice.id == "town_hall" && choice.confirmed
  )
  const comingToDinerFormatted = choices.some(
    (choice) => choice.id == "diner" && choice.confirmed
  )
  try {
    await putItemToDynamo({
      Email: email.toLowerCase(),
      Domain: "RSVP",
      Data: {},
      comingToTownHall: comingToTownHallFormatted,
      comingToDiner: comingToDinerFormatted,
    })
    await fetchUserRSVPInformation(email, dispatch)

    setShowConfirmation(true)

    // dismiss alert
    setTimeout(() => setShowConfirmation(false), 3000)
  } catch (error) {
    console.error(error)
  }
}

export const putUserRSVPInformation = async (
  {
    email,
    comingToTheDiner,
    comingToTheTownHall,
    comingToDiner,
    weddingGuests,
    needTransport,
    mealPreference,
    allergies,
    songs,
  },
  setSubmitting,
  setStatus,
  setShowConfirmation,
  dispatch
) => {
  try {
    await putItemToDynamo({
      Email: email.toLowerCase(),
      Domain: "RSVP_CONFIRMATION",
      ConfirmedGuests: weddingGuests,
      SongsRequest: songs ? { Songs: songs } : {},
      NeedTransport: needTransport,
      MealPreference: mealPreference,
      Allergies: allergies,
      comingToTownHall: comingToTheTownHall,
      comingToDiner: comingToTheDiner,
      Data: {
        Wedding: {
          ConfirmedGuests: weddingGuests,
        },
      },
    })
    await fetchUserRSVPInformation(email, dispatch)

    setShowConfirmation(true)

    // dismiss alert
    setTimeout(() => setShowConfirmation(false), 3000)
  } catch (error) {
    const { message } = error
    setStatus(message)
  }
  setSubmitting(false)
}
