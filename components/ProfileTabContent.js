import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";

const ProfileTabContent = () => {
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <View style={styles.container}>
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
                <Image 
                    source={require("../assets/images/default_post.png")}
                    style={styles.image}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "white"
    },

    container: {
        paddingHorizontal: 21, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
    },

    image: {
        width: 170, 
        height: 120, 
        resizeMode: 'contain',
        marginTop: 11
    }

});

export default ProfileTabContent;