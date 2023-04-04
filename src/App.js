import './App.css';
import Question1 from './Components/Question1';
import { useState } from 'react';





function App() {
  const employees = [
    { name: 'John', age: 30, position: 'Manager', salary: 5000 },
    { name: 'Lisa', age: 25, position: 'Developer', salary: 4000 },
    { name: 'Sarah', age: 28, position: 'Designer', salary: 4500 },
    { name: 'Mark', age: 35, position: 'Engineer', salary: 5500 },
  ];
  
    const [salary, setSalary] = useState('');
  
    const handleSalaryChange = (event) => {
      setSalary(event.target.value);
    };
  
    const filteredEmployees = employees.filter(
      (employee) => employee.salary >= salary
    );
  return (
    <>
    <div>
      <label>
        Enter minimum salary:
        <input type="number" value={salary} onChange={handleSalaryChange} />
      </label>
      <ul>
        {filteredEmployees.map((employee, index) => (
          <li key={index}>
            {employee.name}, {employee.position} ({employee.salary})
          </li>
        ))}
      </ul>
    </div>
    <div className="App">
      <Question1/>
    </div>
    </>
  );
}

export default App;
