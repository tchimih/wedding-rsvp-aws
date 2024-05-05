import React from "react"
import { Link } from "react-router-dom"
import Alert from "react-bootstrap/esm/Alert"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Heading: () => <>RSVP</>,
    SubHeadingAuthenticated: ({ user }) => (
      <span>
        <p>
          Hello <strong>{user.name}</strong> 👋
        </p>
        <p>We can't wait to see you!</p>
        <p>Use the form below to manage your RSVP.</p>
        <Alert key="info" variant="info">
          <p>
            Bear in mind that we are using this information to handle our
            booking, please ensure that every detail is tailored to your
            preferences and needs.
          </p>
          <p>
            However, we understand that unexpected events can occur, and plans
            may need to be adjusted. Please, let us know in such cases.
          </p>
        </Alert>
      </span>
    ),
    SubHeading: () => (
      <span>
        <Link to="/auth">Sign in</Link> to manage your RSVP. Don't have an
        account? <Link to="/auth/signup">Sign up</Link> now!
      </span>
    ),
  },
  [LANGUAGE.FR]: {
    Heading: () => <>Confirmation</>,
    SubHeadingAuthenticated: ({ user }) => (
      <span>
        <p>
          Bonjour <strong>{user.name}</strong> 👋
        </p>
        <p>Nous sommes impatients de vous voir!</p>
        <p>Utilisez le formulaire ci-dessous pour gérer votre confirmation.</p>
        <Alert key="info" variant="info">
          <p>
            Gardez à l'esprit que nous utilisons ces informations pour gérer
            notre réservation, veuillez donc vous assurer que chaque détail est
            adapté à vos préférences et besoins.
          </p>
          <p>
            Cependant, nous comprenons que des événements imprévus peuvent
            survenir et que des plans peuvent devoir être ajustés. S'il vous
            plaît, faites-nous savoir dans de tels cas.
          </p>
        </Alert>
      </span>
    ),
    SubHeading: () => (
      <span>
        <Link to="/auth">Sign in</Link> to manage your RSVP. Don't have an
        account? <Link to="/auth/signup">Sign up</Link> now!
      </span>
    ),
  },
  [LANGUAGE.ES]: {
    Heading: () => <>RSVP</>,
    SubHeadingAuthenticated: ({ user }) => (
      <span>
        <p>
          ¡Hola <strong>{user.name}</strong>! 👋
        </p>
        <p>¡Estamos ansiosos por verte!</p>
        <p>Utiliza el formulario a continuación para gestionar tu RSVP.</p>
        <Alert key="info" variant="info">
          <p>
            Ten en cuenta que estamos utilizando esta información para gestionar
            nuestra reserva, así que asegúrate de que cada detalle esté adaptado
            a tus preferencias y necesidades.
          </p>
          <p>
            Sin embargo, entendemos que pueden ocurrir eventos inesperados y que
            los planes pueden necesitar ajustarse. Por favor, avísanos en tales
            casos.
          </p>
        </Alert>
      </span>
    ),
    SubHeading: () => (
      <span>
        <Link to="/auth">Sign in</Link> to manage your RSVP. Don't have an
        account? <Link to="/auth/signup">Sign up</Link> now!
      </span>
    ),
  },
}
