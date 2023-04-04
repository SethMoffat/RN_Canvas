import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E91E63',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E91E63',
    elevation: 5,
  },
  titleContainer: {
    alignSelf: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  message: {
    bottomOffset:-40
  }
});

export default function App() {
  const [messages, setMessages] = useState([]);

  function onSend(newMessage = []) {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessage));
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E91E63" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={() => {/* Add your desired functionality */}}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Name</Text>
          </View>
          <TouchableOpacity onPress={() => {/* Add your desired functionality */}}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <GiftedChat
          style={styles.message}
          messages={messages}
          onSend={(newMessage) => onSend(newMessage)}
          user={{
            _id: 1,
          }}
          renderUsernameOnMessage
          listViewProps={{
            style: {
              backgroundColor: 'white',
            },
            contentInset: { top: 0, bottom: 20 },
            contentOffset: { x: 0, y: -20 },
          }}
          renderInputToolbar={(props) => (
            <View style={{ backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#E8E8E8' }}>
              <InputToolbar {...props} />
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}