import { View, Text, StyleSheet, Pressable } from "react-native";
import { formatDistanceToNow } from "date-fns";
import LabelContainer from './LabelContainer';

export default function NoteContainer({ note, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          pressed ? styles.notePressed : null,
        ]}
        onPress={onPress}
      >
        <Text style={styles.noteTime}>
          {formatDistanceToNow(new Date(note.updateAt), { addSuffix: true })}
        </Text>
        <LabelContainer note={note}/>
        <Text style={styles.noteContent}>{note.content}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  noteContent: {
    color: "black",
    fontSize: 16,
  },
  noteTime: {
    fontSize: 12,
    color: "gray",
    marginBottom: 5,
  },
  notePressed: {
    opacity: 0.5,
  },
});
