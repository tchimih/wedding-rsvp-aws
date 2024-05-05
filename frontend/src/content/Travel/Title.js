import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Heading: () => <>Travel</>,
    SubHeading: () => (
      <>
        We're getting married in a region called{" "}
        <strong>Sèvres, haut-de-seine (92)</strong>, the wedding dinner will be
        located in <strong>Poissy</strong>. Here's info on how to get there and
        where to stay. There are buses, subway and, train options depending on
        your location; however, if you want to enjoy the area, we recommend to
        rent a car.
      </>
    ),
  },
  [LANGUAGE.FR]: {
    Heading: () => <>Voyage</>,
    SubHeading: () => (
      <>
        <p>
          Nous nous marions dans la ville de{" "}
          <strong>Sèvres, haut-de-seine (92)</strong>. Le dîné quant à lui aura
          lieu au domaine de Bethemont situé à <strong>Poissy</strong>.
        </p>
        <p>
          Voici des informations sur comment s'y rendre et où séjourner. Il y a
          des bus, un métro et options de train en fonction de votre
          emplacement; cependant, si vous voulez profiter de la région, nous
          vous recommandons de louer une voiture.
        </p>
      </>
    ),
  },
  [LANGUAGE.ES]: {
    Heading: () => <>Viaje</>,
    SubHeading: () => (
      <>
        Nos casaremos en una región llamada{" "}
        <strong>Sèvres, haut-de-seine (92)</strong>, la cena de bodas será
        situado en <strong>Poissy</strong>. Aquí está Información sobre cómo
        llegar y dónde alojarse. Hay autobuses, metro y, opciones de tren
        dependiendo de su ubicación; sin embargo, si quieres disfrutar la zona,
        recomendamos alquilar un coche.
      </>
    ),
  },
}
