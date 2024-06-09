import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'; // Optional, for prop type validation

const LabelTag = ({ text, backgroundColor, textColor }) => {
    return (
        <View style={[styles.tag, { backgroundColor }]}>
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </View>
    );
};

LabelTag.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    tag: {
        padding: 10,
        borderRadius: 5,
        flexWrap: "wrap",
        margin: 5,
    },
    text: {
        fontSize: 12,
    },
});

export default LabelTag;
