import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import IconButton from "./components/IconButton";
import Title from './components/Title';
import Input from "./components/Input";
import { images } from "./images";
import Task from "./components/Task";

export default function App() {
    // 할 일 목록 값 저장할 useState 변수 선언
    const [newTask, setNewTask] = useState('');
    // 맨 처음 화면에 보여질 to do list 초기값 선언
    const [tasks, setTasks] = useState({
        1: {id: '1', text: 'todo list 1', completed: false },
        2: {id: '2', text: 'todo list 2', completed: false },
        3: {id: '3', text: 'todo list 3', completed: false },
        4: {id: '4', text: 'todo list 4', completed: false },
        5: {id: '5', text: 'todo list 5', completed: false },
    });

    // 할 일 목록을 추가하는 함수
    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: { id: ID, text: newTask, completed: false },
        };
        setNewTask('');
        setTasks({...tasks, ...newTaskObject});
    };

    // 할 일 목록을 삭제하는 함수
    const _deleteTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    };

    // 완료한 할 일 목록의 비어있는 체크박스 아이콘을 누르면 체크박스 아이콘 내부에 체크표시가 나타나게 하는 함수
    const _toggleTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    };

    // 텍스트인풋 창의 텍스트를 입력하는 대로 바꿔주는 함수
    const _handleTextChange = (text) => {
        setNewTask(text);
    };

    return (
        <View style={styles.container}>
            <Title title="Todo List"></Title>
            <Input
                value={newTask}
                onChangeText={_handleTextChange}
                onSubmitEditing={_addTask} // 키패드 상의 완료 버튼을 누르면 입력한 텍스트의 이름을 가지는 할 일 목록 생성
            />
            <ScrollView>
                {Object.values(tasks)      // 입력받은 텍스트를 토대로 아이콘이 눌렀다가 떼어질 때 함수를 실행하도록(삭제와 아이콘 변경)
                    .reverse()
                    .map((item) => (
                        <Task
                        key = {item.id}
                        item = {item}
                        deleteTask={_deleteTask}
                        toggleTask={_toggleTask}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});