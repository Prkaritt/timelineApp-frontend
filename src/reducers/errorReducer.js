const errorReducer = (error = {}, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        statusCode: action.payload.status,
        message: action.payload.data.message,
      };
    case "ERRORRESET":
      return (error = {});
    default:
      return {};
  }
};

export default errorReducer;
