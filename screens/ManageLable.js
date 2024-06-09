//search function hiện chỉ add chứ ko search đc

import { StyleSheet, Pressable, View, Text, Modal, TextInput, AppRegistry, ScrollView } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Search from "../components/Search";
import LabelTag from "../components/LabelTag";

const ManageLabel = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [pressedButton, setPressedButton] = useState(null);
    const [labels, setLabels] = useState([
        { text: "Personal", button: "Personal" },
        { text: "Work", button: "Work" },
        { text: "Work1", button: "Work1" },
    ]);
    const [filteredLabels, setFilteredLabels] = useState(labels);

    const handlePressIn = (button) => {
        setPressedButton(button);
    };

    const handlePressOut = () => {
        setPressedButton(null);
    };

    const isButtonPressed = (button) => pressedButton === button;

    const handleCreateLabel = (text) => {
        const newLabel = { text: text, button: text };
        setLabels([...labels, newLabel]);
        setFilteredLabels([...filteredLabels, newLabel]);
    };

    const handleSearch = (searchTerm) => {
        if (searchTerm && typeof searchTerm === 'string') {
            const trimmedSearchTerm = searchTerm.trim();
            const filteredLabels = labels.filter((label) =>
                label.text.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
            );
            setFilteredLabels(filteredLabels);
        } else {
            setFilteredLabels(labels);
        }
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
                        backgroundColor={isButtonPressed(label.button) ? '#0763f2' : '#d9d9d9'}
                        textColor={isButtonPressed(label.button) ? '#fff' : '#000'}
                        onPress={() => {
                            if (isButtonPressed(label.button)) {
                                handlePressOut();
                            } else {
                                handlePressIn(label.button);
                            }
                        }}
                    />
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
