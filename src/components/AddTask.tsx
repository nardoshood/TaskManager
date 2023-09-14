import React from "react";
import { useState } from "react";

export const AddTask = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
