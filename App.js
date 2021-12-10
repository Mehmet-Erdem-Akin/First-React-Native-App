import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './src/pages/Profile/Profile';
import AboutScreen from './src/pages/About/About';
import ContactScreen from './src/pages/Contact/Contact';
import OnboardingScreen from './src/pages/Onboarding/Onboarding';
import RegisterScreen from './src/pages/Register/Register';
import LoginScreen from './src/pages/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


/*export default function App() {
  return (
    <>
      <View>
        <Text>aap.js</Text>
      </View>
    </>
  );
}*/

function HomeScreen({ navigation }) {
  const styles = StyleSheet.create({
    btnStyle: {
      padding: 4,
      margin: 16,
      marginBottom: 16,
      fontSize: 45,
    },
  });


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <View style={styles.btnStyle}>
        <Button
          title="Go to Mehmet's onboarding"
          style={styles.btnStyle}
          onPress={() => navigation.navigate('Onboarding', {name: 'Mehmet'})}
        />
      </View> */}
      <View style={styles.btnStyle}>
        <Button
          title="Go to Mehmet's profile"
          style={styles.btnStyle}
          onPress={() => navigation.navigate('Profile', { name: 'Mehmet' })}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          title="Go to Erdem's profile"
          onPress={() => navigation.navigate('About', { name: 'Erdem' })}
        />
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="Go to Akın's profile"
          onPress={() => navigation.navigate('Contact', { name: 'Akın' })}
        />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {

  const userSession = true;

  const appStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
        </Drawer.Navigator>
    );
  };
  const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Onboarding" component={OnboardingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Register" component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {
          !userSession ? <Stack.Screen name="AuthStack" options={{ headerShown: false }} component={AuthStack} /> : <Stack.Screen name="otherStack" options={{ headerShown: false }} component={appStack} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;