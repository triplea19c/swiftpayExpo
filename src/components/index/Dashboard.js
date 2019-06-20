import React, { Component } from 'react'
import { Text, View, Stylesheet, Image, TouchableOpacity } from 'react-native'
import Services from '../../screens/Services'
import Swipe from '../../screens/Swipe'
import Top from '../../screens/Top'
import Transfer from '../../screens/Transfer'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../../../assets/images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15, marginBottom: 15 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Swipe,
    navigationOptions: ({ navigation }) => ({
      title: 'Swipe To Pay',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Transfer,
    navigationOptions: ({ navigation }) => ({
      title: 'Transfer',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Services,
    navigationOptions: ({ navigation }) => ({
      title: 'Services',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Top,
    navigationOptions: ({ navigation }) => ({
      title: 'Top Up',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Swipe: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Swipe To Pay',
    },
  },
  Transfer: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Transfer',
    },
  },
  Services: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Services',
    },
  },
  Top: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Top Up',
    },
  }
});

export default createAppContainer(DrawerNavigatorExample);
