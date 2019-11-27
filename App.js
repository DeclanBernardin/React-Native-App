import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput placeholder="Type Here" style={styles.input}/>
      <Button title="Push Me"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  input: {
    width: '50%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1
  }
});


