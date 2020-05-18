import React, { Component } from 'react';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      p1CivicScore: 0,
      p1ScienceScore: 0,
      p1CommercialScore: 0,
      p1GuildsScore: 0,
      p1WondersScore: 0,
      p1ProgressScore: 0,
      p1MoneyScore: 0,
      p1MilitaryScore: 0,

      p2CivicScore: 0,
      p2ScienceScore: 0,
      p2CommercialScore: 0,
      p2GuildsScore: 0,
      p2WondersScore: 0,
      p2ProgressScore: 0,
      p2MoneyScore: 0,
      p2MilitaryScore: 0,
    }; 
    this.updatep1CivicScore = this.updatep1CivicScore.bind(this);
    this.updatep2CivicScore = this.updatep2CivicScore.bind(this);
  }

  updatep1CivicScore(newScore) {
    this.setState({
      p1CivicScore: newScore
    });
  }

  updatep2CivicScore(newScore) {
    this.setState({
      p2CivicScore: newScore
    });
  }





  render() {
    return (
      <View>
        <Header />
        <PlayerNames/>
        <Civic 
          p1CivicScore={this.state.p1CivicScore} updatep1CivicScore={this.updatep1CivicScore}
          p2CivicScore={this.state.p2CivicScore} updatep2CivicScore={this.updatep2CivicScore}
        />
        <Science p1ScienceScore={this.state.p1ScienceScore} p2ScienceScore={this.state.p2ScienceScore}/>
        <Commercial p1CommercialScore={this.state.p1CommercialScore} p2CommercialScore={this.state.p2CommercialScore}/>
        <Guilds p1GuildsScore={this.state.p1GuildsScore} p2GuildsScore={this.state.p2GuildsScore}/>
        <Wonders p1WondersScore={this.state.p1WondersScore} p2WondersScore={this.state.p2WondersScore}/>
        <ProgressTokens p1ProgressScore={this.state.p1ProgressScore} p2ProgressScore={this.state.p2ProgressScore}/>
        <Money p1MoneyScore={this.state.p1MoneyScore} p2MoneyScore={this.state.p2MoneyScore}/>
        <Military p1MilitaryScore={this.state.p1MilitaryScore} p2MilitaryScore={this.state.p2MilitaryScore}/>

        <Total 
          p1CivicScore={this.state.p1CivicScore} p2CivicScore={this.state.p2CivicScore}
          p1ScienceScore={this.state.p1ScienceScore} p2ScienceScore={this.state.p2ScienceScore}
          p1CommercialScore={this.state.p1CommercialScore} p2CommercialScore={this.state.p2CommercialScore}
          p1GuildsScore={this.state.p1GuildsScore} p2GuildsScore={this.state.p2GuildsScore}
          p1WondersScore={this.state.p1WondersScore} p2WondersScore={this.state.p2WondersScore}
          p1ProgressScore={this.state.p1ProgressScore} p2ProgressScore={this.state.p2ProgressScore}
          p1MoneyScore={this.state.p1MoneyScore} p2MoneyScore={this.state.p2MoneyScore}
          p1MilitaryScore={this.state.p1MilitaryScore} p2MilitaryScore={this.state.p2MilitaryScore}
        />
      </View>
    )
    }
}

export default App;