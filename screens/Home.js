import { View, StyleSheet, FlatList } from "react-native";
import { NOTES } from "../data/dummy-data";
import NoteContainer from "../components/NoteContainer";
import ActionButton from "../components/ActionButton";

export default function Home({ navigation }) {
  function renderNoteItem({ item }) {
    function noteContainerPressHandler() {
      navigation.navigate("Edit note", {
        id: item.id,
      });
    }

    return (
        <NoteContainer note={item} onPress={noteContainerPressHandler} />
    )
  }

  function newNotePressHandler() {
    navigation.navigate("New note");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={NOTES}
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
