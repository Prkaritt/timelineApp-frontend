const successReducer = (success = {}, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        statusCode: action.payload.status,
        message: action.payload.data.message,
      };

    case "SUCCESSRESET":
      return (success = {});
    default:
      return {};
  }
};

export default successReducer;
