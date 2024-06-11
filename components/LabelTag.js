import { Text, StyleSheet, Pressable, View } from "react-native";
import PropTypes from "prop-types";

const LabelTag = ({ label, isPressable, onPress }) => {
  return isPressable ? (
    <Pressable
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>{label.label}</Text>
    </Pressable>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>{label.label}</Text>
    </View>
  );
};

LabelTag.propTypes = {
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func,
  isPressable: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 5,
    flexWrap: "wrap",
    margin: 5,
  },
  text: {
    fontSize: 12,
    color: 'grey'
  },
});

export default LabelTag;