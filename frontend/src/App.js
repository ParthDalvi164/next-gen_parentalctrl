import React from 'react';
import Dashboard from './Dashboard';
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      {/* <div className="DashboardHeader">
      <img src={`${process.env.PUBLIC_URL}/Designer.png`} alt="Parental Control Icon" className="DashboardImage" />
      <h1 className="DashboardTitle">Parental Control Dashboard</h1>
      </div> */}
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
