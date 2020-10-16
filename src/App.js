import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native';
import { AddTodo, TodoItem } from './components'

const App = () => {
  // const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([
    { text: 'Default ToDo: Gülümse', id: 0 },
    { text: 'Default ToDo: Çalış', id: 1 },
    { text: 'Default ToDo: Gülümse', id: 2 },
  ]);
  const counter = todos.length; //Ty Lighthouse

  const pressClean = (id) => {
    setTodos(() => {
      return todos.filter(x => x.id != id);
    })
  }

  const submitPlus = (text) => {
    setTodos(() => {
      return [
        { text: text, id: Math.random().toString() },
        ...todos
      ];
    })
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>TODO</Text>
          <Text style={styles.headerText}>{counter}</Text>
        </View>

        <View style={styles.main}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressClean={pressClean} />}
          />
        </View>

        <AddTodo submitPlus={submitPlus} />

      </View>
    </SafeAreaView>

  );

};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(55,71,79)',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 10,

  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'rgb(255,167,38)'
  },
  main: {
    flex: 5,
  },



})