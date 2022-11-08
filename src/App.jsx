import React from 'react'
import './App.css'
import Home from "./components/Home.jsx";
import DataProvider from "./components/context/DataProvider.jsx";

function App() {
  return (
      <DataProvider>
        <Home/>
      </DataProvider>
  );
}

export default App;
