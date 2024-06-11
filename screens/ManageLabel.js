import { StyleSheet, View, AppRegistry } from "react-native";
import React, { useState } from "react";
import Search from "../components/Search";
import LabelTag from "../components/LabelTag";
import { LABELS, NOTES, TRASH } from "../data/dummy-data";

const ManageLabel = () => {
    const [labels, setLabel] = useState(LABELS);
    const [notes, setNote] = useState(NOTES);
    const [trash, setTrash] = useState(TRASH);
    const [filteredLabels, setFilteredLabels] = useState(labels);
    const [selectedLabels, setSelectedLabels] = useState([]);


    const handleToggleLabel = (labelId) => {
        setSelectedLabels(prevSelected => {
            if (prevSelected.includes(labelId)) {
                // If label is already selected, remove it
                return prevSelected.filter(id => id !== labelId);
            } else {
                // If label is not selected, add it
                return [...prevSelected, labelId];
            }
        });
    };

    const isLabelSelected = (labelId) => {
        return selectedLabels.includes(labelId);
    };

    const handleCreateLabel = (label) => {
        // Check if the label is empty or consists only of whitespace
        if (!label.trim()) {
            // If the label is empty, return without creating a new label
            return;
        }
                
        // Find the maximum ID among existing labels
        const maxId = labels.reduce((max, existingLabel) => {
            // Check if the existing label has a valid id property
            if (existingLabel.id && typeof existingLabel.id === 'string') {
                const labelIdNumber = parseInt(existingLabel.id.substring(1));
                return labelIdNumber > max ? labelIdNumber : max;
            }
            return max;
        }, 0);
    
        // Generate a new label ID based on the maximum ID
        const newId = `l${maxId + 1}`;
    
        const newLabel = { id: newId, label: label };
        const updatedLabels = [...labels, newLabel];
        
        // Update the state variable for both screens
        setLabel(updatedLabels);
        setFilteredLabels(updatedLabels);
    
        // Update the dummy data
        LABELS.push(newLabel);
    };
    
    const handleSearch = (filteredLabels) => {
        setFilteredLabels(filteredLabels);
    };

    return (
        <View style={styles.container}>
            <Search labels={labels} onSearch={handleSearch} onCreateLabel={handleCreateLabel} />
            <View style={styles.labelList}>
                {filteredLabels.map(label => (
                    <View key={label.id} style={{ opacity: isLabelSelected(label.id) ? 0.7 : 1 }}>
                        <LabelTag
                            label={label}
                            isPressable={true}
                            onPress={() => handleToggleLabel(label.id)}
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
