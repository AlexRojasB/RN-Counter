import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tite}>BoxObjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  tite: {
    fontSize: 20,
    borderWidth: 10,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
});
