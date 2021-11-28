import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator();

const ContactScreen = ({navigation, route}) => {
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
    <Text style={styles.textStyle}>This is mehmet's contact page</Text>
  );
};
export default ContactScreen;
