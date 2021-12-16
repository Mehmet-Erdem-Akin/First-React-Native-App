import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Messages from './pages/Messages';
import { Header } from 'react-native/Libraries/NewAppScreen';

const stack = CreateStackNavigator();

const Router = () => {

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginPage" component={Login} />

                {/* <Stack.Screen name="MessagesPage" component={Sign} /> */}
            </Stack.Navigator >
        )
    };

    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="LoginPage" component={AuthStack} />

                    <Stack.Screen name="SignPage" component={Messages} />
                </Stack.Navigator>
        </NavigationContainer >
    );
}
export default Router;