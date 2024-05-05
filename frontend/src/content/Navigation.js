import React from "react"

import { LANGUAGE } from "../actions/constants"

export default {
  [LANGUAGE.EN]: {
    schedule: () => <span>Schedule</span>,
    travel: () => <span>Travel</span>,
    thingsToDo: () => <span>Things to Do</span>,
    faq: () => <span>FAQs</span>,
    rsvp: () => <span>RSVP</span>,
    signOut: () => <span>Sign Out</span>,
    signIn: () => <span>Sign In</span>,
    manageRsvp: () => <span>Manage RSVP</span>,
  },
  [LANGUAGE.ES]: {
    schedule: () => <span>Horario</span>,
    travel: () => <span>Viaje</span>,
    thingsToDo: () => <span>Actividades</span>,
    faq: () => <span>FAQs</span>,
    rsvp: () => <span>Confirmación</span>,
    signOut: () => <span>Deconexión</span>,
    signIn: () => <span>Conexión</span>,
    manageRsvp: () => <span>Administrar</span>,
  },
  [LANGUAGE.FR]: {
    schedule: () => <span>Agenda</span>,
    travel: () => <span>Voyage</span>,
    thingsToDo: () => <span>Que faire?</span>,
    faq: () => <span>FAQs</span>,
    rsvp: () => <span>Confirmation</span>,
    signOut: () => <span>Déconnexion</span>,
    signIn: () => <span>Connexion</span>,
    manageRsvp: () => <span>Gérer la réservation</span>,
  },
}
