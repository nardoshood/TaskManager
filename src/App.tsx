import "./App.css";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Tasks from "./components/Tasks";

function App() {
  return (
    <main className=" bg-gray-100 dark:bg-slate-900 h-screen">
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Task Manager.
      </h1>
      <AddTask />
      <Filter />
      <Tasks />
    </main>
  );
}
export default App;
