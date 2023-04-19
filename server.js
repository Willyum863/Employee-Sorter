const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');
const connection = require('./db/connections');

//middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//inquirer prompts
const start = () => {
    console.log('Employee Sorter');
    inquirer.prompt([{
          type: "list",
          name: "NavPrompt",
          message: "How can Employee Sorter help you?",
          choices: [
            "View All Departments",
            "View All Roles",
            "View All Employess",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Quit",
          ],
        },
      ])
      .then(function (data) {
        switch (data.nav) {
          case "View All Departments":
            viewAllDepartments();
            break;
          case "View All Roles":
            viewAllRoles();
            break;
          case "View All Employees":
            viewAllEmployees();
            break;
          case "Add Department":
            addDepartment();
            break;
          case "Add Role ":
            addRole();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "Update Employee Role":
            updateEmployeeRole();
            break;
          case "Quit":
            quit();
            break;
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
 