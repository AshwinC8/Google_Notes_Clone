import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataProvider from "./components/context/DataProvider.jsx";
import Home from "./components/Home.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <DataProvider>
        <Home/>
    </DataProvider>
);