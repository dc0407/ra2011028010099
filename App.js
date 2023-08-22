import React from 'react';
import './App.css';

function App() {
  // Sample train data
  const trainSchedule = [
    { id: 1, name: 'Express Train', departure: '08:00 AM', destination: 'City A' },
    { id: 2, name: 'Local Train', departure: '09:30 AM', destination: 'City B' },
    // Add more train data
  ];

  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map(train => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.departure}</td>
              <td>{train.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
