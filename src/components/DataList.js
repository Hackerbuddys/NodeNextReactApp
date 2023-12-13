import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

function DataList() {
  const [userList, setUserList] = useState([]);

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "name", text: "Name" },
    { dataField: "username", text: "Username" },
    { dataField: "email", text: "Email" },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container my-5">
      <BootstrapTable keyField="id" columns={columns} data={userList} />

      {/* <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
        {userList && userList.length > 0
          ? userList.map((usr) => (
              <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
              </tr>
            ))
          : "loading"}
      </table> */}
    </div>
  );
}

export default DataList;
