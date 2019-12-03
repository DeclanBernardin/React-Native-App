import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput 
      placeholder="Type Here" 
      style={styles.input} 
      onChangeText={goalInputHandler}
      value={enteredGoal}/>

      <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal) => (
        <View style={styles.listItem}> 
        <Text key={goal}>{goal}</Text> 
        </View>))}
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
    padding: 10,
    width: '80%', 
    borderBottomColor: 'black', 
    borderWidth: 1
  },
  listItem: {
    padding: 10,
    margin: 2,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});


