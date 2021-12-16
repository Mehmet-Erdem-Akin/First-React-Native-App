/*import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe2@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword('jane.doe2@example.com', 'SuperSecretPassword!')
      .then((res) => {
        console.log('User account created & signed in!');
        console.log(res);

      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  const signOut = () => {
    auth().signOut()
      .then((res) => {
        console.log('User account signed out!');
        console.log(res);
      })
      .catch((error => {
        console.log('sign out error');
      }))
  }

  const checkOut = () => {
    const user = auth().currentUser;
     console.log(user);
  }
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>sign up</Text>
        <Button title="sign up" onPress={signUp} />
        <Text>sign in</Text>

        <Button title="sign in" onPress={signIn} />
        <Text>sign out</Text>

        <Button title="sign out" onPress={signOut} />

        <Text>check user</Text>

        <Button title="sign out" onPress={checkOut} />
      </View>
    </SafeAreaView>
  );
}*/

import React from 'react'
import { View, Text, Button} from 'react-native'
import database from '@react-native-firebase/database';

export default function App() {

  const checkDb = () => {
    const reference = database().ref('books/');
    reference.once('value')
    .then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };

  const checkDbRealTime = () => {
    const reference = database().ref('books/');
    reference.on('value',snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const setDb = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'audi',
      model: '2020',
      price: '120',
    });
  };
  const updateDb = () => {
    const reference = database().ref('car/rentable');
    reference.update({
      model: '2010',
    });
  };
  const pushDb = () => {
    const reference = database().ref('car/rentable');
    reference.push({
      brand: 'passat',
      model: '2003',
      price: '1120',
    });
  };

  return (
    <View>
      <Text>
        hello
      </Text>
      <Button title="check db" onPress={checkDbRealTime}/>
      <Button title="set db" onPress={setDb}/>
      <Button title="update db" onPress={updateDb}/>
      <Button title="push db" onPress={pushDb}/>

    </View>
      
  )
}
