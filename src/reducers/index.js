import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import loanReducer from "./loanReducer";
import loansReducer from "./loansReducer";
import portfolioReducer from "./portfolioReducer";

const persistConfig = {
  key: "auth",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export default combineReducers({
  alert: alertReducer,
  auth: persistedReducer,
  portfolio: portfolioReducer,
  loans: loansReducer,
  loan: loanReducer,
});
