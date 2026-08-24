import React from 'react';
import './styles/global.css';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <AppRoutes />
    </>
  );
}

export default App;
