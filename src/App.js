import React, { Component } from 'react';
import './App.css';

class Tile extends Component{
    constructor(props){
        super(props);
        this.state = {
            Index: props.Index,
            Title:props.Title,
            Selected:false,
            OnClick: props.OnClick
        };
    }

    handleClick = () => {
        this.setState({Selected:true});
    }

    render(){
        let classNames = [
            'tile',
            this.state.Selected?'selected':''
        ].join(" ");
        return (
            <div className={classNames} onClick={this.handleClick}>
                <span>
                    {this.state.Title}
                </span>
            </div>)
    }
}

class Board extends Component{
    constructor(props){
        super(props);
        this.state= {tiles:[]}
        let title = "";
        let key  = 0;
        for(let c = 65; c<= 74; c++)
            for(let i = 1; i<=12;i++) {
                title = `${i}${String.fromCharCode(c)}`;
                this.state.tiles.push(<Tile key={key} Index={key} Title={title}/>);
                key++;
            }
    }

    placeTile(tile){

    }

    render(){
        return (
            <div className="Board">
                <div className="playField">
                    {this.state.tiles}
                </div>
            </div>
        )
    }
}

class App extends Component{


    render(){
        return <Board/>
    }
}

export default App;
