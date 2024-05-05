import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Header: () => <>Please Sign In</>,
    SubmitButton: () => <>Sign In</>,
    SubmitButtonLoading: () => <>Signing In...</>,
    NoAccountPrompt: () => (
      <>
        Don't have an account? <Link to="/auth/signup">Sign up here.</Link>
      </>
    ),
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
  },
  [LANGUAGE.FR]: {
    Header: () => <>Merci de vous authentifier</>,
    SubmitButton: () => <>Connexion</>,
    SubmitButtonLoading: () => <>Authentification...</>,
    NoAccountPrompt: () => (
      <>
        Vous n'avez pas de compte ?{" "}
        <a href="/auth/signup">Inscrivez-vous ici.</a>
      </>
    ),
    emailPlaceholder: "Email",
    passwordPlaceholder: "Mot de passe",
  },
  [LANGUAGE.ES]: {
    Header: () => <>Por favor, inicie sesión</>,
    SubmitButton: () => <>Iniciar sesión</>,
    SubmitButtonLoading: () => <>Signing In...</>,
    NoAccountPrompt: () => (
      <>
        ¿No tienes una cuenta? <a href="/auth/signup">Regístrate aquí.</a>{" "}
      </>
    ),
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
  },
}
