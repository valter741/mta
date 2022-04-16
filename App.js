import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox,
  TouchableOpacity,
} from 'react-native';


import Home from './screens/home';
import Noti from './screens/noti';
import Profile from './screens/profile';
import Contacts from './screens/contacts';
import AppContext from './components/AppContext';


import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Tab = createBottomTabNavigator();

const App: () => Node = () => {

  const [Login, setLogin] = useState(0);
  const [token, setToken] = useState("");

  const setIdToLogin = (id) => {
    setLogin(id);
  };

  const userSettings = {
    thisLogin: Login,
    setLogin,
    thisToken: token,
    setToken,
  };

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={{
          tabBarStyle:{
            height: 75,
            paddingTop: 6,
            paddingBottom: 12,
            backgroundColor: '#1c1c1c',
          },
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#1c1c1c',
          tabBarInactiveBackgroundColor: '#1c1c1c',
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}>
          <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Home" component={Home} options={{  
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Contacts" component={Contacts} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Noti" component={Noti} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider> 
  );
};


export default App;
