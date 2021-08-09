import React, { useContext, useState, useEffect } from "react"

import ProjectContext from "./../../context/projects/ProjectContext"

export default function Projects() {
  // Connect global State
  const context = useContext(ProjectContext)
  const {
    projects,
    darkMode,
    getProjects,
    createProject,
    editProject,
    deleteProject,
  } = context

  // USESTATE: Local state

  const [newProject, setNewProject] = useState({
    name: "",
  })
  const [editionMode, setEditionMode] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    })
  }
  const sendForm = (event) => {
    event.preventDefault()
    createProject(newProject)
    setNewProject({
      name: "",
    })
  }

  const flipEditionMode = (element, event) => {
    event.preventDefault()
    setEditionMode(true)
    setNewProject(element)
  }

  const sendEditProject = (e) => {
    e.preventDefault()
    editProject(newProject)
    setNewProject({
      name: "",
    })
    setEditionMode(false)
  }

  const sendDeleteProject = (element, event) => {
    event.preventDefault()
    console.log("Submitting delete project for ", element)
    deleteProject(element._id)
  }

  // USEFFECT

  useEffect(() => {
    console.log("Passing through useEffect")
    getProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>All Projects</h1>
      <p>Dark Mode: {darkMode ? "Activado" : "No Activado"}</p>
      {/* <button
        onClick={(e) => {
          getProjects()
        }}
      >
        Get Projects
      </button> */}
      <hr />
      <h1>Create Project</h1>

      <form
        onSubmit={(e) => {
          editionMode ? sendEditProject(e) : sendForm(e)
        }}
      >
        <input
          name="name"
          type="text"
          value={newProject.name}
          onChange={(e) => {
            handleChange(e)
          }}
        ></input>
        {editionMode ? <button>Edit</button> : <button>Submit</button>}
      </form>
      {projects.length === 0 ? (
        <p>There's no projects</p>
      ) : (
        projects.map((element, i) => {
          return (
            <div key={i}>
              <p>{element.name}</p>
              <button
                onClick={(event) => {
                  flipEditionMode(element, event)
                }}
              >
                Editar
              </button>
              <button onClick={(e) => sendDeleteProject(element, e)}>
                Borrar
              </button>
            </div>
          )
        })
      )}
    </div>
  )
}
