import './App.css';
import TPOComponent from './Component/TPOComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTpoComponent from './Component/AddTpoComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ViewTPO from './Component/ViewTPO';
import STUDENTComponent from './Component/STUDENTComponent';
import AddSTUDENT from './Component/AddSTUDENT';
import ViewStudComponent from './Component/ViewStudComponent';
import JobProfile from './Component/JobProfile';
import AddJob from './Component/AddJob';
import ViewJob from './Component/ViewJob';
import TpoProfile from './Component/TpoProfile';
import UpdateTpoProfile from './Component/UpdateTpoProfile';
import ViewTpoProfile from './Component/ViewTpoProfile';
import TpoNav from './Navi/TpoNav';
import ApplyJob from './Component/ApplyJob';
import APPLYJOBComponent from './Component/APPLYJOBComponent';
import ViewApplyComponent from './Component/ViewApplyComponent';

import Login from './Component/Login';
import AdminNav from './Navi/AdminNav';
import Login_Component from './Component/Login_Component';
import Home from './Component/Home';
import ContactUs from './Component/ContactUs';


function App() {
  return (
    <Router>

   {/* <TpoNav/> */}
    <AdminNav/>
  
	<Switch>
  <Route path = "/login"   component={Login} />
  <Route path = "/home"   component={Home} />
  <Route path = "/contact"   component={ContactUs} />
  <Route path = "/log"   component={Login_Component} />

		<Route path='/add-TPO/:id'  component={AddTpoComponent} />
		<Route path='/TPO' component={TPOComponent} />
    <Route path='/view-TPO/:id' component={ViewTPO} />
    <Route path='/STUDENT' component={STUDENTComponent} />
    <Route path='/add-STUDENT/:id' component={AddSTUDENT} />
    <Route path='/view-STUDENT/:id' component={ViewStudComponent} />
    <Route path='/job' component={JobProfile} />
    <Route path='/add-job/:id'  component={AddJob} />
    <Route path = "/view-job/:id"   component={ViewJob} />
    <Route path = "/tpo-profile"   component={TpoProfile} />
    <Route path = "/update-tpo-profile/:id"   component={UpdateTpoProfile} />
    <Route path = "/view-tpo-profile/:id"   component={ViewTpoProfile} />


	</Switch>
 


	</Router>
    
  );
}

export default App;
