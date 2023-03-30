import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PushupApp = () => {
  const [count, setCount] = useState(0);
  const [lastPress, setLastPress] = useState(null);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const checkAndUpdate = async () => {
      const lastPressDate = await getData('lastPress');
      setLastPress(lastPressDate);

      if (lastPressDate) {
        const today = new Date().toISOString().slice(0, 10);
        if (lastPressDate !== today) {
          setCount(0);
          setLastPress(today);
          storeData('lastPress', today);
        } else {
          const storedCount = await getData('count');
          setCount(parseInt(storedCount, 10));
        }
      }
    };

    checkAndUpdate();
  }, []);

  const onPushupPress = () => {
    const newCount = count + 1;
    setCount(newCount);
    storeData('count', newCount.toString());
    const today = new Date().toISOString().slice(0, 10);
    setLastPress(today);
    storeData('lastPress', today);
  };

  const onMinusPress = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      storeData('count', newCount.toString());
    } else {
      Alert.alert("You can't go below zero!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pushup Counter</Text>
      <TouchableOpacity style={styles.button} onPress={onPushupPress}>
        <Text style={styles.buttonText}>Pushup!</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity style={styles.minusButton} onPress={onMinusPress}>
        <Text style={styles.minusButtonText}>-1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    },
button: {
backgroundColor: '#1E90FF',
borderRadius: 10,
paddingHorizontal: 40,
paddingVertical: 20,
},
buttonText: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
},
count: {
fontSize: 48,
fontWeight: 'bold',
marginTop: 30,
marginBottom: 30,
},
minusButton: {
backgroundColor: '#FF6347',
borderRadius: 50,
paddingHorizontal: 20,
paddingVertical: 10,
},
minusButtonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
});

export default PushupApp;