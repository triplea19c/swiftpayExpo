import React from 'react'
import First from './components/index/First'
import Login from './components/index/Login'
import Dashboard from './components/index/Dashboard'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const Navigation = createStackNavigator({
    First: First,
    Login: Login,
    Dashboard: Dashboard
  }
);

export default createAppContainer(Navigation)
