import "./App.css"
import Projects from "./components/Projects"
import Cars from "./components/Cars"
import Home from "./components/Home"
import NotFound from "./components/NotFound"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ProjectState from "./context/projects/ProjectState"
import CarState from "./context/cars/CarState"

function App() {
  return (
    <>
      <ProjectState>
        <CarState>
          <Router>
            <Switch>
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/cars" component={Cars} />
              <Route exact path="/" component={Home} />

              <Route component={NotFound} />
            </Switch>
          </Router>
        </CarState>
      </ProjectState>
    </>
  )
}

export default App
