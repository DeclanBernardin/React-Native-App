import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    console.log(enteredGoal)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput 
      placeholder="Type Here" 
      style={styles.input} 
      onChangeText={goalInputHandler}
      value={enteredGoal}/>

      <Button title="Push Me" onPress={addGoalHandler}/>
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


