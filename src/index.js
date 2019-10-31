import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Concurrent 모드용 API
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

serviceWorker.unregister();
