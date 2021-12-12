import React, { Component } from 'react';


class UnScramble extends Component {

    constructor() {
        super()
        this.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1','2', '3','4','5','6','7','8', '9'];

        this.state = {
            alphabets: this.alphabets,
            words: [
                { name: 'BEAN', clue: "the seed of any of various erect or climbing plants" },
                { name: 'FULLY', clue: "Jaanu's favourite word" },
                { name: 'GLASS', clue: "This is made of sand" },
                { name: 'CHANGE', clue: "to replace with another" },
                { name: 'FOUND', clue: "to come upon by searching or effort" },
                { name: 'LEAVE', clue: "to go away from" },
                { name: 'MEAN', clue: "to have in the mind as a purpose" },
                { name: 'EACH', clue: "Every" },
                { name: 'HAND', clue: "Verb : to present or provide with" },
                { name: 'HOME', clue: "one's place of residence" },
                { name: 'MAN', clue: "an individual human" },
                { name: 'LIST', clue: "a simple series of words or numerals" }


            ],
            counter: 30,
            jumbleWord: [],
            correctWord: [],
            beforeGuessList: ["UNSCRAMBLE"],
            index: 0,
            guessStartIndex: 0,
            start: false,
            showResult: { status: "", color: "" }


        };

        this.startGame = this.startGame.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);


    }

    decrementCounter() {
        let count = this.state.counter;
        let resultStatus = {};
        count = count - 1;
        this.setState({ counter: count });
        if (count === 0) {
            clearInterval(this.timer);
            resultStatus = this.state.showResult;
            resultStatus['status'] = "Sorry!! Try again";
            resultStatus['color'] = "#ECA6AB";
            this.setState({
                showResult: resultStatus,
                alphabets: [],
                start: false,
                guessStartIndex: 0,
                beforeGuessList: this.state.words[this.state.index]['name'].split("")
            })

        }
    }

    startGame() {

        clearInterval(this.timer);

        let indx = this.state.index;
        indx = indx + 1
        if (indx >= this.state.words.length) {
            indx = 0
        }
        let word = this.state.words[indx];

        let jumbleWord = word.name.split("");
        const len = jumbleWord.length;
        for (let i = 0; i < len; i = i + 2) {
            const newIndx = Math.floor(Math.random() * len)

            let tmp = jumbleWord[i]
            jumbleWord[i] = jumbleWord[newIndx];
            jumbleWord[newIndx] = tmp;
        }
        let beforeGuessList = jumbleWord.map((alpha) => "_");


        this.setState({
            counter: 30,
            jumbleWord: jumbleWord,
            beforeGuessList, beforeGuessList,
            index: indx,
            alphabets: this.alphabets,
            guessStartIndex: 0,
            showResult: { status: "", color: "" },
            start: true


        });
        this.timer = setInterval(this.decrementCounter, 1000)




    }

    evaluate(item) {


        let OrderedWord = this.state.words[this.state.index].name.split("");
        console.log("Ordered Word")
        console.log(OrderedWord)
        let guessList = [];
        let resultStatus = {};
        console.log("Item . item")

        console.log(item.item)
        console.log("Item OrderedWord[this.state.guessStartIndex] item")

        console.log(OrderedWord[this.state.guessStartIndex]);
        if (OrderedWord[this.state.guessStartIndex] === item.item) {
            guessList = this.state.beforeGuessList;
            guessList[this.state.guessStartIndex] = item.item;
            let newStartIndex = this.state.guessStartIndex + 1;
            if (newStartIndex === OrderedWord.length) {
                resultStatus = this.state.showResult;
                resultStatus['status'] = "Fantastic !!! You guessed it right";
                resultStatus['color'] = "#CAEEE0";
                clearInterval(this.timer);
                this.setState({ showResult: resultStatus, alphabets: [], start: false })

            }
            console.log("===================")
            console.log(guessList);
            console.log("Before Guess List")
            console.log(this.state.beforeGuessList);
            console.log(this.state.jumbleWord)
            this.setState({ beforeGuessList: guessList, guessStartIndex: newStartIndex });

        }


    }
    render() {
        return (
            <div className="container">



                <div className="col-md-12">
                    <div className="row p-2">
                    </div>




                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8">
                            {this.state.showResult.status ? <div className="alert alert-danger " role="alert" style={{ backgroundColor: this.state.showResult.color ,  fontFamily: "Boogaloo", boxShadow: '10px 10px 5px grey' }}>
                                <h2>{this.state.showResult.status}</h2>
                            </div> : ""}
                        </div>

                        <div className="col-md-2">

                        </div>
                    </div>



                    <div className="row p-2"> &nbsp;
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        {this.state.start ? 
                        <div className="col-md-6">
                            <h2><button type="submit" className=" btn rounded w-100 h-100 font-weight-bold " style={{ height: '100px', backgroundColor: '#F9D8DA', boxShadow: '10px 10px 5px grey', fontFamily: "Boogaloo" }}> <h1> {this.state.jumbleWord.map((item, index) => (item + " "))}</h1></button></h2>
                        </div>
                        : <div className="col-md-6"></div>}
                        <div className="col-md-3"></div>


                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
              
                        <div className="col-md-6">
                            <h2><button type="submit" className=" btn rounded w-100 h-100 font-weight-bold " style={{ height: '100px', backgroundColor: '#D8F9EA', boxShadow: '10px 10px 5px grey', fontFamily: "Boogaloo"}}> <h1>{this.state.beforeGuessList.map((item, index) => (item + " "))}</h1> </button></h2>
                        </div>
                        
                        

                        <div className="col-md-3"></div>


                    </div>
                    <div className="row p-2">&nbsp;</div>

                    <div className="row">
                        <div className="col-md-10 text-left" style={{ boxShadow: "10px 10px 5px #e6f2ff", backgroundColor: '#F5E4E6', fontFamily: "Boogaloo"  }} >
                            {this.state.start ?
                                <h2>
                                    <b>Clue : {this.state.words[this.state.index]['clue']}</b>

                                </h2> : ""
                            }


                        </div>
                        <div className="col-md-2"></div>


                    </div>
                    <div className="row p-2">&nbsp;</div>
                    <div className="row ">
                        
                        {this.state.alphabets.map((item, index) => (
                            this.state.start ?
                            <div className="col-md-1">
                                <h2><button type="submit" className=" btn rounded w-100 h-100 font-weight-bold" style={{ height: '100px', boxShadow: '10px 10px 5px grey', backgroundColor: '#FBAAB0', fontFamily: "Boogaloo, cursive" }} onClick={() => this.evaluate({ item })}><h3>{item}</h3></button></h2>
                            </div> : ""
                        ))}

                    </div>
                    <div className="row p-2">&nbsp;</div>

                    <div className="row">
                        <div className="col-md-12">
                            {this.state.start ?

                                <div className="progress" style={{boxShadow: '10px 10px 5px grey'}}>
                                    <div className="progress-bar progress-bar-striped bg-danger" 
                                        role="progressbar" style={{ width: Math.floor((this.state.counter / 30) * 100) + "%" }}
                                        aria-valuenow={Math.floor((this.state.counter / 30) * 100)}
                                        aria-valuemin="0" aria-valuemax="100">

                                    </div>
                                </div>
                                :
                                <div>
                                    <button type="submit" className=" btn  rounded-circle  h-100 font-weight-bold"
                                        style={{ height: '100px', backgroundColor: '#E3B2D1', boxShadow: '10px 10px 5px grey' }}
                                        onClick={this.startGame}><h3 style={{ textShadow: '2px 2px 8px #F0EBEB' ,fontFamily: "Boogaloo, cursive" }}> Start</h3></button>
                                </div>

                            }
                        </div>
                    </div>





                </div>


            </div>
        );
    }
}

export default UnScramble;