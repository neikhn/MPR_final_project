import React, { useState } from "react";
import { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { NOTES } from "../data/dummy-data";
import NoteContainer from "../components/NoteContainer";
import ActionButton from "../components/ActionButton";

export default function Home({ navigation }) {
  const [notes, setNotes] = useState(NOTES);

  function renderNoteItem({ item }) {
    function noteContainerPressHandler() {
      navigation.navigate("Edit note", {
        id: item.id,
        updateNote: updateNote, // Pass the updateNote function
      });
    }
  
    return (
      <NoteContainer note={item} onPress={noteContainerPressHandler} />
    );
  }

  function newNotePressHandler() {
    navigation.navigate("New note");
  }

  // Function to update the NOTES array
  function updateNote(updatedNote) {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes} // Use the updated notes array
        keyExtractor={(noteItem) => noteItem.id}
        renderItem={renderNoteItem}
      />
      <ActionButton type="add" onPress={newNotePressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});