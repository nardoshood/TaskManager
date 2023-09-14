import { AddTask } from "./components/AddTask";

// import TaskItem from './components/'
function App() {
  return (
    <div className="text-white">
      <div>
        <h1> Task Manager.</h1>
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
