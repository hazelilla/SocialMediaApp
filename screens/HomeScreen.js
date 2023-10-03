import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyle from '../assets/styles/globalStyles';
import UserStory from '../components/UserStory';
import UserPost from '../components/UserPost';

const HomeScreen = () => {

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRendereData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRendereData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  }

  const userStories = [
    {
      id: 1,
      name: 'Ela',
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 2,
      name: 'Beyza',
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 3,
      name: 'Emre',
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 4,
      name: 'Ozcan',
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 5,
      name: 'Nilufer',
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 6,
      name: 'Alican',
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 7,
      name: 'Badir',
      profileImage: require('../assets/images/default_profile.png')
    },

  ];

  const userPosts = [
    {
      id: 1,
      name: 'Ela',
      lastName: 'Lilai',
      location: 'Gostivar, MK',
      likes: 280,
      comments: 10,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 2,
      name: 'Beyza',
      lastName: 'Saban',
      location: 'Gostivar, MK',
      likes: 350,
      comments: 5,
      bookmarks: 30,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 3,
      name: 'Emre',
      lastName: 'Pirgozi',
      location: 'Gostivar, MK',
      likes: 300,
      comments: 2,
      bookmarks: 3,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png')
    },
    {
      id: 4,
      name: 'Nilufer',
      lastName: 'Basgul',
      location: 'Istanbul, TR',
      likes: 180,
      comments: 4,
      bookmarks: 5,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png')
    },
  ]

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRendereData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRendereData(getInitialDataPosts);
    setIsLoadingUserPosts(false);

  }, []);

  return (
    <SafeAreaView style={globalStyle.background}>
      <View style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity
          style={globalStyle.messageIcon}
        >
          <Icon name="envelope-o" size={30} color="#898DAD" />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={globalStyle.userStoryContainer}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserStories) return;
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRendereData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userStoriesRenderedData}
          renderItem={({ item }) => (
            <UserStory key={item.id} firstName={item.name} profileImage={item.profileImage} />
          )} />
      </View>

      <View style={globalStyle.userPostContainer}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) return;
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userStoriesCurrentPage + 1);
              setUserPostsRendereData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <UserPost firstName={item.name}
              lastName={item.lastName}
              location={item.location}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );

}

export default HomeScreen;
