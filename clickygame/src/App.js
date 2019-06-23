import React, {Component} from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import Jumbotron from './Components/Jumbotron/Jumbotron.js'
// import logo from './logo.svg';
import './App.css';


let countClick = 0;
let totaScore = 0;

class App extends Component {


  state = {
    countClick,
    totaScore,

  }

  
  handleSetClicked = id => {
    const match = this.state.match;
    const countClick = match.filter(same => same.id === id)


  }
  render () {
    return (
      <>
      < Navbar />
      < Jumbotron />

<div className= "container" > 
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group">
    <button type="button" className="button1" ></button>
 
  </div>
  <div className="btn-group mr-2" role="group">
    <button type="button" className="button2"></button>

  </div>
  <div className="btn-group" role="group" >
    <button type="button" className="button3"></button>

  </div>
</div>

<div className="btn-toolbar" role="toolbar">
  <div className="btn-group mr-2" role="group">
    <button type="button" className="button4"></button>
 
  </div>  
  <div className="btn-group mr-2" role="group" >
    <button type="button" className="button5"></button>

  </div>
  <div className="btn-group" role="group">
    <button type="button" className="button6"></button>

  </div>
</div>
<div className="btn-toolbar" role="toolbar" >
  <div className="btn-group mr-2" role="group" >
    <button type="button" className="button7"></button>
 
  </div>
  <div className="btn-group mr-2" role="group" >
    <button type="button" className="button8"></button>

  </div>
  <div className="btn-group" role="group" >
    <button type="button" className="button9"></button>

  </div>
</div>
<div className="btn-toolbar" role="toolbar" >
  <div className="btn-group mr-2" role="group">
    <button type="button" className="button10"></button>
 
  </div>
  <div className="btn-group mr-2" role="group" >
    <button type="button" className="button11"></button>

  </div>
  <div className="btn-group" role="group">
    <button type="button" className="button12"></button>
    </div>
  </div>
</div>
      </>
    )
  }  

}
export default App;
