import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import ToDo from '../../container/pages/ToDo';
import FakeAPI from '../../container/pages/FakeAPI';
import Location from '../../container/pages/Location';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import ToDoDetail from '../../container/pages/ToDoDetail';



const ToDoList = createStackNavigator(
  {
    ToDo: {
      screen: ToDo
    },
    ToDoDetail: {
      screen: ToDoDetail
    }
  },
  {
    initialRouteName:'ToDo',
    headerMode:'none'
  }
)

const FakeAPIList = createStackNavigator(
  {
    FakeAPI: {
      screen: FakeAPI,
    },
  },
  {
    initialRouteName: 'FakeAPI',
    headerMode: 'none',
  },
);
const LocationList = createStackNavigator(
  {
    Location: {
      screen: Location,
    },
  },
  {
    initialRouteName: 'Location',
    headerMode: 'none',
  },
);

const RouterBottom = createMaterialBottomTabNavigator(
  {
    ToDo: {
      screen: ToDoList,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name="list" />
          </View>
        ),
      },
    },
    FakeAPI: {
      screen: FakeAPIList,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon5 style={[{color: tintColor}]} size={25} name="angellist" />
          </View>
        ),
      },
    },
    Location: {
      screen: LocationList,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon5
              style={[{color: tintColor}]}
              size={25}
              name="map-marked-alt"
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'ToDo',
    inactiveColor: '#FAF8F0',
    activeColor: '#0090B2',
    barStyle: {backgroundColor: '#AAD0D9'},
  },
);

const Router = createSwitchNavigator(
  {
    RouterBottom: {
      screen: RouterBottom
    }
  },
  {
    initialRouteName: 'RouterBottom',
    headerMode: 'none'
  },
);

export default createAppContainer(Router);
