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
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(newView) {
    this.setState({view: newView})
  }

  render() {
   
    return (
    
    <main className='Picture_Container'>

    <nav className="Buttons">
    {/* <section id="title">La Cafe</section> */}
      <button id="Pictures_Button" className={this.state.view === "pictures" ? "current" : ""}
      onClick={() => this.setState({view: "pictures"})}>Gallary</button>
      <button id="Add_Button" className={this.state.view === "add" ? "current" : ""}
      onClick={() => this.setState({view: "add"})}>+</button>
    </nav>

    {this.state.view === "pictures" ? (
      <Pictures />
    ) : ( 
      <Add_Pictures changeView={this.changeView} />
    )}
    <Picture_Display />

    </main>
   );
  }
}

export default App;
