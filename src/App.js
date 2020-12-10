import React from 'react'
import Header from './secreens/Header'
import Sidebar from './secreens/Sidebar'
import Home from './secreens/Home'
import CoursePage from './secreens/Course'
import Rightbar from './secreens/Rightbar'
import DiscoverPage from './secreens/Discover'
import CategoriesPage from './secreens/Categories'
import MyCoursesPage from './secreens/Mycourses'
import AccountPage from './secreens/Oauth'
import LoginPage from './secreens/Login'
import RegisterPage from './secreens/Register'

import firebase from './config/firebase'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './config/redux';

import './css/App.css';
import './css/Props.css';
import './css/uifont.css';


function App() {
  console.log(localStorage)
  return (
    <div className="App flex">
      <Provider store={store}>
      <HashRouter>
        <Sidebar />
        <div className="App-content">
          <Route exact path="/" component={Home} />
          <Route path="/course/:courseid" component={CoursePage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/cates" component={CategoriesPage} />
          <Route path="/my-courses" component={MyCoursesPage} />
          <Route path="/regis" component={RegisterPage} />
          <Route path="/oauth" component={LoginPage} />
        </div>
        <Rightbar />
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
