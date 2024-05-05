import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: [
    {
      Type: () => <>Public transport</>,
      Details: () => (
        <>
          <p>
            Sèvres town hall is located in the center of Sèvres near Pont de
            Sèvres or la Seine musicale. There are several ways to go there
            according from where you're located.
          </p>
          <p>
            Here are the possible lines that you can take for the town hall:
            <ul>
              <li>
                Line 9: <strong>Pont de Sèvres</strong>
              </li>
              <li>
                Bus 171/426: Stop <strong>Sèvres Rive Gauche / Mairie</strong>
              </li>
            </ul>
          </p>
          <p>
            For the diner, if you really want to take public transport, here are
            the possible ways (from the town hall):{" "}
            <a href="https://www.google.com/maps/dir/Mairie+de+S%C3%A8vres,+54+Grande+Rue,+92310+S%C3%A8vres/Le+Domaine+de+B%C3%A9themont,+Golf+de+B%C3%A9themont,+Rue+du+Parc+de+B%C3%A9themont,+Poissy/@48.8920127,1.9947168,11z/am=t/data=!4m14!4m13!1m5!1m1!1s0x47e67ba430c00abb:0x2ef16e48729cf6f8!2m2!1d2.2127503!2d48.8247778!1m5!1m1!1s0x47e68ed05e00d80d:0xb7be89079ddaef3d!2m2!1d1.9985393!2d48.9120079!3e3?entry=ttu">
              {" "}
              Itinerary{" "}
            </a>
          </p>
        </>
      ),
      link: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
    },
  ],
  [LANGUAGE.FR]: [
    {
      Type: () => <>Transports publics</>,
      Details: () => (
        <>
          <p>
            La mairie de Sèvres est située au centre ville de Sèvres accessible
            depuis Paris via:
          </p>
          <p>
            <ul>
              <li>
                le metro ligne 9 direction <strong>Pont de Sèvres</strong>
              </li>
              <li>
                puis le bus 171/426: Arrêt{" "}
                <strong>Sèvres Rive Gauche / Mairie</strong>
              </li>
            </ul>
          </p>
          <p>
            Pour le dîner, si vous voulez prendre les transports en commun,
            voici les différentes possibilités (à partir de la mairie).:{" "}
            <a href="https://www.google.com/maps/dir/Mairie+de+S%C3%A8vres,+54+Grande+Rue,+92310+S%C3%A8vres/Le+Domaine+de+B%C3%A9themont,+Golf+de+B%C3%A9themont,+Rue+du+Parc+de+B%C3%A9themont,+Poissy/@48.8916277,1.8318539,10z/data=!4m15!4m14!1m5!1m1!1s0x47e67ba430c00abb:0x2ef16e48729cf6f8!2m2!1d2.2127503!2d48.8247778!1m5!1m1!1s0x47e68ed05e00d80d:0xb7be89079ddaef3d!2m2!1d1.9985393!2d48.9120079!3e3!5i3?entry=ttu">
              {" "}
              Itinéraire{" "}
            </a>
          </p>
        </>
      ),
      link: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
    },
  ],
  [LANGUAGE.ES]: [
    {
      Type: () => <>Transporte público</>,
      Details: () => (
        <>
          <p>
            La municipalidad de Sèvres está ubicada en el centro de Sèvres,
            cerca del Pont de Sèvres o de la Seine musicale. Hay varias formas
            de llegar allí dependiendo de dónde te encuentres.
          </p>
          <p>
            Aquí están las líneas posibles que puedes tomar para llegar a la
            municipalidad:
            <ul>
              <li>
                Line 9: <strong>Pont de Sèvres</strong>
              </li>
              <li>
                Bus 171/426: Parada <strong>Sèvres Rive Gauche / Mairie</strong>
              </li>
            </ul>
          </p>
          <p>
            Para la cena, si realmente quieres tomar transporte público, aquí
            están las posibles opciones (desde la municipalidad):{" "}
            <a href="https://www.google.com/maps/dir/Mairie+de+S%C3%A8vres,+54+Grande+Rue,+92310+S%C3%A8vres/Le+Domaine+de+B%C3%A9themont,+Golf+de+B%C3%A9themont,+Rue+du+Parc+de+B%C3%A9themont,+Poissy/@48.8920127,1.9947168,11z/am=t/data=!4m14!4m13!1m5!1m1!1s0x47e67ba430c00abb:0x2ef16e48729cf6f8!2m2!1d2.2127503!2d48.8247778!1m5!1m1!1s0x47e68ed05e00d80d:0xb7be89079ddaef3d!2m2!1d1.9985393!2d48.9120079!3e3?entry=ttu">
              {" "}
              Itinerario{" "}
            </a>
          </p>
        </>
      ),
      link: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
    },
  ],
}
