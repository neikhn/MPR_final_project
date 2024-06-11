import { StyleSheet, View, AppRegistry } from "react-native";
import React, { useState } from "react";
import Search from "../components/Search";
import LabelTag from "../components/LabelTag";
import { LABELS, NOTES, TRASH } from "../data/dummy-data";

const ManageLabel = () => {
    const [labels, setLabel] = useState(LABELS);
    const [notes, setNote] = useState(NOTES);
    const [trash, setTrash] = useState(TRASH);
    const [pressedButton, setPressedButton] = useState(null);
    const [filteredLabels, setFilteredLabels] = useState(labels);

    const handlePressIn = (labelId) => {
        setPressedButton(prev => (prev === labelId ? null : labelId));
    };

    const handlePressOut = () => {
        setPressedButton(null);
    };

    const handleLabelPress = (label) => {
        setPressedButton(prev => (prev === label.id ? null : label.id));
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
            <Search labels={labels} onSearch={handleSearch} onCreateLabel={handleCreateLabel} />
            <View style={styles.labelList}>
                {filteredLabels.map(label => (
                    <View key={label.id} style={{ opacity: pressedButton === label.id ? 0.7 : 1 }}>
                        <LabelTag
                            label={label}
                            isPressable={true}
                            onPressIn={() => handlePressIn(label.id)}
                            onPressOut={handlePressOut}
                            onPress={() => handleLabelPress(label)}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
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
        marginLeft: 0,
        marginTop: 30,
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
        justifyContent: "flex-start",
        padding: 5,
    },
});

AppRegistry.registerComponent('main', () => ManageLabel);

export default ManageLabel;
