import { combineReducers } from "redux";
import { FormReducer } from "../../../../Reducer/FormReducer";
import { DataReducer } from "../../../../Reducer/DataReducer";
import { EditDataReducer } from "../../../../Reducer/EditDataReducer";

export const CombineReducer = combineReducers({
  formReducer: FormReducer,
  dataReducer: DataReducer,
  editDataReducer: EditDataReducer,
});
