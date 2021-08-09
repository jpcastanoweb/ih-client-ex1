import React, { useContext, useEffect, useState } from "react"
import CarContext from "./../../context/cars/CarContext"

export default function Cars() {
  //GLOBAL STATE
  const ctxCar = useContext(CarContext)
  const { cars, getCars, createCar, editCar, deleteCar } = ctxCar

  // LOCAL STATE

  // ---- STATE

  const [currentCar, setCurrentCar] = useState({
    maker: "",
    model: "",
    color: "",
    year: 2021,
  })

  const [editMode, setEditMode] = useState(false)

  // ---- FUNCTIONS

  const handleChange = (e) => {
    e.preventDefault()
    setCurrentCar({
      ...currentCar,
      [e.target.name]: e.target.value,
    })
  }

  const submitCreateCar = (e) => {
    e.preventDefault()
    createCar(currentCar)
    setCurrentCar({
      maker: "",
      model: "",
      color: "",
      year: 2021,
    })
  }

  const submitEditCar = (e) => {
    e.preventDefault()
    editCar(currentCar)
    setCurrentCar({
      maker: "",
      model: "",
      color: "",
      year: 2021,
    })
    setEditMode(false)
  }

  const submitDeleteCar = (e, element) => {
    e.preventDefault()
    deleteCar(element._id)
  }

  // USEFFECT

  useEffect(() => {
    getCars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Cars</h1>
      <form
        onSubmit={(e) => {
          if (editMode) {
            submitEditCar(e)
          } else {
            submitCreateCar(e)
          }
        }}
      >
        Maker:
        <input
          name="maker"
          value={currentCar.maker}
          type="text"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <br />
        Model:
        <input
          name="model"
          value={currentCar.model}
          type="text"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <br />
        Color:
        <input
          name="color"
          value={currentCar.color}
          type="text"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <br />
        Year:
        <input
          name="year"
          value={currentCar.year}
          type="number"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <br />
        <button>{editMode ? "Update" : "Submit"}</button>
      </form>
      <hr />
      <h1>List of all cars</h1>
      <ul style={{ paddingLeft: "0px" }}>
        {cars.map((element, i) => {
          return (
            <div key={i}>
              Maker: {element.maker}, Model: {element.model}, Color:{" "}
              {element.color}, Year: {element.year}
              <br />
              <button
                onClick={(e) => {
                  setEditMode(true)
                  setCurrentCar(element)
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  submitDeleteCar(e, element)
                }}
              >
                Delete
              </button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
