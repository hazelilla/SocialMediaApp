import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Routes } from "./Routes";
import ProfileTabTitle from "../components/ProfileTabTitle";
import ProfileTabContent from "../components/ProfileTabContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabNavigator = () => {
    return (
        <ProfileTabs.Navigator screenOptions={
            {
                tabBarIndicatorStyle: {
                    backgroundColor: 'transparent'
                },
                tabBarStyle: {
                    zIndex: 0
                }
            }
        }>
            <ProfileTabs.Screen name={"Tab1"} component={ProfileTabContent} 
                options={{tabBarLabel: ({focused}) => 
                <ProfileTabTitle isFocused={focused} title={'Photos'}/>}}
            />
            <ProfileTabs.Screen name={"Tab2"} component={ProfileTabContent} 
                options={{tabBarLabel: ({focused}) => 
                <ProfileTabTitle isFocused={focused} title={'Videos'}/>}}
            />
            <ProfileTabs.Screen name={"Tab3"} component={ProfileTabContent} 
                options={{tabBarLabel: ({focused}) => 
                <ProfileTabTitle isFocused={focused} title={'Saved'}/>}}
            />
        </ProfileTabs.Navigator>
    );
};

const MainMenuNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={Routes.Home} component={HomeScreen}/>
            <Drawer.Screen name={Routes.Profile} component={ProfileScreen}/>
        </Drawer.Navigator>
    );
};

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Routes.Home}>
            <Stack.Screen name={"Drawer"} component={MainMenuNavigation}/>
            <Stack.Screen name={Routes.Profile} component={ProfileScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigation;