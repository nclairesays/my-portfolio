import jsonData from "../../data/projects.json";

const initialState = jsonData;
// JSON.parse(JSON.stringify(jsonData));

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_MENU":
      return { ...state, expanded: payload.expanded };
    case "TOGGLE_LOAD":
      return { ...state, loading: payload.loading };
    case "TOGGLE_MODAL": {
      return { ...state, showModal: payload.showModal };
    }
    default:
      return state;
  }
};
