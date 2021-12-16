import React from 'react'
import { View, Text, Button } from 'react-native'
import FlashMessage from "react-native-flash-message";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/Login/Login';
import RegisterScreen from './src/pages/Register/Register';
import MessagesScreen from './src/pages/Messages/Messages';
const Stack = createNativeStackNavigator();

export default function App() {

    const AuthStack = () => {
        return(
          <Stack.Navigator screenOptions={{headerShown: false}}>
            
            
              <Stack.Screen
              name="LoginPage"
              component={LoginScreen}
            />
            <Stack.Screen
              name="SignPage"
              component={RegisterScreen} />
          </Stack.Navigator>
        );
      }
    
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                    <Stack.Screen name="Messages" component={MessagesScreen} />
                </Stack.Navigator>
                <FlashMessage position="top" />

            </NavigationContainer >
        )
    
}

