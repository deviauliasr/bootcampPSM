const initialState = {
  data: {
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/LogIn":
      return { ...state, data: action.payload };
    case "user/LogOut":
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
