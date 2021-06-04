import axios from "axios";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import RootComponent from "./RootComponent";
import store, { persistor } from "./store";
import setAuthToken from "./utils/setAuthToken";

function App() {
  axios.defaults.baseURL = "http://localhost:5000/";

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
