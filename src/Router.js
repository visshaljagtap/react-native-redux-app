import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { StackNavigator } from 'react-navigation';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" hideNavBar={true}>
        <Scene key="login" component={Login}  hideNavBar={true}/>
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
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
