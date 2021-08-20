'use strict';

// write code here
let employeesArray =  Array.from(document.querySelector('ul').children)
  employeesArray.sort((a, b) => Number(a.dataset.salary.replace('$', '').replace(',','')) - Number(b.dataset.salary.replace('$', '').replace(',','')));
  employeesArray.forEach(n => n.parentNode.appendChild(n));

const getArray = [];

function getEmployees(list) {
  for (const i of list) {
    let obj = {
      name: i.textContent, 
      position: i.dataset.position,
      salary: i.dataset.salary,
      age: i.dataset.age,
    };
    getArray.push(obj);
  }
};

getEmployees(employeesArray);
