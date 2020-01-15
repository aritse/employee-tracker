INSERT INTO department (name) VALUES ("Human Resource Management");
INSERT INTO department (name) VALUES ("Production");
INSERT INTO department (name) VALUES ("Research and Development");
INSERT INTO department (name) VALUES ("Purchasing");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Accounting and Finance");

INSERT INTO role (title, salary, department_id) VALUES ("Chief Financial Officer", 1005000.00, 6);
INSERT INTO role (title, salary, department_id) VALUES ("Chief Marketing Officer", 905000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Engineer", 105000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Supply Chain Manager", 120000.00, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Recruiter", 85000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Chief Human Resource Officer", 205000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Risk Analyst", 90200.00, 6);
INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead", 95000.50, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Intern", 80000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("A", "K", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("B", "L", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("C", "M", 5, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("D", "N", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("E", "O", 5, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("F", "P", 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("G", "Q", 7, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("H", "R", 8, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("I", "S", 8, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("J", "T", 5, 6);
