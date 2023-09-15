import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams] = useSearchParams();
  const tasksData = searchParams.get("tasks");

  return (
    <nav>
      <Link className={tasksData === null ? "active" : ""} to="/">
        All
      </Link>
      <Link
        className={tasksData === "active" ? "active" : ""}
        to="/?tasks=active">
        Active
      </Link>
      <Link
        className={tasksData === "completed" ? "active" : ""}
        to="/?tasks=completed">
        Completed
      </Link>
    </nav>
  );
};

export default Filter;
