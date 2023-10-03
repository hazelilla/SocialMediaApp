import React from "react";
import { Image, View, StyleSheet } from "react-native";

const ProfileImage = ({profileImage, imageDimensions}) => {
    return(
        <View style={styles.profileWrapper}>
            <Image style={{width: imageDimensions, height: imageDimensions}} source={profileImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    profileWrapper: {
        borderWidth: 2, 
        borderRadius: 65, 
        borderColor: "#F35BAC", 
        padding: 3
    }

});
export default ProfileImage;