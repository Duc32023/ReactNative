import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Project1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.styleTxt}>Hello World!</Text>
      </View>
    </View>
  );
};

export default Project1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  styleTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
