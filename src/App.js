// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LineChart } from '@mui/x-charts/LineChart';
import MyChartComponent from './components/LineChart.js';

import LoginPage from './pages/LoginPage';
import SecurePage from './pages/SecurePage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/secure" component={SecurePage} />
            
          </Switch>

          <div className="App">
          <MyChartComponent />

    </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
