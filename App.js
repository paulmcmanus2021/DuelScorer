import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Players from './components/Players'
import Category from './components/Category';
import Total from './components/Total';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scores: {
        Civic: {
          title: "Civic",
          p1: 0,
          p2: 0,
        },
        Science: {
          title: "Science",
          p1: 0,
          p2: 0,
        },
        Commercial: {
          title: "Commercial",
          p1: 0,
          p2: 0,
        },
        GuildsTemples: {
          title: "Guilds/Temples",
          p1: 0,
          p2: 0,
        },
        Divinity: {
          title: "Divinity",
          p1: 0,
          p2: 0,
        },
        Wonders: {
          title: "Built Wonders",
          p1: 0,
          p2: 0,
        },
        ProgressTokens: {
          title: "Progress Tokens",
          p1: 0,
          p2: 0,
        },
        Money: {
          title: "Money",
          p1: 0,
          p2: 0,
        },
        Military: {
          title: "Military",
          p1: 0,
          p2: 0,
        },
      },
    };
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(newScore, category, player) {
    this.setState((prevState) => ({
      scores: {
        ...prevState.scores,
        [category]: {
          ...prevState.scores[category],
          [player]: newScore,
        },
      },
    }));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header style={{lex: 1}}/>
        <Players />

        <Category name="Civic" backgroundColor='#0273A9' scores={this.state.scores.Civic} updateScore={this.updateScore} />
        <Category name="Science" backgroundColor='#0F6A1F' scores={this.state.scores.Science} updateScore={this.updateScore} />
        <Category name="Commercial" backgroundColor='#F3A624' scores={this.state.scores.Commercial} updateScore={this.updateScore} />
        <Category name="GuildsTemples" backgroundColor='#5C296B' scores={this.state.scores.GuildsTemples} updateScore={this.updateScore} />
        <Category name="Divinity" backgroundColor='#E6E7E9' scores={this.state.scores.Divinity} updateScore={this.updateScore} />
        <Category name="Wonders" backgroundColor='#AF890E' scores={this.state.scores.Wonders} updateScore={this.updateScore} />
        <Category name="ProgressTokens" backgroundColor='#E1DEAD' scores={this.state.scores.ProgressTokens} updateScore={this.updateScore} />
        <Category name="Money" backgroundColor='#CCCEC2' scores={this.state.scores.Money} updateScore={this.updateScore} />
        <Category name="Military" backgroundColor='#C21924' scores={this.state.scores.Military} updateScore={this.updateScore} />

        <Total scores={this.state.scores} />  
      </View>
    );
  }
}




export default App;