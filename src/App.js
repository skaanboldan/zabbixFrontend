// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ChartPage from './pages/ChartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
            <Route path="/chart" component={ChartPage} />
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
