import { View, Text, StyleSheet, FlatList} from "react-native";
import { NOTE } from "../data/dummy-data"

export default function Home() {
  return (
    <FlatList
      data={NOTE}
      keyExtractor={(noteItem) => noteItem.id}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});

