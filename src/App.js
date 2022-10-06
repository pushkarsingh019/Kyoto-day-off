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
      console.log(`Changing the value of ${action.id} to ${action.updateText}`);
      console.log(state[action.id].task);
      state[action.id].task = action.updateText;
      console.log(state[action.id].task);
      return state;
    default:
      return state;
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

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", id });
  };

  const updateTask = (updateText, id) => {
    dispatch({
      type: "EDIT_TASK",
      updateText: updateText.task,
      id
    });
  };

  return (
    <div className="App">
      <h3>Day off in Kyoto</h3>
      <NewTask newTaskName={taskName} />
      <br />
      <TaskList tasks={state} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}
