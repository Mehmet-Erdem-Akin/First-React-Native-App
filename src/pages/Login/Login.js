import React, { useEffect,useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import colors from '../../styles/colors';
import { Formik } from 'formik';

import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const initialValues = {
  username: '',
  password: '',
}

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    textStyle: {
      padding: 8,
      margin: 16,
      marginBottom: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
    },
    btnStyle: {
      backgrounColor: 'blue'
    },
    formContainer: {
      padding: 15
    },
    input: {
      flex: 1,
    },
    header: {
      color: colors.darkgreen,
      fontSize: 35,
      fontWeight: 'bold',
      margin: 5,
      textAlign: 'center',
      paddingBottom: 30
    }
  });

  // çalışmıyor sanırım şuan
  function handleRegister() {
    navigation.navigate('SignPage');
    console.log("handle function çalıştı , login")
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true)
       await auth().signInWithEmailAndPassword(
         formValues.username,
         formValues.password
        );
        showMessage({
          message: "Oturum Açma İşlemi Başarılı",
          type: "success",
        });
        setLoading(false);
        navigation.navigate('Messages')
    } catch (error) {
      console.log("error: ",error.code)
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
      setLoading(false);
    }
 
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        BanaNe Chat
      </Text>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}

      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <View style={styles.formContainer}>

              <Input
                value={values.username}
                onType={handleChange("username")}
                placeholder="e-posta giriniz..."
              />
              <Input
                isSecure
                value={values.password}
                onType={handleChange("password")}
                placeholder="parola giriniz..."
              />
              <Button text="Giriş Yap" onPress={handleSubmit} />
              <Button
                text="Kayıt Ol"
                theme='secondary'
                onPress={handleRegister}

              />
            </View>
          </>
        )}

      </Formik>

    </SafeAreaView>
  );
};
export default LoginScreen;
