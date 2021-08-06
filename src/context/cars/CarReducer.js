/* eslint-disable import/no-anonymous-default-export */
export default (globalState, action) => {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...globalState,
        cars: action.payload,
      }
    default:
      return globalState
  }
}
