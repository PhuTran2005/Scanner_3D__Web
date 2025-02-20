import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { allReducer } from "./Reducer/index.tsx";
import { Provider } from "react-redux";
const store = createStore(allReducer);
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
