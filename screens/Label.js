import { StyleSheet, Pressable, View, Text, Modal, TextInput, AppRegistry } from "react-native";
import { useState } from "react";
import Search from "../components/Search";
import LabelTag from "../components/LabelTag";
import { LABELS, NOTES, TRASH } from "../data/dummy-data";

const Label = () => {
    const [labels, setLabel] = useState(LABELS);
    const [notes, setNote] = useState(NOTES);
    const [trash, setTrash] = useState(TRASH);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [pressedButton, setPressedButton] = useState(null);
    const [popUpModalVisible, setPopUpModalVisible] = useState(false);
    const [filteredLabels, setFilteredLabels] = useState(LABELS);
    const [tempLabelText, setTempLabelText] = useState('');

    const handlePressIn = (button) => {
        setPressedButton(button);
    };

    const handlePressOut = () => {
        setPressedButton(null);
    };

    const isButtonPressed = (button) => pressedButton === button;

    const handleLabelPress = (label) => {
        setPressedButton(label.id);
        setTempLabelText(label.label);
        setPopUpModalVisible(true);
    };

    const handleSaveLabel = () => {
        // Update the labels state variable and filteredLabels
        const updatedLabels = labels.map(label =>
            label.id === pressedButton ? { ...label, label: tempLabelText } : label
        );
        setLabel(updatedLabels);
        setFilteredLabels(updatedLabels);
    
        // Update notes and trash with the edited label
        const updatedNotes = notes.map(note => ({
            ...note,
            labelIds: note.labelIds.includes(pressedButton) ? note.labelIds.map(labelId => labelId === pressedButton ? tempLabelText : labelId) : note.labelIds,
        }));
        setNote(updatedNotes);
    
        const updatedTrash = trash.map(item => ({
            ...item,
            labelIds: item.labelIds.includes(pressedButton) ? item.labelIds.map(labelId => labelId === pressedButton ? tempLabelText : labelId) : item.labelIds,
        }));
        setTrash(updatedTrash);
    
        // Update the dummy data
        const updatedDummyLabels = LABELS.map(label =>
            label.id === pressedButton ? { ...label, label: tempLabelText } : label
        );
        const updatedDummyNotes = NOTES.map(note => ({
            ...note,
            labelIds: note.labelIds.includes(pressedButton) ? note.labelIds.map(labelId => labelId === pressedButton ? tempLabelText : labelId) : note.labelIds,
        }));
        const updatedDummyTrash = TRASH.map(item => ({
            ...item,
            labelIds: item.labelIds.includes(pressedButton) ? item.labelIds.map(labelId => labelId === pressedButton ? tempLabelText : labelId) : item.labelIds,
        }));
        // Update the dummy data
        LABELS = updatedDummyLabels;
        NOTES = updatedDummyNotes;
        TRASH = updatedDummyTrash;
    
        setPopUpModalVisible(false);
        setPressedButton(null);
    };

    const handleDeleteLabel = () => {
        // Update the labels state variable and filteredLabels
        const updatedLabels = labels.filter(label => label.id !== pressedButton);
        setLabel(updatedLabels);
        setFilteredLabels(updatedLabels);
    
        // Remove the label from notes and trash
        const updatedNotes = notes.map(note => ({
            ...note,
            labelIDs: note.labelIds.filter(labelId => labelId !== pressedButton),
        }));
        setNote(updatedNotes);
    
        const updatedTrash = trash.map(item => ({
            ...item,
            labelIDs: item.labelIds.filter(labelId => labelId !== pressedButton),
        }));
        setTrash(updatedTrash);
    
        // Update the dummy data
        const updatedDummyLabels = LABELS.filter(label => label.id !== pressedButton);
        const updatedDummyNotes = NOTES.map(note => ({
            ...note,
            labelIds: note.labelIds.filter(labelId => labelId !== pressedButton),
        }));
        const updatedDummyTrash = TRASH.map(item => ({
            ...item,
            labelIds: item.labelIds.filter(labelId => labelId !== pressedButton),
        }));
        // Update the dummy data
        LABELS = updatedDummyLabels;
        NOTES = updatedDummyNotes;
        TRASH = updatedDummyTrash;
    };

    const handleCreateLabel = (label) => {
        const newLabel = { id: `l${labels.length + 1}`, label: label, button: label };
        const updatedLabels = [...labels, newLabel];
        setLabel(updatedLabels);
        setFilteredLabels(updatedLabels);
    
        // Update the dummy data
        const updatedDummyLabels = [...LABELS, newLabel];
        LABELS = updatedDummyLabels;
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
                {filteredLabels.map(label => (
                    <LabelTag
                        key={label.id}
                        label={label}
                        isPressable={true}
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
