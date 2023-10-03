import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ProfileImage from "./ProfileImage";
import Icon from 'react-native-vector-icons/Entypo';

const UserPost = ({ firstName, lastName, location, image, profileImage, likes, comments, bookmarks }) => {
    return (
        <View style={styles.container}>
            <View style={styles.postHeaderWrapper}>
                <View style={styles.postHeader}>
                    <ProfileImage profileImage={profileImage} imageDimensions={48} />

                    <View style={styles.headerText}>
                        <Text style={styles.nameText}>
                            {firstName} {lastName}
                        </Text>
                        <Text style={styles.locationText}>
                            {location}
                        </Text>
                    </View>
                </View>

                <Icon name="dots-three-horizontal" size={24} color="#898DAD" />
            </View>

            <View style={styles.imageWrapper}>
                <Image source={image} />
            </View>

            <View style={styles.interactionsWrapper}>
                <View style={styles.interactions}>
                    <Icon name="heart" size={24} color="#79869F" />
                    <Text style={styles.interactionText}>
                        {likes}
                    </Text>
                </View>

                <View style={[styles.interactions, { marginLeft: 27 }]}>
                    <Icon name="typing" size={24} color="#79869F" />
                    <Text style={styles.interactionText}>
                        {comments}
                    </Text>
                </View>

                <View style={[styles.interactions, { marginLeft: 27 }]}>
                    <Icon name="bookmark" size={24} color="#79869F" />
                    <Text style={styles.interactionText}>
                        {bookmarks}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        marginTop: 35,
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: "#EFF2F6",
        flex: 1
    },

    postHeaderWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    postHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerText: {
        justifyContent: 'center',
        marginLeft: 10
    },

    nameText: {
        color: 'black',
        fontFamily: 'Inter-SemiBold',
        fontSize: 16
    },

    locationText: {
        color: '#79869F',
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        marginTop: 5
    },

    imageWrapper: {
        alignItems: 'center',
        marginVertical: 20
    },

    interactionsWrapper: {
        marginLeft: 10,
        flexDirection: 'row'
    },

    interactions: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    interactionText: {
        marginLeft: 3,
        color: "#79869F"
    }

});


export default UserPost;