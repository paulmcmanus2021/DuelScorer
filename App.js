import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import PlayerNames from './components/PlayerNames';
import Civic from './components/Civic';
import Science from './components/Science';
import Commercial from './components/Commercial';
import Guilds from './components/Guilds';
import Wonders from './components/Wonders';
import ProgressTokens from './components/ProgressTokens';
import Money from './components/Money';
import Military from './components/Military';
import Total from './components/Total';

const App = () => {

  return (
    <View>
      <Header />
      <PlayerNames/>
      <Civic/>
      <Science/>
      <Commercial/>
      <Guilds/>
      <Wonders/>
      <ProgressTokens/>
      <Money/>
      <Military/>
      <Total/>
    </View>
  )
}

export default App;