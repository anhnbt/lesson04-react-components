import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Welcome from "./components/Welcome";
import "./global.css"; // external
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/SignIn";
const root = ReactDOM.createRoot(document.getElementById("root"));
// JSX
const element = <h1>Hello World!</h1>;

// Tên component phải viết hoa chữ cái đầu (để nó phân biệt với HTML element (phần tử HTML))

// // Hàm nặc danh (anonymous function)
// // "", '': String literal
// // expression: biểu thức
// const App = () => names.map((item) => <Headline value={item} />);

// // Destructuring object (Tách đối tượng)
// const Headline = ({ value }) => <p>Hello {value}</p>;

const name = "Mr. Chiếnnn";

{
  /* String literal */
}
{
  /* camelCase */
}
{
  /* <Welcome color="red" name="Chiến" /> */
}
root.render(<SignIn />);
