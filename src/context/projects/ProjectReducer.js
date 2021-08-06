/* eslint-disable import/no-anonymous-default-export */
// REDUCER - Athorized function to alter the global state

export default (globalState, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        ...globalState,
        projects: action.payload,
      }

    default:
      return globalState
  }
}
