import { useState } from "react";

function ToDo({ theme }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const isLightTheme = theme === "light";

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: isLightTheme ? "#f3f4f6" : "#121212",
      transition: "background 0.3s ease",
    },

    wrapper: {
      backgroundColor: isLightTheme ? "#fff" : "#1e1e1e",
      color: isLightTheme ? "#333" : "#f9fafb",
      boxShadow: isLightTheme
        ? "0 4px 8px rgba(0, 0, 0, 0.1)"
        : "0 4px 8px rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      padding: "24px",
      transition: "background 0.3s ease, color 0.3s ease",
    },

    completedTask: {
      textDecoration: "line-through",
      color: isLightTheme ? "#6b7280" : "#bbb",
    },
  };

  const handleTaskAction = (action, index) => {
    if (action === "add" && task.trim() !== "") {
      if (tasks.some((t) => t.task.toLowerCase() === task.toLowerCase())) {
        alert("Task already exists!");
        return;
      }
      setTasks([...tasks, { task, completed: false }]);
      setTask("");
    } else if (action === "toggle") {
      setTasks(
        tasks.map((t, i) =>
          i === index ? { ...t, completed: !t.completed } : t
        )
      );
    } else if (action === "delete") {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleTaskAction("add");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={styles.container}
    >
      <div className="container" style={styles.wrapper}>
        <h2 className="text-center mb-4">To-Do List</h2>

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button
            className="btn btn-primary"
            onClick={() => handleTaskAction("add")}
          >
            Add
          </button>
        </div>

        <ul className="list-group">
          {tasks.map((t, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                t.completed ? "list-group-item-success" : ""
              }`}
            >
              <span
                className={t.completed ? "text-decoration-line-through" : ""}
                style={t.completed ? styles.completedTask : {}}
              >
                {t.task}
              </span>

              <div>
                <button
                  className={`btn btn-sm ${
                    t.completed ? "btn-warning" : "btn-success"
                  } me-2`}
                  onClick={() => handleTaskAction("toggle", index)}
                >
                  {t.completed ? "❌ Undo" : "✔ Done"}
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleTaskAction("delete", index)}
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
