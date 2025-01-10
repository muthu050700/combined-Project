const dataState = {
  data: [],
};

export const DataReducer = (state = dataState, action) => {
  switch (action.type) {
    case "setData":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
