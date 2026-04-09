import {Modal, View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './style';
import {useEffect, useState} from "react";

export default function  TaskModal({ visible, onClose, onSave, taskToEdit}){
    const [form, setForm] = useState({
        title: '', description: '', startDate: '', endDate: '', priority: '', done: false
    });

    useEffect(() => {
        if(taskToEdit) setForm(taskToEdit);
        else setForm({
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            priority: '',
            done: false
        })



    }, [taskToEdit, visible]);


    return (
        <Modal visible={visible} animation="slide">
            <View style={style.modalBody}>
                <Text style={style.label}>
                    {taskToEdit ? 'Edit task' : 'Add task'}
                </Text>

                <TextInput style={style.input}
                           placeholder='title'
                           value={form.title}
                           onChangeText={v =>setForm({
                               ...form, title: v
                           })}/>
                <TextInput style={style.input}
                           placeholder='description'
                           value={form.description}
                           onChangeText={v => setForm({
                               ...form, description: v
                           })}
                           />
                <TextInput style={style.input}
                           placeholder='startDate'
                           value={form.startDate}
                           onChangeText={v => setForm({
                               ...form, startDate: v
                           })}
                           />
                <TextInput style={style.input}
                           placeholder='endDate'
                           value={form.endDate}
                           onChangeText={v => setForm({
                               ...form, endDate: v
                           })}
                />
                <TextInput style={style.input}
                           placeholder='priority'
                           value={form.priority}
                           onChangeText={v => setForm({
                               ...form, priority: v
                           })}
                           />
                <TextInput style={style.input}
                placeholder='done'/>

            </View>
        </Modal>
    )
}