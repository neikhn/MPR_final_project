import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContainer: {
    width: "70%",
    height: "100%",
    padding: 20,
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  modalText: {
    fontSize: 18,
    textAlign: "left",
    marginBottom: 20,
  },
});

export default styles;