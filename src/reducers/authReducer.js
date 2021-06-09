const authReducer = (user = {}, action) => {
  switch (action.type) {
    case "SIGNIN":
    case "SIGNUP":
      const data = {
        user: action.payload.data.user,
        token: action.payload.data.token,
      };
      localStorage.setItem("myProfile", JSON.stringify(data));
      return data;

    case "USER_EXISTS":
      return action.payload;
    case "LOGOUT":
      localStorage.clear();

      return {};
    default:
      return user;
  }
};

export default authReducer;
