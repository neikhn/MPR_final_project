import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const BottomModalColor = ({ onPress, backgroundColor }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={[styles.colorCircle, { backgroundColor: backgroundColor }]}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    colorCircle: {
        width: 20,
        height: 20,
        borderRadius: 25,
        margin: 5,
    },
});

BottomModalColor.propTypes = {
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string,
};

BottomModalColor.defaultProps = {
    onPress: () => {},
    backgroundColor: '#000', // Default color if none is provided
};

export default BottomModalColor;
