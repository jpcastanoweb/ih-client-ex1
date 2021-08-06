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
      const res = await axios.get("http://localhost:3001/api/cars")
      const newData = res.data

      dispatch({
        type: "GET_CARS",
        payload: newData,
      })
    } catch (error) {
      console.log("Error fetching all cars and dispatching: ", error)
    }
  }

  // 4. RETURN
  return (
    <CarContext.Provider value={{ cars: globalState.cars, getCars }}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarState
