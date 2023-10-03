import React from "react";
import { Text, StyleSheet } from "react-native";

const ProfileTabTitle = ({ title, isFocused }) => {
    return (
        <Text style={[styles.tabTitle, isFocused && styles.titleFocused]}>{title}</Text>
    );

};

const styles = StyleSheet.create({

    tabTitle: {
        padding: 10,
        color: "#79869F",
        fontFamily: "Inter-Regular",
        fontSize: 16
    },

    titleFocused: {
        color: "black",
        fontFamily: "Inter-SemiBold"
    }

});

export default ProfileTabTitle;