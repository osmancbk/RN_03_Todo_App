import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { todo_input } from '../styles'

const TodoInput = ( props ) => {
    const [text, setText] = useState('') 

    return (
        <View style={todo_input.container}>

            <View style={todo_input.inputContainer}>
                <TextInput
                    value={text}
                    placeholder="Type something to do.."
                    onChangeText={(value) => setText(value)}
                />
            </View >

            <TouchableOpacity
                    style={todo_input.buttonContainer}
                    onPress={() => {
                    props.onTodoEnter(text);
                    setText('');
                }}>
                <Text style={todo_input.buttonText}>ADD</Text>

            </TouchableOpacity>
        </View>

    )


};
export { TodoInput };