import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get('/api/employees');
    setEmployees(response.data);
  };

  const addEmployee = async () => {
    await axios.post('/api/employees', { name, position });
    setName('');
    setPosition('');
    fetchEmployees();
  };

  return (
    <div>
      <h1>Employee Details</h1>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Position" 
        value={position} 
        onChange={(e) => setPosition(e.target.value)} 
      />
      <button onClick={addEmployee}>Add Employee</button>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.position}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
