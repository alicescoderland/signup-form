import React from "react";
import Form from "./components/Form/Form"
import "./app.css";
import Image from "./components/Image/Image";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Form />
        <Image />
      </div>
    </React.Fragment>
  );
}

export default App;
