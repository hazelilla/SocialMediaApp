import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

    header: {
        marginLeft: 27, 
        marginRight: 17, 
        marginTop: 30, 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    },

    messageIcon: {
        backgroundColor: "#F9FAFB", 
        padding: 14, 
        borderRadius: 100
    },

    messageNumberContainer: {
        backgroundColor: "#F35BAC",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 20,
        height: 20,
        position: 'absolute',
        right: 6,
        top: 7
    }, 
    
    messageNumber: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Inter-Bold'
    },

    userStoryContainer: {
        marginTop: 20,
        marginHorizontal: 28,
    },

    userPostContainer: {
        flex:1,
        marginHorizontal: 24
    },

    profileImageContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 32
    },

    profileImageWrapper: { 
        borderWidth: 1, 
        borderRadius: 110, 
        borderColor: "#0150EC", 
        padding: 4 
    },

    profileImage: { 
        width: 110, 
        height: 110 
    },

    userName: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Inter-Bold',
        color: "black"
    },

    statWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderColor: "#E9EFF1"
    },

    stats: {
        fontFamily: 'Inter-Bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },

    statType: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: '#79869F',
        textAlign: 'center'
    },

    border: { 
        borderRightWidth: 1, 
        borderColor: "#E9EFF1" 
    }
});

export default globalStyle;