import React from "react";
import { Dimensions, StyleSheet, Text, TextInput } from "react-native";

const Input = ({ value, onChangeText, onSubmitEditing }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder="+ Add a task"
            maxLength={50}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    );
};

// Dimension은 기기의 화면 크기를 알고 크기에 따라 여러 컴포넌트들이 동일한 크기로 적용될 수 있도록 사용
const styles = StyleSheet.create({
    input: {
        width: Dimensions.get('window').width - 15,
        fontSize: 20,
        backgroundColor: '#f1f3f5',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 8,
        alignItems: 'center',
    },
});

export default Input;