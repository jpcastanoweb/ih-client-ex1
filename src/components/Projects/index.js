import React, { useContext } from "react"

import ProjectContext from "./../../context/projects/ProjectContext"

export default function Projects() {
  const context = useContext(ProjectContext)
  const { projects, darkMode, usuario, getProjects } = context

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
    </div>
  )
}
