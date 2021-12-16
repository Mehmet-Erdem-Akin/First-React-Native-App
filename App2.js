import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, StyleSheet, View} from 'react-native';
import ProfileScreen from './src/pages/Profile/Profile';
import AboutScreen from './src/pages/About/About';
import ContactScreen from './src/pages/Contact/Contact';
import Drawer from './src/components/Drawer';

const Stack = createNativeStackNavigator();

const App2 = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome My App :)'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    btnStyle: {
      padding: 4,
      margin: 16,
      marginBottom: 16,
      fontSize: 45,
    },
  });
  return (
    <>
    <Drawer/>
      {/* <View style={styles.btnStyle}>
        <Button
          title="Go to Mehmet's profile"
          style={styles.btnStyle}
          onPress={() => navigation.navigate('Profile', {name: 'Mehmet'})}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          title="Go to Erdem's profile"
          onPress={() => navigation.navigate('About', {name: 'Erdem'})}
        />
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="Go to Akın's profile"
          onPress={() => navigation.navigate('Contact', {name: 'Akın'})}
        />
      </View> */}
    </>
  );
};

export default HomeScreen;
