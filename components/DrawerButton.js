import { Pressable, Text, StyleSheet } from 'react-native';

export default function DrawerButton({ children }) {
  <Pressable
  style={({ pressed }) => [
    styles.linkButtonContainer,
    pressed ? styles.linkButtonContainerPressed : null,
  ]}
  >
    <Text
      style={({ pressed }) => [
        styles.linkButtonText,
        pressed ? styles.linkButtonTextPressed : null,
      ]}
    >
      { children }
    </Text>
  </Pressable>
};

const styles = StyleSheet.create({
    linkButtonContainer: {
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 10,
        width: "90%",
    },
    linkButtonContainerPressed: {
        backgroundColor: "#9bb9e8",
    },
    linkButtonText: {
        color: "black",
        fontWeight: "600",
        fontSize: 20,
    },
    linkButtonTextPressed: {
        color: "#0763f2",
    },
});
