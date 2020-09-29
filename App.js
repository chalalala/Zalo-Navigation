import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

const Messages = () => {
  return (
    <View style={styles.container}>
      {Messages.map(mess => (
        <View style={styles.messageContainer}>
          <View style={styles.authorText}>
            {}
          </View>
        </View>
      ))}
    </View>
  )
}
<Text>Messages</Text>;
const Contacts = () => <Text>Contacts</Text>;
const Groups() = () => <Text>Groups</Text>;
const Timeline =() => <Text>Timeline</Text>;
const More = () => <Text>More</Text>;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            <AntDesign
              name={routeIcons[`${route.name}`]}
              size={24}
              color={focused ? "blue":"grey"}
            >
            </AntDesign>
          ),
        }}}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen options={{tabBarIcon: () => {
          <AntDesign name="message1" size={24} color="black"/>
        }}} name="Messages" component={Messages}/>
        <Tab.Screen name="Contacts" component={Contacts}/>
        <Tab.Screen name="Groups" component={Groups}/>
        <Tab.Screen name="Timeline" component={Timeline}/>
        <Tab.Screen name="More" component={More}/>
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
