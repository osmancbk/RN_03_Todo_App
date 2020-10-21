import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { todo_card } from '../styles'

const TodoCard = ( props ) => { 
    return ( 
        <TouchableOpacity
            style={[todo_card.container, { backgroundColor: props.data.isDone ? '#586368' : '#a7b6bd' }]}
            onPress={() => props.onDone()}
            onLongPress={()=> props.onRemove()}
        >

            <Text style={[ todo_card.text, { textDecorationLine: props.data.isDone ? 'line-through' : null }]}>{props.data.todo}</Text>
        </TouchableOpacity>

    )
}
export { TodoCard };

