import inquirer from "inquirer"
const mysql = require("mysql2");
const consoleTable = require("console.table");

const server = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "", //Enter your MySQL password here.
  database: "employees_db",
});

server.connect((err) => {
  if (err) throw err;

  runEmployeeDB();
});

function runEmployeeDB() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do today?",
        name: "action",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {

        // View All Departments
        case "View All Departments":
            // viewAllDepts();
            break;

        // View All Roles
        case "View All Roles":
            // viewAllRoles();
            break;

        // View all Employees 
        case "View All Employees":
            // viewAllEmployees();
            break;

        // Add Department 
        case "Add Department":
            // addDept();
            break;

        // Add Role
        case "Add Role":
            // addRole();
            break;

        // Add Employee 
        case "Add Employee":
            // addEmployee();
            break;

        // Update Employee Role 
        case "Update Employee Role":
        //   updateEmployeeRole();
            break;

        //Exit Prompt
        case "Exit":
            connection.end();
            break;
      }
    });
}
