import React, { Component } from 'react';

import flats from '../data/flats';
import FlatList from './flatList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  render() {
    return(
      <div><FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} /></div>
    );
  }

}

export default App;