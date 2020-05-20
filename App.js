import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Background from './components/Background';
import Player from './components/Player';

class App extends Component {

  categoriesArray =[
    {name: "Name",
    backgroundColor: '#efdfbb',
    },
    {name: "Civic",
    backgroundColor: '#0273A9',
    },
    {name: "Science",
    backgroundColor: '#0F6A1F',
    },
    {name: "Commercial",
    backgroundColor: '#F3A624',
    },
    {name: "Guilds",
    backgroundColor: '#5C296B',
    },
    {name: "Built Wonders",
    backgroundColor: '#AF890E',
    },
    {name: "Progress Tokens",
    backgroundColor: '#E1DEAD',
    },
    {name: "Money (3/1)",
    backgroundColor: '#EBD364',
    },
    {name: "Military",
    backgroundColor: '#C21924',
    },
    {name: "Total",
    backgroundColor: 'darkslategrey'}
  ]

  render() {
    return (
      <View style={styles.container}>

        <Background categoriesArray={this.categoriesArray} /> 

        <View style={[styles.foreground, {"left": 30}]}>
          <Player />
        </View>

        <View style={[styles.foreground, {"right": 30}]}>
          <Player />
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  
  foreground:{
    position: 'absolute'
  }
 
 
});


export default App;