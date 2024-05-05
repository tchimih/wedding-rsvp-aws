import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    AlertNoEmail: () => (
      <>
        Whoops, it looks like we don't have your email address or you did not
        confirm your presence by clicking on the button below.
        <br />
        If even by clicking the button and confirming your presence does not
        work, email us at{" "}
        <strong>
          <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>
        </strong>{" "}
        so we can update our records.
      </>
    ),
    submitButtonText: "Submit RSVP",
    updateButtonText: "Update RSVP",
    yesLabel: "Yes",
    noLabel: "No",
    WeddingFormHeader: () => <>Wedding</>,
    NumberOfGuestsLabel: () => <>Number of guests attending</>,
    zeroLabel: "Can't Attend",
    NumberOfGuestsHelp: () => (
      <>
        The number of your guests (including yourself & people that you want to
        bring) that will be in attendance.
      </>
    ),
    TransportationLabel: () => (
      <>Would you like bus transportation to/from the diner party?</>
    ),
    TransportationHelp: () => (
      <>
        We'll try to do our best to see whether that are free people that can
        take you to the diner party!
      </>
    ),
    TransportationHelpinfo: () => (
      <>
        Make sure to reachout to us, we will create a WhatsApp group to
        synchronise.
      </>
    ),
    FoodDietLabel: () => <>Meal preference? </>,
    FoodDietLabelHelper: () => (
      <>We will do our best to satisfy your meal preference!</>
    ),
    FoodAlergiesLabel: () => (
      <>Do you have any dietary restrictions we should be aware of ?</>
    ),
    SongsLabel: () => <>Song requests</>,
    SongsHelp: () => (
      <>Let us know which songs will keep you partying all night!</>
    ),
    AlertRSVPUpdated: () => <>Thanks for your RSVP!</>,
    townHallConfirmation: "I am coming to the town hall",
    dinerConfirmation: "I am coming to the diner",
  },
  [LANGUAGE.FR]: {
    AlertNoEmail: () => (
      <>
        Oups, il semble que nous n'ayons pas votre adresse e-mail ou que vous
        n'ayez pas confirmé votre présence en cliquant sur le bouton ci-dessous.
        <br />
        Même en cliquant sur le bouton et en confirmant votre présence, si cela
        ne fonctionne pas, envoyez-nous un e-mail à{" "}
        <strong>
          <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>
        </strong>{" "}
        afin que nous puissions mettre à jour nos dossiers.
      </>
    ),
    submitButtonText: "Soumettre RSVP",
    updateButtonText: "Mettre à jour RSVP",
    yesLabel: "Oui",
    noLabel: "Non",
    WeddingFormHeader: () => <>Mariage</>,
    NumberOfGuestsLabel: () => <>Nombre d'invités présents</>,
    zeroLabel: "Ne peut pas participer",
    NumberOfGuestsHelp: () => (
      <>
        Le nombre de vos invités (y compris vous-même et les personnes que vous
        souhaitez inviter) qui seront présents.
      </>
    ),
    TransportationLabel: () => (
      <>
        Avez-vous un transport de prévu pour vous rendre à la soirée dînatoire ?
      </>
    ),
    TransportationHelp: () => (
      <>
        Nous ferons de notre mieux pour voir s'il y a des personnes disponibles
        pour vous emmener à la soirée dînatoire !
      </>
    ),
    TransportationHelpinfo: () => (
      <>
        Dans ce cas, contactez-nous! Nous allons essayer de crééer un group
        WhatsApp afin de mieux s'organiser entre personnes.
      </>
    ),
    FoodDietLabel: () => <>Préférence alimentaire ? </>,
    FoodDietLabelHelper: () => (
      <>We will do our best to satisfy your meal preference!</>
    ),
    FoodAlergiesLabel: () => <>Avez-vous des allergies alimentaires ?</>,
    SongsLabel: () => <>Demandes de chansons</>,
    SongsHelp: () => (
      <>Indiquez-nous quelles chansons vous feront danser toute la nuit !</>
    ),
    AlertRSVPUpdated: () => <>Merci pour votre RSVP !</>,
    townHallConfirmation: "Je serai présent à la cérémonie civile à la mairie",
    dinerConfirmation: "Je serai présent au dîné de célébration",
  },
  [LANGUAGE.ES]: {
    AlertNoEmail: () => (
      <>
        Ups, parece que no tenemos tu dirección de correo electrónico o que no
        has confirmado tu asistencia haciendo clic en el botón de abajo.
        <br />
        Incluso si haces clic en el botón y confirmas tu asistencia, si no
        funciona, envíanos un correo electrónico a{" "}
        <strong>
          <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>
        </strong>{" "}
        para que podamos actualizar nuestros registros.
      </>
    ),
    submitButtonText: "Enviar RSVP",
    updateButtonText: "Actualizar RSVP",
    yesLabel: "Sí",
    noLabel: "No",
    WeddingFormHeader: () => <>Boda</>,
    NumberOfGuestsLabel: () => <>Número de invitados presentes</>,
    zeroLabel: "No puede asistir",
    NumberOfGuestsHelp: () => (
      <>
        El número de tus invitados (incluyéndote a ti mismo y a las personas que
        desees invitar) que estarán presentes.
      </>
    ),
    TransportationLabel: () => (
      <>¿Tienes transporte planeado para llegar a la cena de la noche?</>
    ),
    TransportationHelp: () => (
      <>
        ¡Haremos todo lo posible para ver si hay personas disponibles para
        llevarte a la cena de la noche!
      </>
    ),
    TransportationHelpinfo: () => (
      <>
        En ese caso, ¡contáctanos! ¡Intentaremos crear un grupo de WhatsApp para
        organizar mejor entre las personas.
      </>
    ),
    FoodDietLabel: () => <>¿Preferencia alimentaria?</>,
    FoodDietLabelHelper: () => (
      <>
        ¡Haremos nuestro mejor esfuerzo para satisfacer tu preferencia de
        comida!
      </>
    ),
    FoodAlergiesLabel: () => <>¿Tienes alguna alergia alimentaria?</>,
    SongsLabel: () => <>Solicitudes de canciones</>,
    SongsHelp: () => (
      <>¡Indícanos qué canciones te harán bailar toda la noche!</>
    ),
    AlertRSVPUpdated: () => <>¡Gracias por tu RSVP!</>,
    townHallConfirmation: "Voy a estar presente en la ceremonia civil en el municipio",
    dinerConfirmation: "estaré presente en la cena",
  },
}
