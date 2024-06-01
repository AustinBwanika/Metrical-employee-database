import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';

// Main component of the application 

export default function App() {
    // State vairables to manage the employees and form inputs
    const [employees, setEmployees] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [updateName, setUpdateName] = useState('');
    const [updateValue, setUpdateValue] = useState('');

    // Fetch employees data from the server
    useEffect(() => {
        fetchEmployees();
    }, []);

    // Function to fetch employees data from the API
    async function fetchEmployees() {
        try {
            const response = await fetch("/employees");
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    }

    // Function to create a new employee and refresh the employee list
    async function createEmployee() {
        try {
            await fetch("/employees", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, value: parseInt(value) })
            });
            fetchEmployees(); // Refresh the list 
            setName(''); // Clears the name input field 
            setValue(''); // Clears the value input field 
        } catch (error) {
            console.error("Error creating employee:", error);
        }
    }

    // Function to update an employee and refresh the employee list
    async function updateEmployee() {
        try {
            await fetch("/employees", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: updateName, value: parseInt(updateValue) })
            });
            fetchEmployees(); // Refresh the list 
            setName(''); // Clear the update name input field
            setValue(''); // Clear the update value input field
        } catch (error) {
            console.error("Error updating employee:", error);
        }
        

    }

    // Renders the application
    return (
        <div className="app-container">
            <h1>Metricell Employee Database</h1>
            <img src={logo} alt="Logo" className="image" />
            <div className="form-container">
                <div className="form-section">
                    <h2>Add Employee</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={createEmployee}>Add Employee</button>
                </div>

                <div className="form-section">
                    <h2>Update Employee</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={updateName}
                        onChange={(e) => setUpdateName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="New Value"
                        value={updateValue}
                        onChange={(e) => setUpdateValue(e.target.value)}
                    />
                    
                    <button onClick={updateEmployee}>Update Employee</button>
                    
                </div>
            </div>

            <button onClick={() => setShowTable(!showTable)}>
                {showTable ? "Hide" : "Show"} Employee Details
            </button>

            {showTable && (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.name}>
                                    <td>{employee.name}</td>
                                    <td>{employee.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
