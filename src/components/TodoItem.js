import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const TodoItem = ({ item, pressClean }) => {

    return (
        <TouchableOpacity
            style={styles.box}
            onPress={() => pressClean(item.id)}
        >  
            <Text style={styles.text}>{item.text}</Text>

        </TouchableOpacity>
    );
};
export { TodoItem };

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgb(84,110,122)',
        padding: 17,
        margin: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        color: "#e2e2e2",
        fontWeight: "bold",
    },

})
