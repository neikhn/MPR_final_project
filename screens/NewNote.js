import { StyleSheet, Pressable, View, Text, Modal } from "react-native";
import TextScrollView from "../components/TextScrollView";

export default function NewNote() {
  return (
    <View style={styles.container}>
    <TextScrollView></TextScrollView>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  }
});