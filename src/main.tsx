import "./assets/css/ReactToastify.min.css";
import "./assets/css/main.min.css";
import "./i18n";
import "./assets/css/yekan.css";

import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { persistStore } from "redux-persist";
import store from "./store";

const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
        <ToastContainer position="top-center" />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
