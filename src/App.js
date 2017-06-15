import React, { Component } from 'react';
import './App.css';

function CardModel(rank,suit)
{
    this.Rank = rank;
    this.Suit = suit;

}

function GetCards(){
    return[
        new CardModel("Ace","Clubs"),
        new CardModel("King","Clubs"),
        new CardModel("Queen","Clubs"),
        new CardModel("Jack","Clubs"),
        new CardModel("Ten","Clubs"),
        new CardModel("9","Clubs"),
        new CardModel("8","Clubs"),
    ];
}

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {FaceUp:props.FaceUp, Rank:props.Rank, Suit:props.Suit};
    }

    render(){
        return(
            <div className={['card', this.state.FaceUp? 'card-face':'card-back'].join(" ")}>
                {this.state.FaceUp &&
                    [<div key="rank" className = {['rank', this.state.Rank].join(" ")}>{this.state.Rank}</div>,
                    <div key="suit" className={['suit', this.state.Suit].join(" ")}>{this.state.Suit}</div>]
                }
            </div>
        );
    }
}

class Hand extends Component{

    constructor(props){
        super(props);
        this.state = {CardModels:props.CardModels}
    }

    render(){

        return (
        <div className = "hand">
            {
                this.state.CardModels &&
                this.state.CardModels.map((c,index)=>{
                  return <Card key={index} FaceUp Rank={c.Rank} Suit={c.Suit} />
                })
            }
        </div>
        )
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.state = {Cards: GetCards()};
    }

    handleClick = () => {
        let c = this.state.Cards;
        c.push(new CardModel("Ace","Diamonds"));
        this.setState({Cards:c});
    };



    render(){
         return(
             <div>
                <Hand CardModels={this.state.Cards}/>
                <button onClick={this.handleClick}>Add</button>
             </div>

         );
    }
}

export default App;
