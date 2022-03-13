import { combineReducers } from "redux";
import navbarReducer from "./navbar/navbarReducer";
import modalReducer from "./modal/modalReducer";
import rawMaterialReducer from "./rawMaterial/rawMaterialReducer";
import recipeReducer from "./recipe/recipeReducer"
import generalReducer from "./general/generalReducer"
import ordersReducer from "./orders/ordersReducer"

const rootReducer = combineReducers({
  // Add your reducers here
  navbar: navbarReducer,
  modal: modalReducer,
  rawMaterial: rawMaterialReducer,
  recipe: recipeReducer,
  orders: ordersReducer,
  general: generalReducer,
});

export default rootReducer;
