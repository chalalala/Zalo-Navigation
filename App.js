import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TabBarIOS, TouchableOpacity } from 'react-native';
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
        <Tab.Screen name="Messages" component={MessagesStack}/>
      </Tab.Navigator>
    </NavigationContainer>  
  );
}

const MessagesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
    </Stack.Navigator>
  )
}

const Messages = ({navigation}) => {
  return(
    <View style={styles.container}>
      {messages => map((mess) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Conversation", mess)}
          style={styles.messageContainer}
        >
          <Text style={styles.authorText}>{mess.author}</Text>
          <Text>{mess.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
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
