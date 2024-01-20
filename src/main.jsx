import ReactDom from "react-dom/client";
import App from "./App";
import "./scss/styles.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
