const initialEditData = {
  editData: null,
};

export const EditDataReducer = (state = initialEditData, action) => {
  switch (action.type) {
    case "setEditData":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
