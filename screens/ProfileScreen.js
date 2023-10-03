import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet } from "react-native";
import globalStyle from "../assets/styles/globalStyles";
import { ProfileTabNavigator } from "../navigation/MainNavigation";

const ProfileScreen = () => {
    return (
        <SafeAreaView style={globalStyle.background}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={globalStyle.profileImageContainer}>
                    <View style={globalStyle.profileImageWrapper}>
                        <Image
                            source={require("../assets/images/default_profile.png")}
                            style={globalStyle.profileImage}
                        />
                    </View>
                </View>

                <Text style={globalStyle.userName}>
                    Ela Lilai
                </Text>

                <View style={globalStyle.statWrapper}>
                    <View>
                        <Text style={globalStyle.stats}>45</Text>
                        <Text style={globalStyle.statType}>Following</Text>
                    </View>

                    <View style={globalStyle.border} />

                    <View>
                        <Text style={globalStyle.stats}>30M</Text>
                        <Text style={globalStyle.statType}>Followers</Text>
                    </View>

                    <View style={globalStyle.border} />

                    <View>
                        <Text style={globalStyle.stats}>100</Text>
                        <Text style={globalStyle.statType}>Posts</Text>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <ProfileTabNavigator />
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};


export default ProfileScreen;

