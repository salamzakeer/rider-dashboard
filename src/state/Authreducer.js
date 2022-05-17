export const initialState = {};
console.log(initialState, "==========");
export const actionType = {
  SET_USER: "SET_USER",
  SET_ADMIN: "SET_ADMIN",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    // default:
    case actionType.SET_ADMIN:
      return {
        ...state,
        admin: action.admin,
      };
    default:
      break;
  }
};

export default reducer;
