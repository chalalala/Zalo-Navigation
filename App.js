import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TabBarIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const routeIcons = {
  Messages: "message1",
  Contacts: "contacts",
  Groups: "team",
  Timeline: "barschart",
  More: "bars"
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name = {routeIcons[route.name]}
              size = {24}
              color = {focused ? "blue" : "grey"}
            />
          )
        })}
        
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "grey"
        }}
      >
      </Tab.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorText:{
    fontSize:20,
    
  }
});
