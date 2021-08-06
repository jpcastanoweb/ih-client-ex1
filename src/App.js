import "./App.css"
import Projects from "./components/Projects"
import Home from "./components/Home"
import NotFound from "./components/NotFound"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ProjectState from "./context/projects/ProjectState"

function App() {
  return (
    <>
      <ProjectState>
        <Router>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </ProjectState>
    </>
  )
}

export default App
