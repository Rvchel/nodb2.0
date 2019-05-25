import Add_Pictures from './components/Add_Pictures';
import Pictures from './components/Pictures';
import Picture_Display from './components/Picture_Display';
import Picture_Home from './components/Picture_Home';
import React, {Component} from 'react';
import './App.css';
import Picture from './components/Picture';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      view: "pictures",
      // isEmptyState: true,
      // addPicture: [],
    }
    this.changeView = this.changeView.bind(this)
  }
  // triggerHome = () => {
  //   this.setState({
  //     ...this.state,
  //     isEmptyState: false,
  //     isHomeState: true
  //   })
  // }

  changeView(newView) {
    this.setState({view: newView})
  }

  render() {
  return (
    <main className='Picture_Container'>

    <nav className="Buttons">
      <button id="Pictures_Button" className={this.state.view === "pictures" ? "current" : ""}
      onClick={() => this.setState({view: "pictures"})}>Cafe</button>
      <button id="Add_Button" className={this.state.view === "add" ? "current" : ""}
      onClick={() => this.setState({view: "add"})}>+</button>
      {/* <button onClick={<Picture_Display />}>Home</button> */}
      {/* <button className={this.state.isEmptyState === "home" ? "current" : ""}
      onClick={() => this.setState({isEmptyState: "home"})}>home</button> */}
    </nav>
    {this.state.view === "pictures" ? (
      <Pictures />
    ) : ( 
      <Add_Pictures changeView={this.changeView} />
    )}

    </main>
   );
  }
}

export default App;
