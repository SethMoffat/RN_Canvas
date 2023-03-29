import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

const DatingAppCard = (props) => {
  const [showProfile, setShowProfile] = useState(false);

  const { name, age, bio } = props;

  const handlePress = () => {
    setShowProfile(!showProfile);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.image}></View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age}</Text>
      </TouchableOpacity>
      <Modal visible={showProfile} animationType="slide">
        <ScrollView>
          <View style={styles.profileContainer}>
            <View style={styles.profileImage}></View>
            <Text style={styles.profileText}>{bio}</Text>
            <Text style={styles.infoText}>Gender: Female</Text>
            <Text style={styles.infoText}>Age: {age}</Text>
            <Text style={styles.infoText}>Location: New York</Text>
            <Text style={styles.infoText}>Interests: Travel, Cooking</Text>
          </View>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#2196f3',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  age: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
    marginLeft: 10,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#cfcfcf',
    marginBottom: 20,
  },
  profileText: {
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export default DatingAppCard;