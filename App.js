import React, {useNavigation} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';

import { messages } from './data.js';

const routeIcons = {
  Messages: "message1",
  Contacts: "contacts",
  Groups: "team",
  Timeline: "barschart",
  More: "bars"
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
        <Tab.Screen name="Contacts" component={Contacts}/>
        <Tab.Screen name="Groups" component={Groups}/>
        <Tab.Screen name="Timeline" component={Timeline}/>
        <Tab.Screen name="More" component={More}/>
      </Tab.Navigator>
    </NavigationContainer>  
  );
}

const MessagesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen 
        name="Messages"
        component={MessagesDrawer}
        options={{
          headerTitle:(props) => <MessagesTitle {...props}/>
        }}>
      </Stack.Screen>
      <Stack.Screen name="Conversation" component={Conversation}></Stack.Screen>
    </Stack.Navigator>
  )
}

const Messages = ({navigation}) => {
  return(
    <View style={styles.container}>
      {messages.map((mess) => (
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

const MessagesDrawer = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Messages" component={Messages}></Drawer.Screen>
      
    </Drawer.Navigator>
  )
}

const MessagesTitle = () => {
  const navigation = useNavigation();

  return(
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <AntDesign name="menuunfold" size={24} color="black"></AntDesign>
      </TouchableOpacity>
      <Text>Message</Text>
    </View>
  );
};

const Conversation = ({route}) => {
  return(
    <View style={styles.container}>
      <Text>Conversation</Text>
      <Text>{route.params?.author}</Text>
      <Text>{route.params?.content}</Text>
    </View>
  )
}

const Contacts = ({route}) => {
  return(
    <View style={styles.container}>
      <Text>Contact Screen</Text>      
    </View>
  )
};

const Groups = ({route}) => {
  return(
    <View style={styles.container}>
      <Text>Groups Screen</Text>      
    </View>
  )
};

const Timeline = ({route}) => {
  return(
    <View style={styles.container}>
      <Text>Timeline Screen</Text>      
    </View>
  )
};

const More = ({route}) => {
  return(
    <View style={styles.container}>
      <Text>More Screen</Text>      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorText:{
    fontSize:20, 
  },
  messageContainer: {
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 10,
    padding: 5,
  },
  headerContainer: {
    flexDirection: "row",
  },
});
