import React from "react"

import { LANGUAGE } from "../../actions/constants"

export default {
  [LANGUAGE.EN]: [
    {
      Title: () => <>Sèvres Town Hall</>,
      Date: () => null,
      Time: () => <>11.30am - 12.00am (UTC+2)</>,
      Location: () => <>Wedding</>,
      locationLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
      Address: () => (
        <>
          <p>54 Grande Rue</p>
          <p>92310 Sèvres, France.</p>
        </>
      ),
      mapLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
      Details: () => (
        <>
          <p>
            We joyfully come together to commemorate our civil wedding union,
            surrounded by our cherished friends and family
          </p>
        </>
      ),
    },
    {
      Title: () => <>Cosy diner</>,
      Date: () => <></>,
      Time: () => <>7.00pm - 11.00pm (UTC+2)</>,
      Location: () => <>Le Domaine de Béthemont</>,
      locationLink: "https://maps.app.goo.gl/rFRABUrW2VQXLVgt8",
      Address: () => (
        <>
          <p>Golf de Béthemont</p>
          <p>12 Rue du Parc de Béthemont</p>
          <p> 78300 Poissy</p>
        </>
      ),
      mapLink: "https://maps.app.goo.gl/rFRABUrW2VQXLVgt8",
      Details: () => (
        <>
          <p>
            The ceremony, dinner, and reception will be hosted at Golf de
            Béthemont, a charming family-operated golf facility situated within
            a beautifully refurbished historic estate in Poissy. As you may
            know, Caroline really loves golf :)
          </p>
          <p>
            Join us at this picturesque location as we gather with our beloved
            family and cherished friends to celebrate our union over a
            delightful dinner.
          </p>
        </>
      ),
    },
  ],
  [LANGUAGE.FR]: [
    {
      Title: () => <>Mairie de Sèvres</>,
      Date: () => null,
      Time: () => <>11h30 - 12h00am</>,
      Location: () => <>Mariage civil</>,
      locationLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
      Address: () => (
        <>
          <p>54 Grande Rue</p>
          <p>92310 Sèvres, France.</p>
        </>
      ),
      mapLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
      Details: () => (
        <>
          <p>
            Nous nous réunirons avec joie pour commémorer notre union civile à
            la mairie de Sèvres (92310).
          </p>
        </>
      ),
    },
    {
      Title: () => <>Dîner Cosy</>,
      Date: () => <></>,
      Time: () => <>19h00 - 23h00</>,
      Location: () => <>Le Domaine de Béthemont</>,
      locationLink: "https://maps.app.goo.gl/rFRABUrW2VQXLVgt8",
      Address: () => (
        <>
          <p>Golf de Béthemont</p>
          <p>12 Rue du Parc de Béthemont</p>
          <p> 78300 Poissy</p>
        </>
      ),
      mapLink: "https://maps.app.goo.gl/rFRABUrW2VQXLVgt8",
      Details: () => (
        <>
          <p>
            La célébration aura lieu au Golf de Béthemont à partir de 19h, un
            charmant établissement situé dans un domaine historique à Poissy.
            Comme vous le savez peut-être, Caroline adore le golf 😊
          </p>
        </>
      ),
    },
  ],
  [LANGUAGE.ES]: [
    {
      Title: () => <>Ayuntamiento de Sèvres</>,
      Date: () => null,
      Time: () => <>11.30am - 12.00am (UTC+2)</>,
      Location: () => <>Boda</>,
      locationLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
      Address: () => (
        <>
          <p>54 Grande Rue</p>
          <p>92310 Sèvres, France.</p>
        </>
      ),
      mapLink: "https://maps.app.goo.gl/7P33QNyV9N8E7N2U9",
      Details: () => (
        <>
          <p>
            Nos reunimos con alegría para conmemorar nuestra unión civil,
            rodeados de nuestros queridos amigos y familiares.
          </p>
        </>
      ),
    },
    {
      Title: () => <>Cena acogedora</>,
      Date: () => <></>,
      Time: () => <>7.00pm - 11.00pm (UTC+2)</>,
      Location: () => <>Le Domaine de Béthemont</>,
      locationLink: "https://maps.app.goo.gl/rFRABUrW2VQXLVgt8",
      Address: () => (
        <>
          <p>Golf de Béthemont</p>
          <p>12 Rue du Parc de Béthemont</p>
          <p> 78300 Poissy</p>
        </>
      ),
      mapLink: "https://maps.app.goo.gl/rFRABUrW2VQXLVgt8",
      Details: () => (
        <>
          <p>
            La ceremonia, la cena y la recepción se llevarán a cabo en el Golf
            de Béthemont, un encantador establecimiento familiar situado en una
            finca histórica bellamente restaurada en Poissy. Como probablemente
            sepas, a Caroline le encanta el golf :)
          </p>
          <p>
            Únete a nosotros en este pintoresco lugar mientras nos reunimos con
            nuestra amada familia y nuestros queridos amigos para celebrar
            nuestra unión durante una deliciosa cena.
          </p>
        </>
      ),
    },
  ],
}
