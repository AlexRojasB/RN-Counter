import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    // flex: 1,
     backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    //alignItems: 'center', // Alinear los elementos en el eje X
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#F0A23B',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: 'green',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
