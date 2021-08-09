import axios from "axios"
import React, { useReducer } from "react"
import CarContext from "./CarContext"
import CarReducer from "./CarReducer"

const CarState = (props) => {
  // 1. initial state
  const initialState = {
    cars: [],
  }

  // 2. DISPATCH and REDUCER
  const [globalState, dispatch] = useReducer(CarReducer, initialState)

  // 3. FUNCTIONS
  // Will help us capture the events from the components

  const getCars = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/cars`)
      const newData = res.data

      dispatch({
        type: "GET_CARS",
        payload: newData,
      })
    } catch (error) {
      console.log("Error fetching all cars and dispatching: ", error)
    }
  }

  const createCar = async (car) => {
    console.log(car)
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/cars/create`,
        {
          car,
        }
      )
      getCars()
      return res
    } catch (error) {
      console.log("Error sending create car to backend", error.message)
    }
  }

  const editCar = async (car) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/cars/edit`,
        {
          carId: car._id,
          car,
        }
      )
      getCars()
      return res
    } catch (error) {
      console.log("Error sending edit car to backend", error.message)
    }
  }

  const deleteCar = async (carId) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/cars/delete`,
        {
          carId,
        }
      )
      getCars()
      return res
    } catch (error) {
      console.log("Error sending delete car to backend", error.message)
    }
  }

  // 4. RETURN
  return (
    <CarContext.Provider
      value={{ cars: globalState.cars, getCars, createCar, editCar, deleteCar }}
    >
      {props.children}
    </CarContext.Provider>
  )
}

export default CarState
