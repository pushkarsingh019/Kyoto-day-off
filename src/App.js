import React, { useReducer } from "react";
import "./styles.css";

import NewTask from "./NewTask";
import TaskList from "./TaskList";

const initialState = [];
let nextId = 0;

function reducer(state, action) {
  switch (action.type) {
    case "NEW_TASK":
      return [
        ...state,
        {
          id: action.id,
          task: action.text
        }
      ];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);
    case "EDIT_TASK":
      console.log("in THE EDIT section");
      return state;
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const taskName = (name) => {
    dispatch({
      type: "NEW_TASK",
      text: name,
      id: nextId++
    });
  };

  const something = (id, option) => {
    if (option === "edit") {
      dispatch({ type: "EDIT_TASK", id });
    } else if (option === "delete") {
      dispatch({ type: "DELETE_TASK", id });
    } else {
      console.log("unexpected option");
    }
  };

  return (
    <div className="App">
      <h3>Day off in Kyoto</h3>
      <NewTask newTaskName={taskName} />
      <br />
      <TaskList tasks={state} onChange={something} />
    </div>
  );
}
