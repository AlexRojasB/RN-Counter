import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export const Dimensiones = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <View style={{...styles.cajaNaranja, width: width * 2}} />
        <View style={styles.cajaMorada} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
