import React from "react"

import { LANGUAGE } from "../../actions/constants"

export const confirmationContent = {
  [LANGUAGE.EN]: {
    modalTitle: "RSVP to the wedding",
    modalContent:
      "Please make sure to select your presence whether in the town hall, diner or both",
    buttonText: "Confirm my presence",
    townHallText: "Sèvres town hall for the civil wedding",
    dinerText: "Domaine de Bethemont for the wedding diner celebration",
    unauthText:
      "Whoops, it looks like you are not authenticated, make sure you authenticate first!",
  },
  [LANGUAGE.FR]: {
    modalTitle: "Confirmer votre présence au mariage",
    modalContent:
      "Veuillez vous assurer de sélectionner votre présence que ce soit à la mairie, au dîner ou aux deux",
    buttonText: "Confirmer ma présence",
    townHallText: "Mairie de Sèvres pour la célébration civile",
    dinerText: "Domaine de Béthemont pour le dîner de célébration",
    unauthText:
      "Oups, il semble que vous ne soyez pas authentifié. Assurez-vous de vous authentifier d'abord!",
  },
  [LANGUAGE.ES]: {
    modalTitle: "Confirmar tu presencia en la boda",
    modalContent:
      "Asegúrese de seleccionar su presencia ya sea en el ayuntamiento, la cena o ambos",
    buttonText: "Confirmar mi presencia",
    townHallText: "Ayuntamiento de Sèvres para la celebración civil",
    dinerText: "Domaine de Béthemont para la cena de celebración",
    unauthText:
      "¡Ups! Parece que no estás autenticado, asegúrate de autenticarte primero!",
  },
}
