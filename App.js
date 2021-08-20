import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import logo from './assets/logo.png'; 



export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onPress = () => { 
    alert( firstName, lastName );
  }
  
  return (
<TouchableWithoutFeedback 

>
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 
      <TextInput
      onChangeText={(text) =>setFirstName(text)}
      placeholder='First Name'
      style={styles.input}
/>
<TextInput
      
      onChangeText={(text) =>setLastName(text)}
      placeholder='Last Name'
      style={styles.input}
      
/>
<TouchableOpacity> 

<Text
      onPress={onPress}
      style={styles.text}>Please register here</Text>
      <StatusBar style="auto" />
</TouchableOpacity>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62adfd',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input:{
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    
  },
  text:{
fontSize:25,
fontWeight: "bold",
fontFamily: 'Georgia-Italic',
backgroundColor: '#00b2ca',
padding: 10,
  },
  logo: {
    width: 305,
    height: 200,
    marginBottom: 20,
  },
});
