import React from 'react';
import {SafeAreaView, SafeAreaViewBase, Text, View} from 'react-native';
import {BoxObjectModel} from './src/screens/BoxObjectModel/boxObjectModel.screen';
import {CountdownScreen} from './src/screens/CountDownScreen/countdown.screen';
import {Dimensiones} from './src/screens/Dimensiones/dimensiones.screen';
import {FlexScreen} from './src/screens/Flex/flex.screen';
import {PositionScreen} from './src/screens/Position/position.screen';

const App = () => {
  return (
    // return <CountdownScreen />;
    <SafeAreaView style={{flex: 1}}>
      <FlexScreen />
    </SafeAreaView>
  );
};
export default App;
