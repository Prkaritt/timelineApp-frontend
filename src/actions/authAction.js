import * as api from "./../api/api";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const result = await api.signIn(formData);

    dispatch({ type: "SIGNIN", payload: result });
    dispatch({ type: "SUCCESS", payload: result });
    await setTimeout(() => {
      dispatch({ type: "SUCCESSRESET" });
      history.push("/");
    }, 2000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: error.response });
    setTimeout(() => {
      dispatch({ type: "ERRORRESET" });
    }, 5000);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const result = await api.signUp(formData);

    dispatch({ type: "SIGNUP", payload: result });
    dispatch({ type: "SUCCESS", payload: result });
    setTimeout(() => {
      dispatch({ type: "SUCCESSRESET" });
      history.push("/");
    }, 2000);
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response });
    setTimeout(() => {
      dispatch({ type: "ERRORRESET" });
    }, 5000);
  }
};
