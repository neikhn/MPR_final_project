import { StyleSheet, Pressable, View, Text, Modal, TextInput, AppRegistry, ScrollView } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import LabelTag from "../components/LabelTag.js";
import BottomPressable from "../components/bottomModelPressable.js";
import BottomModalColor from "../components/bottomModalColor.js";

const EditNote = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [pressedButton, setPressedButton] = useState(null);
    const [bottomModalVisible, setBottomModalVisible] = useState(false);
    const [text, setText] = useState('');

    const handlePressIn = (button) => {
        setPressedButton(button);
    };

    const handlePressOut = () => {
        setPressedButton(null);
    };

    const isButtonPressed = (button) => pressedButton === button;

    // Placeholder onPress functions
    const handleCopyToClipboard = () => {
        console.log('Copy to clipboard pressed');
    };

    const handleShare = () => {
        console.log('Share pressed');
    };

    const handleTrash = () => {
        console.log('Trash pressed');
    };

    const handleMakeACopy = () => {
        console.log('Make a copy pressed');
    };

    const handlePin = () => {
        console.log('Pin pressed');
    };

    const handleAddReminder = () => {
        console.log('Add a reminder pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Pressable
                    style={[styles.navButton, isButtonPressed('Menu') && styles.navButtonPressed]}
                    onPress={() => setDrawerVisible(true)}
                >
                    <Text style={styles.navButtonText}>Menu</Text>
                </Pressable>
            </View>

            <View style={styles.labelRow}>
                <LabelTag text="Work" backgroundColor="#2483f2" textColor="#fff" />
                <LabelTag text="Personal" backgroundColor="#2483f2" textColor="#fff" />
            </View>

            <ScrollView style={styles.noteContentContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    multiline={true}
                    numberOfLines={30}
                    placeholder="Enter text..."
                />
            </ScrollView>

            <View style={styles.bottomTabMenu}>
                <Text style={styles.bottomText}>Edited 11 Hours ago</Text>
                <Pressable onPress={() => console.log('Bookmarked')}>
                    <Icon style={styles.bottomIcon} name="bookmark-outline" />
                </Pressable>
                <Pressable onPress={() => setBottomModalVisible(true)}>
                    <Icon style={styles.bottomIcon} name="ellipsis-vertical-outline" />
                </Pressable>
            </View>

            <Modal
                visible={bottomModalVisible}
                animationType="slide"
                transparent={true}
            >
                <Pressable style={styles.bottomModalOverlay} onPress={() => setBottomModalVisible(false)}>
                    <View style={styles.bottomModalContainer} onStartShouldSetResponder={() => true}>
                        <View style={styles.bottomColorContainer}>
                            <Pressable onPress={() => console.log('Set to no color')}>
                                <Icon style={styles.noColor} name="ban-outline"></Icon>
                            </Pressable>
                            <BottomModalColor
                                onPress={() => console.log('Color pressed')}
                                backgroundColor="#24c731"
                            />
                            <BottomModalColor
                                onPress={() => console.log('Color pressed')}
                                backgroundColor="#b763ba"
                            />
                            <BottomModalColor
                                onPress={() => console.log('Color pressed')}
                                backgroundColor="#eb4034"
                            />
                            <BottomModalColor
                                onPress={() => console.log('Color pressed')}
                                backgroundColor="#a6bdde"
                            />
                        </View>
                        <View style={styles.bottomModalLabel}>
                            <LabelTag text="Work" backgroundColor="#d9d9d9" textColor="#000" />
                            <LabelTag text="Personal" backgroundColor="#d9d9d9" textColor="#000" />
                            <Pressable style={styles.toManageLabel} onPress={() => console.log('Navigate to Manage Label')}>
                                <Text style={styles.toManageLabelText}>+ Manage labels</Text>
                            </Pressable>
                        </View>
                        <BottomPressable
                            iconName="clipboard-outline"
                            text="Copy to clipboard"
                            onPress={handleCopyToClipboard}
                        />
                        <BottomPressable
                            iconName="share-social-outline"
                            text="Share"
                            onPress={handleShare}
                        />
                        <BottomPressable
                            iconName="trash-outline"
                            text="Trash"
                            onPress={handleTrash}
                        />
                        <BottomPressable
                            iconName="copy-outline"
                            text="Make a copy"
                            onPress={handleMakeACopy}
                        />
                        <BottomPressable
                            iconName="pin-outline"
                            text="Pin"
                            onPress={handlePin}
                        />
                        <BottomPressable
                            iconName="alarm-outline"
                            text="Add a reminder"
                            onPress={handleAddReminder}
                        />
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
        paddingTop: 60,
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
    labelRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 0,
        marginTop: 25,
        marginLeft: 15,
        paddingHorizontal: 10,
    },
    noteContentContainer: {
        padding: 20,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        width: 380,
        height: "auto",
    },
    input: {
        padding: 8,
        marginTop: 20,
        width: '100%',
        height: 400,
        textAlignVertical: "top",
        fontSize: 16,
        backgroundColor: "#d9d9d9",
        borderRadius: 10,
    },
    bottomTabMenu: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 4,
        backgroundColor: "#d9d9d9",
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        borderWidth: 1,
        borderColor: "#000"
    },
    bottomText: {
        fontSize: 12,
        fontWeight: "bold",
    },
    bottomIcon: {
        fontSize: 20,
        fontWeight: "bold",
    },
    bottomModalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    bottomModalContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottomModalLabel: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
    },
    toManageLabel: {
        backgroundColor: "#d9d9d9",
        padding: 10,
        borderRadius: 5,
        flexWrap: "wrap",
        margin: 5,
    },
    toManageLabelText: {
        color: "#000",
        fontSize: 12,
    },
    bottomColorContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
    },
    noColor: {
        fontSize: 20,
        color: "#000",
    },
});

AppRegistry.registerComponent('main', () => EditNote);

export default EditNote;
