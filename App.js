import First from './src/screens/First'
import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'
import Signup from './src/screens/Signup'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const Navigation = createStackNavigator({
    First: First,
    Login: Login,
    Dashboard: Dashboard,
    Signup: Signup
  },
  {
      initialRouteName: "First",
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false
      }
    }
);

export default createAppContainer(Navigation)
