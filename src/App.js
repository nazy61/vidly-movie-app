import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import NavBar from "./components/navbar";
import NotFound from './components/notFound';
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import Rentals from './components/rentals';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import ProtectedRoute from './components/common/protectedRoute';
import Logout from './components/logout';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path='/register' component={RegisterForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/logout' component={Logout} />
            <ProtectedRoute path='/movies/:id' component={MovieForm} />
            <Route
              path='/movies'
              render={props => <Movies {...props} user={user} />} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/not-found' component={NotFound} />
            {/* redirect user from the home route to movies route */}
            <Redirect from='/' exact to='/movies' />
            {/* if page is not found, redirect user to not-found route */}
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
