const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var morgan = require('morgan');
const low = require('lowdb');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'images')));
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, function () { console.log(`Server running on ${PORT}`); });

const dbPath = path.join(__dirname, 'db.json');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync(dbPath);

low(adapter).then(function (db) {
  var lastEmployee = db.get('employees').last().value();
  var uid = lastEmployee.id;

  console.log(`db loaded: ${dbPath}`);

  //Get a list of employees
  app.get('/api/employees', function (req, res) {
    const employee = db.get('employees')
      .value();

    res.status(200).send(employee);
  });

  //Get employee by num
  app.get('/api/employee/:id', (req, res) => {
    var detailEmployee = db.get('employees')
      .find(employee => employee.id === parseInt(req.params.id, 10))
      .value();

    res.status(200).send(detailEmployee);
  });

  //Get a list of categories
  app.get('/api/categories', function (req, res) {
    const categories = db.get('categories').value();
    res.status(200).send(categories);
  });

  //Add new employee
  app.post('/api/employee', function (req, res) {
    uid = uid + 1;
    var newEmployee = { ...req.body, id: uid, url_photo: "http://localhost:3000/default-user.png" };
    db.get('employees')
      .push(newEmployee)
      .write();

    res.status(200).send({ employee: newEmployee });
  });

  //Update an employee
  app.put('/api/employee/:id', function (req, res) {
    db.get('employees')
      .find(employee => employee.id === parseInt(req.params.id, 10))
      .assign(req.body)
      .write();

    res.status(200).send({ message: 'Update employee' });
  });

  //Delete user by id
  app.delete('/api/employee/:id', function (req, res) {
    db.get('employees')
      .remove(employee => employee.id === parseInt(req.params.id, 10))
      .write();

    res.status(200).send({ message: 'Delete employee' });
  });

});
