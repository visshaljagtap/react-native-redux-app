import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import SingUpForm from './components/SignUpForm'
import firebase from 'firebase'
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { StackNavigator } from 'react-navigation';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={Login} hideNavBar={true} />
      </Scene>

      <Scene key="signup" component={SingUpForm} title="Create User" />

      <Scene key="main">
        <Scene
          onRight={() => {
            firebase.auth().signOut();
            Actions.auth();
          }}
          rightTitle="Logout"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  );
};


// Navigation using react-navigation

// const RouterComponent = StackNavigator({
//   auth: { screen: LoginForm},
//   employeeList: { screen: EmployeeList},
//   employeeCreate: {screen: EmployeeCreate},
//   employeeEdit: {screen: EmployeeEdit}
// })


export default RouterComponent;
