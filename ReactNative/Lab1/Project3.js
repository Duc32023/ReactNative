import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonComponent = ({ text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const Project3 = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent text="Say hello" onPress={() => alert("hello!")} />
      <ButtonComponent
        text="Say goodbye"
        onPress={() => alert("goodbye!")}
        buttonStyle={{ backgroundColor: '#4dc2c2' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5cb9ff',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Project3;
