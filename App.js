import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GiftedChat } from 'react-native-gifted-chat';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text } from 'react-native';

const Stack = createStackNavigator();

const AppBar = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: 'pink' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Add a function when I think of ui functionality */}}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  function onSend(newMessage = []) {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessage));
  }

  return (
    <>
      <AppBar navigation={navigation} />
      <View style={{ alignSelf: 'center', padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Name</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => onSend(newMessage)}
        user={{
          _id: 1,
        }}/>
    </>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}