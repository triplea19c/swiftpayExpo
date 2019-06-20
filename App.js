import React from 'react'
import First from './src/components/index/First'
import Login from './src/components/index/Login'
import Dashboard from './src/components/index/Dashboard'
import Signup from './src/components/index/Signup'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

const Navigation = createStackNavigator({
    First: First,
    Login: Login,
    Dashboard: Dashboard,
    Signup: Signup
  }
);

export default createAppContainer(Navigation)
