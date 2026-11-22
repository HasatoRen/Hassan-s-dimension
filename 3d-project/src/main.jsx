import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // just imported the app component from the app.jsx file.
import "./index.css"; // imported the index.css file to apply the styles to the app component.

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// we first created a root in the reactDom which calls the element with the id of root and then we rendered the app component inside it.
