import { View, Text, StyleSheet } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { LABELS } from "../data/dummy-data";
import LabelTag from "./LabelTag";

export default function NoteContainer({ item }) {
  function findLabelById(id) {
    return LABELS.find(label => label.id === id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.noteTime}>
        {formatDistanceToNow(new Date(item.updateAt), { addSuffix: true })}
      </Text>
      <View style={styles.labelContainer}>
        {item.labelIds.map(labelId => {
          const label = findLabelById(labelId);
          return (
            <LabelTag 
              key={labelId}
              label={label}
              isPressable={false}
            />
          );
        })}
      </View>
      <Text style={styles.noteContent}>{item.content}</Text>
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
    color: 'black',
    fontSize: 16,
  },
  noteTime: {
    fontSize: 12,
    color: "gray",
  },
  labelContainer: {
    flexDirection: 'row',
    marginLeft: -5,
  }
});
