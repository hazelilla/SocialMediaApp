import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Title = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>

    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        color: "black",
        fontFamily: "Inter-Bold"
    }

});

export default Title;