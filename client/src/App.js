import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">
            <InputTodo />
            <ListTodos />
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
