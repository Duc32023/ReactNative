import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Project4 = ({ title }) => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.counter}>
            You've pressed the button: {count} time(s)
          </Text>
          <Pressable onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Press me</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Project4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9fb',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderColor: '#007AFF',
    borderWidth: 1,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // Android
  },
  counter: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
