import React from "react"
import useWindowSize from "react-use/lib/useWindowSize"
import Confetti from "react-confetti"

import { Header } from "./Header"
import { Details } from "./Details"
import styles from "./Home.module.scss"

function Home() {
  const { width, height } = useWindowSize()

  return (
    <>
      <div className={styles.container}>
        <div className="background">
          <Confetti width={width} height={height} />
          <Header />
          <Details />
        </div>
      </div>
    </>
  )
}

export default Home
