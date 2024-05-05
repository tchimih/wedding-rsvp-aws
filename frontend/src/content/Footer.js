import React from "react"
import Emoji from "react-emoji-render"
import Octicon, { MarkGithub } from "@primer/octicons-react"

import { LANGUAGE } from "../actions/constants"

export default {
  [LANGUAGE.EN]: {
    Content: () => (
      <>
        <p>
          Contact us at{" "}
          <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>
          .
        </p>
        <p>
          <Emoji text="Made with 💚 in Sèvres by Anis & Caroline (but mostly Anis)." />
        </p>
        <p>
          <a
            href="https://github.com/tchimih"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>{" "}
          available on <Octicon icon={MarkGithub} size={16} />
        </p>
      </>
    ),
  },
  [LANGUAGE.FR]: {
    Content: () => (
      <>
        <p>
          Contactez nous à l'email{" "}
          <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>
          .
        </p>
        <p>
          <Emoji text="Fait aved plein d'💚 depuis Sèvres par Anis & Caroline (mais surtout Anis)." />
        </p>
        <p>
          <a
            href="https://github.com/tchimih"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>{" "}
          disponible sur <Octicon icon={MarkGithub} size={16} />
        </p>
      </>
    ),
  },
  [LANGUAGE.ES]: {
    Content: () => (
      <>
        <p>
          Contacta con nosotros en{" "}
          <a href="mailto:anisetcaroline@gmail.com">anisetcaroline@gmail.com</a>
          .
        </p>
        <p>
          <Emoji text="Made with 💚 in Sèvres by Anis & Caroline (but mostly Anis)." />
        </p>
        <p>
          <a
            href="https://github.com/tchimih"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>{" "}
          available on <Octicon icon={MarkGithub} size={16} />
        </p>
      </>
    ),
  },
}
