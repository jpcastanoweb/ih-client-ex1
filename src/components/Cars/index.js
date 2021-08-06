import React, { useContext } from "react"
import CarContext from "./../../context/cars/CarContext"

export default function Cars() {
  const ctxCar = useContext(CarContext)
  const { cars, getCars } = ctxCar

  return (
    <div>
      <h1>This is a list of cars:</h1>
      <button
        onClick={() => {
          getCars()
        }}
      >
        Get all cars
      </button>
      <ul>
        {cars.map((e) => {
          return (
            <>
              Maker: {e.maker}, Model: {e.model}, Color: {e.color}, Year:{" "}
              {e.year}
              <br />
            </>
          )
        })}
      </ul>
    </div>
  )
}
