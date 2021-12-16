import React, { useEffect,useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import colors from '../../styles/colors';
import { Formik } from 'formik';

import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const initialFormValues = {
  username: '',
  password: '',
  rePassword: '',
}

const RegisterScreen = ({ navigation }) => {
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
  function handleLogin() {
    navigation.navigate('LoginPage');
    console.log("handle function çalıştı, register")
  }

  async function handleFormSubmit(formValues) {
    if(formValues.password !== formValues.rePassword ){
      showMessage({
        message: "Şifreler uyuşmuyor",
        type: "danger",
      });

      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(
        formValues.username, 
        formValues.password,

      );
      showMessage({
        message: "Kullanıcı oluşturuldu",
        type: "success",
      });
      setLoading(false);
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
        setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        BanaNe Chat
      </Text>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
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
                value={values.password}
                onType={handleChange("password")}
                placeholder="parola giriniz..."
                isSecure
              />
              <Input
                placeholder="parolayı tekrar giriniz..."
                value={values.rePassword}
                onType={handleChange("rePassword")}
                isSecure
              />

              <Button
                text="Kayıt Ol"
                onPress={handleSubmit}
              />
              <Button
                text="Giriş Yap"
                theme='secondary'
                onPress={handleLogin}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default RegisterScreen;
