import React , {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, StyleSheet, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const OnboardingScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    textStyle: {
      padding: 8,
      margin: 16,
      marginBottom: 16,
      fontWeight:'bold',
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
    },
    btnStyle: {
      backgrounColor: 'blue'
    },
    btnContainer:{
      //width: 200,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 30,
      left: 0,
      right:0,
      //top: 0,
    }
  });

  useEffect(() => {
    setTimeout(function(){
      navigation.navigate('Register');
       }, 2000);
  }, [])
  return (
    <View style={styles.container}>
          <Text style={styles.textStyle}>My First App</Text>
          <View 
              style={styles.btnContainer}

          >
            <Button
              onPress={() => navigation.navigate('Login')}
              title="Login"
              color="#459863"
              
              //accessibilityLabel="Learn more about this purple button"
              style={styles.btnStyle}
            />
          </View>
          
    </View>
  );
};
export default OnboardingScreen;
