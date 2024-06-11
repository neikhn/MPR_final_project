import { StyleSheet, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

export default function ActionButton({ type, onPress }) {
  if (type === 'add') {
    return (
      <View style={styles.container}>
        <Pressable onPress={onPress}>
          <Icon style={styles.content} name="add-outline"/>
        </Pressable>
      </View>
    )
  }
  if (type === 'check') {
    return (
      <View style={styles.container}>
        <Pressable onPress={onPress}>
          <Icon style={styles.content} name="checkmark-outline" />
        </Pressable>
      </View>
    )
  }
}

ActionButton.prototype = {
  type: PropTypes.oneOf(['add', 'check']).is
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 60,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: "#3C9FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    color: "white",
    fontSize: 50,
  },
});
