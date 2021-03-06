const initialState = {
  users: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...state
      };
    case "GET_USER_REJECTED":
      return {
        ...state
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        users: action.payload.data.result
      };
      default:
      return state;
  }
};

export default user;
