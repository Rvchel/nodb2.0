import Add_Pictures from './components/Add_Pictures';
import Pictures from './components/Pictures';
import Picture_Display from './components/Picture_Display';

import React, {Component} from 'react';
import './App.css';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      view: "pictures",
      // isEmptyStatement: true,
      // addPicture: [],
    }
    this.changeView = this.changeView.bind(this)
  }
  changeView(newView) {
    this.setState({view: newView})
  }

  render() {
  return (
    <main className='Pictures'>
    
    <nav>
      <button className={this.state.view === "pictures" ? "current" : ""}
      onClick={() => this.setState({view: "pictures"})}>Pictures</button>
      <button className={this.state.view === "add" ? "current" : ""}
      onClick={() => this.setState({view: "add"})}>Plus</button>
      {/* <button onClick={() => this.setState({view: "home"})}>Home</button> */}
      <button className={this.state.view === "home" ? "current" : ""}
      onClick={() => this.setState({view: "home"})}>pic display</button>
    </nav>
    {this.state.view === "pictures" ? (
      <Pictures />
    ) : (
      // eslint-disable-next-line 
      <Add_Pictures changeView={this.changeView} />
    )}

    </main>
   );
  }
}

export default App;
