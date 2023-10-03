import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileImage from "./ProfileImage";

const UserStory = ({ firstName, profileImage }) => {
    return (
        <View style={styles.container}>

            <ProfileImage profileImage={profileImage} imageDimensions={65} />

            <Text style={styles.firstName}>
                {firstName}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        marginRight: 20
    },

    firstName: { 
        fontSize: 14, 
        fontFamily: 'Inter-SemiBold', 
        textAlign: 'center', 
        color: "#022150", 
        marginTop: 8 
    }

});

export default UserStory;