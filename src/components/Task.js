import { StyleSheet, View, Text, Dimensions } from "react-native";
import IconButton from "./IconButton";
import { images } from "../images";
import { useState } from "react";

const Task = ({ item, deleteTask, toggleTask }) => {

    // 밑에 <Text> 부분은 체크박스 아이콘을 눌러 체크된 상태가 되면 텍스트가 연해지며 라인이 그어지게 하는 것
    // edit 버튼의 <IconButton>은 마찬가지로 체크박스가 체크된 상태가 되면 수정 버튼이 사라지게 하는 것
    // delete 버튼의 <IconButton>은 삭제 버튼을 누르면 할 일 목록이 사라지게 하는 것
    return (
        <View style={styles.container}>
            <IconButton
                type={item.completed ? images.completed : images.uncompleted}  // 체크박스 아이콘을 누르면 체크박스의 상태를 변경해준다
                id={item.id}
                onPressOut={toggleTask}
            />
            <Text style={item.completed ? styles.completed : styles.text}>{item.text}</Text>
            {item.completed || (<IconButton type={images.edit}/>)}
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}/> 
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        flex: 1,
        color: 'black',
    },
    completed: {
        fontSize: 20,
        flex: 1,
        color: 'gray',
        textDecorationLine: 'line-through',
    },
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 15,
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default Task;