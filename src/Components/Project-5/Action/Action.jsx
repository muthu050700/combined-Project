export const setFormDetails = (field, value) => {
  return {
    type: "setFormDetails",
    payload: { field, value },
  };
};

export const clearForm = (data) => {
  return {
    type: "clearForm",
    payload: data,
  };
};

export const setEditData = (data) => {
  return {
    type: "setEditData",
    patload: { data },
  };
};

export const setData = (data) => {
  return {
    type: "setData",
    payload: { data },
  };
};
