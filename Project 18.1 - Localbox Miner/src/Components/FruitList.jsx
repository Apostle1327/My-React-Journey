import React, { useEffect, useState } from "react";

const FruitList = ({ theme }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    quantity: 1,
  });

  const getSavedFruits = () => {
    const savedFruits = localStorage.getItem("fruits");
    return savedFruits
      ? JSON.parse(savedFruits)
      : [
          { id: 1, name: "Apple", color: "red", quantity: 10 },
          { id: 2, name: "Grapes", color: "green", quantity: 15 },
          { id: 3, name: "BlueBerry", color: "blue", quantity: 5 },
        ];
  };

  const [fruits, setFruits] = useState(getSavedFruits);

  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(fruits));
  }, [fruits]);

  const handleEdit = (fruit) => {
    setSelectedFruit(fruit);
    setFormData({ ...fruit });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (formData.name && formData.color && formData.quantity >= 1) {
      if (isEditing) {
        if (isConfirmed) {
          setFruits((prevFruits) =>
            prevFruits.map((fruit) =>
              fruit.id === selectedFruit.id
                ? { ...formData, id: selectedFruit.id }
                : fruit
            )
          );
          setIsEditing(false);
          setIsConfirmed(false);
        } else {
          alert("Please confirm the changes before saving.");
          return;
        }
      } else {
        const newFruit = { id: Date.now(), ...formData };
        setFruits([...fruits, newFruit]);
      }
      setFormData({ name: "", color: "", quantity: 1 });
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "quantity" ? Number(value) : value,
    });
  };

  const isLightTheme = theme === "light";

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${
        isLightTheme ? "bg-light text-dark" : "bg-dark text-white"
      } p-3`}
      style={{ minHeight: "100vh" }}
    >
      <form
        onSubmit={handleAddOrUpdate}
        className={`d-flex flex-column align-items-center ${
          isLightTheme ? "bg-white" : "bg-secondary"
        } p-4 rounded shadow-sm`}
        style={{ width: "40%" }}
      >
        <h2>Fruit List</h2>

        <div className="mb-3 w-100">
          <label htmlFor="name" className="form-label">
            Fruit Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter fruit name"
          />
        </div>

        <div className="mb-3 w-100">
          <label htmlFor="color" className="form-label">
            Fruit Color:
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter fruit color"
          />
        </div>

        <div className="mb-3 w-100">
          <label htmlFor="quantity" className="form-label">
            Fruit Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min={1}
            value={formData.quantity}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {isEditing && (
          <div className="form-check">
            <input
              type="checkbox"
              id="confirm"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="form-check-input"
            />
            <label htmlFor="confirm" className="form-check-label">
              Confirm Changes
            </label>
          </div>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          {isEditing ? "Save Changes" : "Add Fruit"}
        </button>
      </form>

      <table
        className={`table mt-4 ${isLightTheme ? "table-light" : "table-dark"}`}
      >
        <thead>
          <tr>
            <th>Fruit Name</th>
            <th>Fruit Color</th>
            <th>Fruit Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.name}</td>
              <td>
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    backgroundColor: fruit.color,
                    borderRadius: "50%",
                    border: "1px solid #000",
                    textAlign: "center",
                  }}
                ></span>
                &nbsp;{fruit.color}
              </td>
              <td>{fruit.quantity}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(fruit)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => handleDelete(fruit.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitList;
