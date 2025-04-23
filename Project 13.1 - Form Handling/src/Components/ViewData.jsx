import React from "react";

const ViewData = ({ list, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="container mt-5 p-3">
        <div className="card shadow-sm">
          <div className="card-header text-primary text-center">
            <h2 className="mb-0">User Data</h2>
          </div>
          <div className="card-body p-3">
            <table
              className="table table-striped table-hover table-bordered mb-0"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                borderCollapse: "separate",
                borderSpacing: "0",
              }}
            >
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Hobby</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? (
                  list.map((user, index) => (
                    <tr key={user.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.username}</td>
                      <td>
                        {user.firstName} {user.lastName}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.gender}</td>
                      <td>
                        {Array.isArray(user.hobby)
                          ? user.hobby.join(", ")
                          : user.hobby}
                      </td>
                      <td>{user.address}</td>
                      <td>{user.city}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(user.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center text-muted">
                      No Data Found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewData;
