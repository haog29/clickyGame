import React, {Component} from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import Jumbotron from './Components/Jumbotron/Jumbotron.js'
// import logo from './logo.svg';
import './App.css';


let countClick = 0;
let topScore = 0;



class App extends Component {


  state = {
    countClick,
    topScore,

  }

  
  handleIncreamentCount = btn => {
    let newCountClicked = this.state.countClick + 1
    this.setState({countClick:newCountClicked});


    let newTopScore = this.state.countClick > topScore
     newTopScore = newCountClicked
      this.setState({ topScore : newTopScore })

      // const sameClicked = this.state.sameClicked;

  }


  render () {
    return (
      <>
      {      < Navbar 
      countClick={this.state.countClick}
      topScore = {this.state.topScore} />}

      < Jumbotron />

<div className= "container" > 
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group">
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button1" ></button>
 
  </div>
  <div className="btn-group mr-2" role="group">
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button2"></button>

  </div>
  <div className="btn-group" role="group" >
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button3"></button>

  </div>
</div>

<div className="btn-toolbar" role="toolbar">
  <div className="btn-group mr-2" role="group">
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button4"></button>
 
  </div>  
  <div className="btn-group mr-2" role="group" >
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button5"></button>

  </div>
  <div className="btn-group" role="group">
    <button type="button" id='match'onClick={this.handleIncreamentCount} className="button6"></button>

  </div>
</div>
<div className="btn-toolbar" role="toolbar" >
  <div className="btn-group mr-2" role="group" >
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button7"></button>
 
  </div>
  <div className="btn-group mr-2" role="group" >
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button8"></button>

  </div>
  <div className="btn-group" role="group" >
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button9"></button>

  </div>
</div>
<div className="btn-toolbar" role="toolbar" >
  <div className="btn-group mr-2" role="group">
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button10"></button>
 
  </div>
  <div className="btn-group mr-2" role="group" >
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button11"></button>

  </div>
  <div className="btn-group" role="group">
    <button type="button" id='match' onClick={this.handleIncreamentCount} className="button12"></button>
    </div>
  </div>
</div>
      </>
    )
  }  

}
export default App;
