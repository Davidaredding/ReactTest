import React, { Component } from 'react';
import './App.css';

class Box extends Component{

    constructor(props){
        super(props);
        this.state = {Toggled: false};

    }

    handleClick = () => {
        this.setState(p=>({Toggled: !p.Toggled}));
    }

    render() {
        var classes = ["Box", this.state.Toggled?"Active":""].join(" ");
        
        return(
            <div className={classes} onClick={this.handleClick}/>
        )}

}

function App(props){
    return (
        <div>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    );
}

export default App;
