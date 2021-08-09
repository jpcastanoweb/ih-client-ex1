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

  const createProject = async (project) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/projects/create",
        project
      )
      getProjects()
      return res
    } catch (error) {
      console.log("Error sending new project to server: ", error.message)
    }
  }

  const editProject = async (project) => {
    try {
      const res = await axios.post("http://localhost:3001/api/projects/edit", {
        projectId: project._id,
        name: project.name,
      })
      getProjects()
      return res
    } catch (error) {
      console.log("Error editing project", error.message)
    }
  }

  const deleteProject = async (projectId) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/projects/delete",
        {
          projectId,
        }
      )
      getProjects()
      return res
    } catch (error) {
      console.log("Error sending delete form to backend", error.message)
    }
  }
  // 4. RETURN
  return (
    <ProjectContext.Provider
      value={{
        projects: globalState.projects,
        darkMode: true,
        getProjects,
        createProject,
        editProject,
        deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
