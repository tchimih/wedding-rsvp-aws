import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

import { selectLanguage } from "../../../utilities/cookies"
import { headers } from "../../../content/Home"

import styles from "./Header.module.scss"

const Padding = () => {
  const [cookies] = useCookies(["language"])
  return <Jumbotron fluid className={styles.header}></Jumbotron>
}

export default Padding
