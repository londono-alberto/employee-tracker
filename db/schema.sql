-- CREATE DATABASE AND TABLES ===========================
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;
USE employees_db;

-- EMPLOYEES TABLE ======================================
CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR (30) NOT NULL,
    lastName VARCHAR (30) NOT NULL,
    roleID INT NOT NULL,
    managerID INT
);

-- DEPARTMENT TABLE ======================================
CREATE TABLE department (
    id INT(11) NOT NULL PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

-- ROLE TABLE ======================================

CREATE TABLE role (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL(9,2) NOT NULL,
    departmentID INT NOT NULL
);