import React from 'react';
import {Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types'; // Optional, for prop type validation

const LabelTag = ({ text, backgroundColor, textColor, onPress, isPressable }) => {
    return (
        <Pressable onPress={onPress} style={[styles.tag, { backgroundColor }]}>
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </Pressable>
    );
};

LabelTag.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    onPress: PropTypes.func,
    isPressable: PropTypes.bool,
};

const styles = StyleSheet.create({
    tag: {
        padding: 10,
        borderRadius: 5,
        flexWrap: "wrap",
        margin: 5,
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 12,
    },
});

export default LabelTag;
