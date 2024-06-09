import React, { useState } from 'react';
import { ScrollView, TextInput, StyleSheet } from 'react-native';

const TextScrollView = () => {
    const [text, setText] = useState('');

    return (
        <ScrollView style={styles.noteContentContainer}>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                multiline={true}
                numberOfLines={30}
                placeholder="Enter text..."
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    noteContentContainer: {
        padding: 20,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 80,
        width: 380,
        height: "auto",
    },
    input: {
        padding: 8,
        marginTop: 20,
        width: '100%',
        height: 400,
        textAlignVertical: "top",
        fontSize: 16,
        backgroundColor: "#d9d9d9",
        borderRadius: 10,
    },
});

export default TextScrollView;