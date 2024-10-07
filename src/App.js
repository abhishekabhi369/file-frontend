
import React, { useEffect, useState } from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home';

import NotAuthorized from './Pages/NotAuthorized ';


const App = () => {
  const [fileExists, setFileExists] = useState(null);

  useEffect(() => {
    const checkFile = async () => {
      try {
        const response = await axios.get('http://localhost:4000/check-file');
        if (response.status === 200) {
          setFileExists(true);
        }
      } catch (error) {
        console.error('Error checking file:', error);
        setFileExists(false);
      }
    };

    checkFile();
  }, []);
  if (fileExists === null) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={fileExists ? <Home /> : <NotAuthorized />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
