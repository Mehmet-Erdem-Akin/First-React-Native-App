import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, StyleSheet, View} from 'react-native';
import Menu from './Menu';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome My App'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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
      <View style={styles.btnStyle}>
        <Button
          title="Go to Mehmet's profile"
          style={styles.btnStyle}
          onPress={() => navigation.navigate('Profile', {name: 'Mehmet'})}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          title="Go to Erdem's profile"
          onPress={() => navigation.navigate('Profile', {name: 'Erdem'})}
        />
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="Go to Akın's profile"
          onPress={() => navigation.navigate('Profile', {name: 'Akın'})}
        />
      </View>
    </>
  );
};
const ProfileScreen = ({navigation, route}) => {
  const styles = StyleSheet.create({
    textStyle: {
      padding: 4,
      margin: 16,
      marginBottom: 16,
      backgroundColor: '#118822',
      fontSize: 25,
      color: 'white',
    },
  });
  return (
    <Text style={styles.textStyle}>This is {route.params.name}'s profile</Text>
  );
};
export default App;
