import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './src/pages/Profile/Profile';
import AboutScreen from './src/pages/About/About';
import ContactScreen from './src/pages/Contact/Contact';

function HomeScreen({navigation}) { 
     const styles = StyleSheet.create({
        btnStyle: {
        padding: 4,
        margin: 16,
        marginBottom: 16,
        fontSize: 45,
        },
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
          onPress={() => navigation.navigate('About', {name: 'Erdem'})}
        />
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="Go to Akın's profile"
          onPress={() => navigation.navigate('Contact', {name: 'Akın'})}
        />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
