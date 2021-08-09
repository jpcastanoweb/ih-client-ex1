import React, { useContext, useState } from "react"

import ProjectContext from "./../../context/projects/ProjectContext"

export default function Projects() {
  // Connect global State
  const context = useContext(ProjectContext)
  const { projects, darkMode, getProjects, createProject } = context

  // USESTATE: Local state

  const [newProject, setNewProject] = useState({
    name: "",
  })
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
  }

  return (
    <div>
      Hola soy todos los projects
      {projects.map((e) => {
        return <p>{e.name}</p>
      })}
      <p>Dark Mode: {darkMode ? "Activado" : "No Activado"}</p>
      <button
        onClick={(e) => {
          getProjects()
        }}
      >
        Get Projects
      </button>
      <hr />
      <h1>Create Project</h1>
      <form
        onSubmit={(e) => {
          sendForm(e)
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
        <button>Submit</button>
      </form>
    </div>
  )
}
