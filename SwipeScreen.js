import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const { width } = Dimensions.get('window');

const cards = [
  { id: 1, name: 'Alice', age: 28, job: 'Designer', hobbies: 'Drawing, hiking, photography', bio: 'A creative soul with a love for the outdoors', height: "5'6" },
  { id: 2, name: 'Bob', age: 32, job: 'Developer', hobbies: 'Programming, gaming, cooking', bio: 'Tech-savvy and always up for a challenge', height: "5'10" },
  // Add more profiles here...
];

const SwipeScreen = () => {
  const [swipedAllCards, setSwipedAllCards] = useState(false);
  const [reset, setReset] = useState(false);

  const renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{card.name}, {card.age}</Text>
        <Text style={styles.details}>{card.job}</Text>
        <Text style={styles.details}>Hobbies: {card.hobbies}</Text>
        <Text style={styles.details}>Bio: {card.bio}</Text>
        <Text style={styles.details}>Height: {card.height}</Text>
      </View>
    );
  };

  const onSwipedAllCards = () => {
    setSwipedAllCards(true);
  };

  const resetSwiper = () => {
    setSwipedAllCards(false);
    setReset(!reset);
  };

  return (
    <View style={styles.container}>
      {swipedAllCards ? (
        <TouchableOpacity onPress={resetSwiper} style={styles.resetButton}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      ) : (
        <Swiper
          key={reset ? 'reset1' : 'reset2'}
          cards={cards}
          renderCard={renderCard}
          onSwipedAll={onSwipedAllCards}
          cardIndex={0}
          backgroundColor={'transparent'}
          stackSize={3}
          showSecondCard
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    width: width - 40,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
  },
  details: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  resetText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    },
    });
    
    export default SwipeScreen;