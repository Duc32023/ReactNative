import React from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Project2 = () => {
  const showAlert = () => {
    Alert.alert('Hello');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Nhấn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Project2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#66B2FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
