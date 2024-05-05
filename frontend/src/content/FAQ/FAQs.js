import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.ES]: [
    {
      Question: () => (
        <>¿Qué está planeado entre la ceremonia y la cena de celebración?</>
      ),
      Answer: () => (
        <>
          Entre la ceremonia y la cena, puedes disfrutar libremente de París y
          sus alrededores.
        </>
      ),
    },
    {
      Question: () => <>¿Se proporciona transporte al Golf de Béthemont?</>,
      Answer: () => (
        <>
          Entendemos que este lugar está bastante lejos del transporte público.
          Para el transporte al lugar, siéntete libre de organizar un viaje
          compartido o compartir un Uber. Para el viaje de regreso, el lugar
          puede organizar un taxi para llevarte a casa, o puedes optar por un
          Uber.
        </>
      ),
    },
    {
      Question: () => (
        <>¿Se permiten niños durante la ceremonia y la cena de celebración?</>
      ),
      Answer: () => (
        <>
          Sabemos que organizar el cuidado de los niños puede ser desafiante (y
          costoso ( ͡° ͜ʖ ͡°)). Por eso tus pequeños son bienvenidos en ambas
          ceremonias.
        </>
      ),
    },
  ],
  [LANGUAGE.EN]: [
    {
      Question: () => (
        <>What is planned between the ceremony and the celebration dinner?</>
      ),
      Answer: () => (
        <>
          Between the ceremony and dinner, you are free to enjoy Paris and its
          surroundings.
        </>
      ),
    },
    {
      Question: () => (
        <> Is there transportation provided to Golf de Béthemont?</>
      ),
      Answer: () => (
        <>
          We understand that this location is quite far from public
          transportation. For transportation to the venue, feel free to organize
          carpooling or share an Uber. For the return trip, the venue can
          arrange for a taxi to take you home, or you can opt for an Uber.
        </>
      ),
    },
    {
      Question: () => (
        <>Are children allowed during the ceremony and celebration dinner?</>
      ),
      Answer: () => (
        <>
          We know that arranging childcare can be challenging (and expensive ( ͡°
          ͜ʖ ͡°)). That's why your little ones are welcome at both ceremonies.
        </>
      ),
    },
  ],
  [LANGUAGE.FR]: [
    {
      Question: () => (
        <>
          Qu'est-ce qui est prévu entre la cérémonie et le dîner de célébration
          ?
        </>
      ),
      Answer: () => (
        <>
          Entre la cérémonie et le dîner, vous êtes libres de profiter de Paris
          et de ses environs.
        </>
      ),
    },
    {
      Question: () => (
        <>Y a-t-il un transport prévu pour le dîné de célébration ?</>
      ),
      Answer: () => (
        <>
          Nous sommes conscients que ce lieu est assez éloigné des transports en
          commun. Pour vous y rendre, n'hésitez pas à organiser un covoiturage
          ou à partager un Uber. Pour le retour, le domaine peut vous appeler un
          taxi pour rentrer chez vous, ou vous pouvez opter pour un Uber.
        </>
      ),
    },
    {
      Question: () => (
        <>
          Les enfants seront-ils autorisés durant la cérémonie et le dîner de
          célébration ?
        </>
      ),
      Answer: () => (
        <>
          Nous comprenons qu'il peut être difficile de faire garder les petits.
          C'est pourquoi vos enfants sont les bienvenus pendant les deux
          cérémonies.
        </>
      ),
    },
  ],
}
