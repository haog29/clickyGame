import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import Jumbotron from './Components/Jumbotron/Jumbotron.js'
import sameClicked from './sameClicked.json'
// 'use strict';
// var Shuffle = require('react-shuffle');
// import Shuffle from 'react-shuffle'


let countClick = 0;
let topScore = 0;
let prompt = 'Have fun playing!';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countClick,
      topScore,
      prompt,
      btnArr: ['button1', 'button2', 'button3', 'buttonn4', 'button5', 'button6', 'button7', 'button8', 'buttonn9', 'button10', 'buttonn11', 'button12'],
      sameClicked

    };
  }

  // state = {
  //   countClick,
  //   topScore,
  //   prompt,
  //   // sameClicked:[]



  // }

  handleButtonShuffle = arr => {

    let newPos, temp;

    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos]
      arr[newPos] = temp
    }
    return arr;
  }
  // let newArr = btnShuffle(btnArr)
  // let newArr2 = btnShuffle(newArr)
  // console.log(newArr2)



  handleIncreamentCount = btn => {

    let newCountClicked = this.state.countClick + 1
    this.setState({ countClick: newCountClicked });
    let message = 'Remember not to click the same image twice! Goodluck'
    this.setState({ prompt: message })


    let newTopScore = this.state.countClick > topScore
    newTopScore = newCountClicked
    this.setState({ topScore: newTopScore })

    let clickedAgain = same => {
      
      // if ( countClick === same.btnArr.[i]) {

      // }
    }

    let shuffle = this.handleButtonShuffle(this.state.btnArr)
    this.setState({ btnArr: shuffle })
    console.log (shuffle)


}
  render() {

    return (

      <>
        {< Navbar
          countClick={this.state.countClick}
          topScore={this.state.topScore}
          prompt={this.state.prompt} />}

        < Jumbotron />



        <div className="container">




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
              <button type="button" id='match' onClick={this.handleIncreamentCount} className="button6"></button>

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
