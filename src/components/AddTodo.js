import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';


const AddTodo = ({ submitPlus }) => {
    const [text, setText] = useState('');


    return (

        <View style={styles.input}>
          <TextInput
            placeholder={'Enter something..'}
            style={styles.inputText}
            onChangeText={(value) => setText(value)} //console.log(value)
          // value={text}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              submitPlus(text);
              // console.log(text)
            }}
          >
            <Text style={styles.buttonText}>ADD TODO</Text>
          </TouchableOpacity>

        </View>

    );

};
export {AddTodo};

const styles = StyleSheet.create({
   
    input: {
      flex: 2,
      backgroundColor: 'rgb(176,190,197)',
      borderRadius: 15,
      margin: 15,
      alignItems: "center",
    },
    inputText: {
      fontWeight: 'bold',
      fontSize: 16,
      backgroundColor: 'white',
      borderRadius: 15,
      marginVertical: 20,
      marginHorizontal: 20,
      width: Dimensions.get('window').width * 0.85,
    },
    button: {
      backgroundColor: 'rgb(84,110,122)',
      width: Dimensions.get('window').width / 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      padding: 10,
      margin: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    }
  
  
  })