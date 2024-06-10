import { View, Text, StyleSheet, FlatList } from "react-native";
import { NOTES } from "../data/dummy-data";
import NoteContainer from "../components/NoteContainer";

export default function Home() {
  const renderNoteItem = ({ item }) => (
    <NoteContainer
      item={item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={NOTES}
        keyExtractor={(noteItem) => noteItem.id}
        renderItem={renderNoteItem}
      />
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
