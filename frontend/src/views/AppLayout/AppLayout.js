import React from "react"
import { Route, Switch } from "react-router-dom"

import { Navigation } from "../../components/Navigation"
import { Footer } from "../../components/Footer"

import { Home } from "../../views/Home"
import { Schedule } from "../../views/Schedule"
import { Travel } from "../../views/Travel"
import { FAQ } from "../../views/FAQ"
import { RSVP } from "../../views/RSVP"

const AppLayout = () => (
  <>
    <main className="mb-4">
      <Navigation />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/schedule"} component={Schedule} />
        <Route exact path={"/travel"} component={Travel} />
        <Route exact path={"/faq"} component={FAQ} />
        <Route exact path={"/rsvp"} component={RSVP} />
      </Switch>
    </main>
    <Footer />
  </>
)

export default AppLayout
