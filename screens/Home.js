import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { NOTES } from "../data/dummy-data";
import NoteContainer from "../components/NoteContainer";
import ActionButton from "../components/ActionButton";

export default function Home({ navigation }) {
  const [notes, setNotes] = useState(NOTES);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Update notes state to trigger re-render
      setNotes(NOTES.slice()); // Copying array to trigger state update
    });

    return unsubscribe;
  }, [navigation]);

  function renderNoteItem({ item }) {
    function noteContainerPressHandler() {
      navigation.navigate("Edit note", {
        id: item.id,
        updateNote: updateNote,
      });
    }
  
    return (
      <NoteContainer note={item} onPress={noteContainerPressHandler} />
    );
  }

  function newNotePressHandler() {
    navigation.navigate("New note");
  }

  function updateNote(updatedNote) {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderNoteItem}
        extraData={notes} // Ensure re-render on state change
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
