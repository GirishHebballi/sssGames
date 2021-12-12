import React, { Component } from 'react';
import ballon1 from '../assets/ballon1.png'
import ballon2 from '../assets/ballon2.png'
import ballon3 from '../assets/ballon3.png'
import ballon4 from '../assets/ballon4.png'
import ballon5 from '../assets/ballon5.png'
import ballon6 from '../assets/ballon6.png'

class BallonGame extends Component {

    constructor() {
        super()
        this.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        this.state = {alphabets : this.alphabets,
                      words: [ {name: 'FATHER', clue: "He is the head of family"},
                               {name: 'TIGER', clue: "India's National Animal"},
                               {name: 'NUMBER', clue: "You will count this"}],
                      ballons: [ballon1,ballon2,ballon3,ballon4,ballon5,ballon6],
                      guessWordList: [],
                      beforeGuessList: [],
                      index : 0,
                      showResult : {status:"", color:""}
                      
    
                    };

                    this.startGame = this.startGame.bind(this);
                    this.evaluate = this.evaluate.bind(this);
                    

    }

    startGame() {
        let newIndex = this.state.index;
        newIndex++
        console.log(this.state.words);
        if(newIndex >= this.state.words.length) {
            newIndex=0

        }
        const guessWordList = this.state.words[newIndex]['name'].split("");
        let beforeGuessList = guessWordList.map((alpha) => "");

        console.log(newIndex)
        this.setState({guessWordList: guessWordList, beforeGuessList: beforeGuessList,
             index: newIndex, 
             ballons: [ballon1,ballon2,ballon3,ballon4,ballon5,ballon6],
             alphabets : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
             showResult : {status:"", color:""}});

    }

    evaluate(item) {
        console.log("Calling the")
        console.log(item.item);
        const index = this.state.guessWordList.indexOf(item.item);
        console.log(index)
        if(item.item === "_") {
 
        } else  if(index === -1) {
            let ballonList = this.state.ballons;
            ballonList.pop();
            if(ballonList.length === 0) {
                this.setState({showResult:{status:"YOU LOST", color:"red"}});
            }
            let alphas = this.state.alphabets;
            const ind = alphas.indexOf(item.item);
            alphas[ind] = "_";
            this.setState({ballons: ballonList, alphabets: alphas});
        } else {
            let beforeGuessList =  this.state.beforeGuessList;
        
            console.log(this.state.guessWordList);
            let newList = [];
            
            newList = this.state.guessWordList.map(guess => (guess === item.item)? guess : "")
            newList.forEach((value, index) => {
                if(value !== "") {
                    beforeGuessList[index] = value;
                } 
    
            });
            let result = true;
            beforeGuessList.forEach((value, index) => {
                if(value === "") {
                    result = false;
                } 
    
            });
            if(result) {
                this.setState({showResult:{status:"YOU WON", color:"green"}});


            }
            console.log(newList);
            let alphas = this.state.alphabets;
            const ind = alphas.indexOf(item.item);
            alphas[ind] = "_";
            this.setState({beforeGuessList: beforeGuessList, alphabets: alphas});

        }



    }
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">                    <h3><button type="submit" className=" btn-info rounded w-100 h-100 font-weight-bold" style={{height: '100px'}} onClick={this.startGame}>START A NEW GAME</button></h3>
</div>
                        <div className="col-md-4"></div>


                    </div>
                    <div className="row">
                    {this.state.ballons.map((ballon, index) => (
                                                <div className="col-md-2 p-3">
                                                <img src={ballon} alt="Ballon" width="120" height="150"/>
                                                </div>
                    ))}


                    </div>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                        {this.state.showResult.status ? <div class="alert alert-danger " role="alert" style={{backgroundColor: this.state.showResult.color}}>
  <h2>{this.state.showResult.status}</h2>
</div> : "" }
                        </div>

                                            <div className="col-md-4">
                            
                        </div>
</div>
                    <div className="row">
                    {this.state.alphabets.map((item, index) => (
                                            <div className="col-md-1">
                                            <h2><button type="submit" className=" btn-info rounded w-100 h-100 font-weight-bold" style={{height: '100px'}} onClick={()=> this.evaluate({item})}>{item}</button></h2>
                                            </div>
                    ))}

                    </div>
                    <div className="row p-2"> &nbsp;
                    </div>
                    <div className="row">
                    {this.state.beforeGuessList.map((item, index) => (
                                            <div className="col-md-2">
                                            <h2><button type="submit" className=" btn-warning rounded w-100 h-100 font-weight-bold" style={{height: '100px'}}>{item}</button></h2>
                                            </div>
                    ))}


                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">

                       {this.state.ballons.length < 6 ?                     <div class="alert alert-primary" role="alert">
                         Clue : {this.state.words[this.state.index]['clue']}
                    </div> : ""
                       
                    }     

                        </div>
                        <div className="col-md-4"></div>

                        
                    </div>

                </div>

            </div>
        );
    }
}

export default BallonGame;