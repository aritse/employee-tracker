const table = require("console.table");
const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employees"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as", connection.threadId);
  askOperation();
});

function askOperation() {
  inquirer
    .prompt({
      type: "rawlist",
      name: "operation",
      message: "Choose operation:",
      choices: ["add", "view", "update", "delete", "quit"]
    })
    .then(({ operation }) => {
      switch (operation) {
        case "add":
          askAdd();
          break;
        case "view":
          askView();
          break;
        case "update":
          askUpdate();
          break;
        case "delete":
          askDelete();
          break;
        default:
          connection.end();
          break;
      }
    });
}

function askAdd() {
  inquirer
    .prompt({
      type: "rawlist",
      name: "table",
      message: "Choose table:",
      choices: ["department", "role", "employee", "back"]
    })
    .then(({ table }) => {
      switch (table) {
        case "department":
          addDepartment();
          break;
        case "role":
          addRole();
          break;
        case "employee":
          addEmployee();
          break;
        default:
          askOperation();
          break;
      }
    });
}

function askView() {
  inquirer
    .prompt({
      type: "rawlist",
      name: "table",
      message: "Choose table:",
      choices: ["department", "role", "employee", "back"]
    })
    .then(({ table }) => {
      switch (table) {
        case "department":
          viewDepartment();
          break;
        case "role":
          viewRole();
          break;
        case "employee":
          viewEmployee();
          break;
        default:
          askOperation();
          break;
      }
    });
}

function askUpdate() {
  inquirer
    .prompt({
      type: "rawlist",
      name: "table",
      message: "Choose table:",
      choices: ["department", "role", "employee", "back"]
    })
    .then(({ table }) => {
      switch (table) {
        case "department":
          updateDepartment();
          break;
        case "role":
          updateRole();
          break;
        case "employee":
          updateEmployee();
          break;
        default:
          askOperation();
          break;
      }
    });
}

function askDelete() {
  inquirer
    .prompt({
      type: "rawlist",
      name: "table",
      message: "Choose table:",
      choices: ["department", "role", "employee", "back"]
    })
    .then(({ table }) => {
      switch (table) {
        case "department":
          deleteDepartment();
          break;
        case "role":
          deleteRole();
          break;
        case "employee":
          deleteEmployee();
          break;
        default:
          askOperation();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "Enter name:"
    })
    .then(({ name }) => {
      connection.query("INSERT INTO department SET ?", { name: name }, (err, data) => {
        if (err) throw err;
        console.log("Added department successfully");
        askOperation();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter title:"
      },
      {
        type: "number",
        name: "salary",
        message: "Enter salary:"
      },
      {
        type: "number",
        name: "department_id",
        message: "Enter department ID:"
      }
    ])
    .then(({ title, salary, department_id }) => {
      connection.query("INSERT INTO role SET ?", { title: title, salary: salary, department_id: department_id }, (err, data) => {
        if (err) throw err;
        console.log("Added role successfully");
        askOperation();
      });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter first name:"
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter last name:"
      },
      {
        type: "number",
        name: "role_id",
        message: "Enter role ID"
      },
      {
        type: "number",
        name: "manager_id",
        message: "Enter manager ID"
      }
    ])
    .then(({ first_name, last_name, role_id, manager_id }) => {
      connection.query(
        "INSERT INTO employee SET ?",
        { first_name: first_name, last_name: last_name, role_id: role_id, manager_id: manager_id },
        (err, data) => {
          if (err) throw err;
          console.log("Added employee successfully");
          askOperation();
        }
      );
    });
}

function viewDepartment() {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.table(data);
    askOperation();
  });
}

function viewRole() {
  connection.query("SELECT * FROM role", (err, data) => {
    if (err) throw err;
    console.table(data);
    askOperation();
  });
}

function viewEmployee() {
  connection.query("SELECT * FROM employee", (err, data) => {
    if (err) throw err;
    console.table(data);
    askOperation();
  });
}

function updateDepartment() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "Enter ID:"
      },
      {
        type: "input",
        name: "name",
        message: "Enter name:"
      }
    ])
    .then(({ id, name }) => {
      connection.query("UPDATE department SET ? WHERE ?", [{ name: name }, { id: id }], (err, data) => {
        if (err) throw err;
        console.log("Updated department successfully");
        askOperation();
      });
    });
}

function updateRole() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "Enter ID:"
      },
      {
        type: "input",
        name: "title",
        message: "Enter title:"
      },
      {
        type: "number",
        name: "salary",
        message: "Enter salary:"
      },
      {
        type: "number",
        name: "department_id",
        message: "Enter department ID:"
      }
    ])
    .then(({ id, title, salary, department_id }) => {
      connection.query(
        "UPDATE role SET ? WHERE ?",
        [
          {
            title: title,
            salary: salary,
            department_id: department_id
          },
          { id: id }
        ],
        (err, data) => {
          if (err) throw err;
          console.log("Updated role successfully");
          askOperation();
        }
      );
    });
}

function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "Enter ID:"
      },
      {
        type: "input",
        name: "first_name",
        message: "Enter first name:"
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter last name:"
      },
      {
        type: "number",
        name: "role_id",
        message: "Enter role ID"
      },
      {
        type: "number",
        name: "manager_id",
        message: "Enter manager ID"
      }
    ])
    .then(({ id, first_name, last_name, role_id, manager_id }) => {
      connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
          {
            first_name: first_name,
            last_name: last_name,
            role_id: role_id,
            manager_id: manager_id
          },
          { id: id }
        ],
        (err, data) => {
          if (err) throw err;
          console.log("Updated employee successfully");
          askOperation();
        }
      );
    });
}

function deleteDepartment() {
  inquirer
    .prompt({
      type: "number",
      name: "id",
      message: "Enter ID:"
    })
    .then(({ id }) => {
      connection.query("DELETE FROM department WHERE ?", { id: id }, (err, data) => {
        if (err) throw err;
        console.log("Deleted from department successfully");
        askOperation();
      });
    });
}

function deleteRole() {
  inquirer
    .prompt({
      type: "number",
      name: "id",
      message: "Enter ID:"
    })
    .then(({ id }) => {
      connection.query("DELETE FROM role WHERE ?", { id: id }, (err, data) => {
        if (err) throw err;
        console.log("Deleted from role successfully");
        askOperation();
      });
    });
}

function deleteEmployee() {
  inquirer
    .prompt({
      type: "number",
      name: "id",
      message: "Enter ID:"
    })
    .then(({ id }) => {
      connection.query("DELETE FROM employee WHERE ?", { id: id }, (err, data) => {
        if (err) throw err;
        console.log("Deleted from employee successfully");
        askOperation();
      });
    });
}
