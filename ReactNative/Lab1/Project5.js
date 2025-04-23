import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Project5 = () => {
  const Square = ({ text, bgColor = '#ffd166', textColor = '#333' }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Square text="Square 1" bgColor="#ffd166" textColor="#333" />
      <Square text="Square 2" bgColor="#06d6a0" textColor="#fff" />
      <Square text="Square 3" bgColor="#118ab2" textColor="#fff" />
    </View>
  );
};

export default Project5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
