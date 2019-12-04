import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState(''); 

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Type Here"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <View style={styles.buttonContainer}>
                <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                <Button title="Add" onPress={addGoalHandler} />
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
    }
});

export default GoalInput;