import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { theme } from './src/styles/global'
import  AddTask  from './src/components/AddTask'
import  EditTask  from './src/components/EditTask'
import  TaskCard  from './src/components/TaskCard'
import  SearchBar  from './src/components/SearchBar'
import { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState([])
  const [searchText, setSearchText] = useState('')
  const [addVisible, setAddvisible] = useState(false)
  const [editVisible, setEditvisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const addTask = (newTask) => {
    setTasks([...tasks, {...newTask, id: Date.now().toString()}])
    setAddvisible(false)
  }

  const updateTask = (updateTask) => {
    setTasks(tasks.map(t => t.id === updateTask.id ? updateTask : t))
    setEditvisible(false)
  }

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id))

  const openEdit = (task) => {
    setSelectedTask(task)
    setEditvisible(true)
  }

  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(searchText.toLowerCase()))

  return (
      <View style={styles.container}>


        <Text style={styles.header}>To Do List</Text>

        <SearchBar value={searchText} onChangeText={setSearchText}/>

        <FlatList
            data={filteredTasks}
            keyExtractor={item => item.id}
            renderItem={({item }) => (
                <TaskCard
                    item = {item} onDelete={deleteTask} onEdit={openEdit}
                />
            )}
        />

        <TouchableOpacity style={styles.button} onPress={() => setAddvisible(true)}>
          <Text style={styles.adicionar}>+</Text>
        </TouchableOpacity>

        <AddTask visible={addVisible}
                 onSave={addTask}
                 onClose={()=> setAddvisible(false)}
        />

        <EditTask visible={editVisible}
                  taskData={selectedTask}
                  onSave={updateTask}
                  onClose={() => setEditvisible(false)}
        />



        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center,'
  },
  adicionar: {
    position: 'absolute',
    top: 6.5,
    color: '#fff',
    fontSize: 30,
  },
});