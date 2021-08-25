export default function globalFilterReducer(state = "", action) {
  switch (action.type) {
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
}
