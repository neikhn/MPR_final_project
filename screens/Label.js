import { StyleSheet, Pressable, View, Text, Modal, TextInput, AppRegistry } from "react-native";
import React, { useState } from "react";
import Search from "../components/Search";
import LabelTag from "../components/LabelTag";

const Label = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [pressedButton, setPressedButton] = useState(null);
    const [popUpModalVisible, setPopUpModalVisible] = useState(false);
    const [labels, setLabels] = useState([
        { text: "Personal", button: "Personal" },
        { text: "Work", button: "Work" },
        { text: "Work1", button: "Work1" },
    ]);
    const [filteredLabels, setFilteredLabels] = useState(labels);
    const [tempLabelText, setTempLabelText] = useState('');

    const handlePressIn = (button) => {
        setPressedButton(button);
    };

    const handlePressOut = () => {
        setPressedButton(null);
    };

    const isButtonPressed = (button) => pressedButton === button;

    const handleLabelPress = (label) => {
        setPressedButton(label.button);
        setTempLabelText(label.text);
        setPopUpModalVisible(true);
    };

    const handleSaveLabel = () => {
        setLabels((prevLabels) =>
            prevLabels.map((label) =>
                label.button === pressedButton ? { ...label, text: tempLabelText } : label
            )
        );
        setFilteredLabels((prevLabels) =>
            prevLabels.map((label) =>
                label.button === pressedButton ? { ...label, text: tempLabelText } : label
            )
        );
        setPopUpModalVisible(false);
        setPressedButton(null);
    };

    const handleDeleteLabel = () => {
        setLabels((prevLabels) =>
            prevLabels.filter((label) => label.button !== pressedButton)
        );
        setFilteredLabels((prevLabels) =>
            prevLabels.filter((label) => label.button !== pressedButton)
        );
        setPopUpModalVisible(false);
        setPressedButton(null);
    };

    const handleCreateLabel = (text) => {
        const newLabel = { text: text, button: text };
        setLabels([...labels, newLabel]);
        setFilteredLabels([...filteredLabels, newLabel]);
    };

    const handleSearch = (filteredLabels) => {
        setFilteredLabels(filteredLabels);
    };

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Pressable
                    style={[styles.navButton, isButtonPressed('Menu') && styles.navButtonPressed]}
                    onPress={() => {
                        if (isButtonPressed('Menu')) {
                            handlePressOut();
                        } else {
                            handlePressIn('Menu');
                        }
                    }}
                >
                    <Text style={styles.navButtonText}>Menu</Text>
                </Pressable>
            </View>
            <Search labels={labels} onSearch={handleSearch} onCreateLabel={handleCreateLabel} />

            <View style={styles.labelList}>
                {filteredLabels.map((label) => (
                    <LabelTag
                        key={label.button}
                        text={label.text}
                        backgroundColor="#0763f2"
                        textColor="#fff"
                        onPress={() => handleLabelPress(label)}
                    />
                ))}
            </View>

            <Modal
                visible={popUpModalVisible}
                animationType="fade"
                transparent={true}
            >
                <Pressable style={styles.popUpModalOverlay} onPress={() => setPopUpModalVisible(false)}>
                    <View style={styles.popUpModalContainer} onStartShouldSetResponder={() => true}>
                        <TextInput
                            style={styles.popUpModalText}
                            value={tempLabelText}
                            onChangeText={(text) => setTempLabelText(text)}
                        />
                        <View style={styles.popUpButtonContainer}>
                            <Pressable onPress={handleSaveLabel}>
                                <Text style={styles.popUpButtonText}>Save</Text>
                            </Pressable>
                            <Pressable onPress={handleDeleteLabel}>
                                <Text style={styles.popUpButtonText}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 40,
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "#fff",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    navButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    navButtonPressed: {
        backgroundColor: "#9bb9e8",
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    labelList: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
    },
    popUpModalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    popUpModalContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 50,
        borderRadius: 10,
        justifyContent: 'flex-start',
        width: 300,
    },
    popUpButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popUpModalText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        marginBottom: 30,
        borderBottomWidth: 1,
    },
    popUpButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

AppRegistry.registerComponent('main', () => Label);

export default Label;
