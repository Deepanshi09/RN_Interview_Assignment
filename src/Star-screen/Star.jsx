import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is liked Screen!</Text>
      <Text style={styles.subtitle}>Under Development.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#888888',
  },
});

export default StarScreen;