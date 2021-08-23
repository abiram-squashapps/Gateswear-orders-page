import { buyers } from "../constant/buyersData";
export const initialState = { buyers: buyers.data };

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_BUYER":
      return { ...state, buyers: [...state.buyers, action.payload] };
    case "DELETE_BUYER":
      return {
        ...state,
        buyers: state.buyers.filter((item) => item.id !== action.payload),
      };
    case "EDIT_BUYER":
      return {
        ...state,
        buyers: state.buyers.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}
