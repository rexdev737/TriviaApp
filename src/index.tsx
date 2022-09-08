import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { QuizState, QuizAction, DispatchType } from "./types";

const store: Store<QuizState, QuizAction> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
