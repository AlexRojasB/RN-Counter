import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Fab} from '../../components/fab/fab.component';

export const CountdownScreen = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>
      <Fab title="+1" onPress={() => setCount(count + 1)} />
      <Fab
        title="-1"
        position="bottom-left"
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    top: -15,
  },
});
