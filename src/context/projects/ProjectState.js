import axios from "axios"
import React, { useReducer } from "react"
import ProjectContext from "./ProjectContext"
import ProjectReducer from "./ProjectReducer"

const ProjectState = (props) => {
  // 1. Initial State
  const initialState = {
    projects: [],
  }

  // 2. DISPATCHING and REDUCERS
  const [globalState, dispatch] = useReducer(ProjectReducer, initialState)

  // 3. Functions
  // Will help us capture the events from the components

  const getProjects = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/projects")
      const updatedProjects = res.data

      dispatch({
        type: "GET_PROJECTS",
        payload: updatedProjects,
      })
    } catch (error) {
      console.log("Error fetching all projects and dispatching: ", error)
    }
  }

  // 4. RETURN
  return (
    <ProjectContext.Provider
      value={{
        projects: globalState.projects,
        darkMode: true,
        getProjects,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
