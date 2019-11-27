import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <TextInput placeholder="Type Here" style={{width: '50%', borderBottomColor: 'black', borderBottomWidth: 1}}/>
      <Button title="Push Me"/>
      </View>
      <View>

      </View>
    </View>
  );
}


