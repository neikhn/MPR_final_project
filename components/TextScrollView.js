import { useEffect, useState } from "react";
import { ScrollView, TextInput, StyleSheet, Text } from "react-native";

export default function TextScrollView({ content }) {
  const [text, setText] = useState("");

  useEffect(() => setText(content), []);

  return (
    <ScrollView style={styles.noteContentContainer}>
      <TextInput
        style={[
          styles.inputContainer, styles.inputText
        ]} 
        onChangeText={setText}
        value={text}
        multiline={true}
        numberOfLines={500}
        placeholder="Enter text.."
      ></TextInput>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  noteContentContainer: {
    marginHorizontal: 10,
  },
  inputContainer: {
    padding: 8,
    marginTop: 20,
    width: "100%",
    height: 400,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    textAlignVertical: "top",
  },
  inputText: {
    fontSize: 16,
  }
});

