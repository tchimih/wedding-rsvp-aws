import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Header: () => <>Please Sign Up</>,
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    EmailHelp: () => (
      <>
        Register with the same email address that received the email invitation.
      </>
    ),
    passwordPlaceholder: "Password",
    SubmitButton: () => <>Sign Up</>,
    SubmitButtonLoading: () => <>Signing Up...</>,
    HaveAccountPrompt: () => (
      <>
        Already have an account? <Link to="/auth">Sign in here.</Link>
      </>
    ),
  },
  [LANGUAGE.FR]: {
    Header: () => <>Merci de crééer un compte</>,
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    EmailHelp: () => (
      <>
        Veuillez vous inscrire avec la même adresse e-mail qui a reçu
        l'invitation par e-mail{" "}
      </>
    ),
    passwordPlaceholder: "Password",
    SubmitButton: () => <>Sign Up</>,
    SubmitButtonLoading: () => <>Signing Up...</>,
    HaveAccountPrompt: () => (
      <>
        Vous disposez déjà d'un compte?{" "}
        <Link to="/auth">connectez-vous ici.</Link>
      </>
    ),
  },
  [LANGUAGE.ES]: {
    Header: () => <>Por favor, regístrese</>,
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    EmailHelp: () => (
      <>
        Ahora, regístrese con la misma dirección de correo electrónico que
        recibió la invitación por correo electrónico{" "}
      </>
    ),
    passwordPlaceholder: "Password",
    SubmitButton: () => <>Sign Up</>,
    SubmitButtonLoading: () => <>Signing Up...</>,
    HaveAccountPrompt: () => (
      <>
        Already have an account? <Link to="/auth">Sign in here.</Link>
      </>
    ),
  },
}
