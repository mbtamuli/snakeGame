import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Cell extends React.Component {
    render (props) {
        var classes = "cell " + (this.props.head ? "active" : "");
        return (
            <div className={classes}>
                {this.props.num}
            </div>
        );
    }
}

class Game extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        head: 45,
        turns: [],
        len: 3,
    };
}


handleKeyDown = (e) => {
    if (e.keyCode === 38) {
        console.log("up arrow");
        this.setState({head: this.state.head - 21});
    }
    else if (e.keyCode === 40) {
        console.log("down arrow");
        this.setState({head: this.state.head + 21});
    }
    else if (e.keyCode === 37) {
        console.log("left arrow");
        this.setState({head: this.state.head - 1});
    }
    else if (e.keyCode === 39) {
        console.log("right arrow");
        this.setState({head: this.state.head + 1});
    }
}


render() {
    let cells = [];
    for (let i = 0; i < 315; ++i) {
        cells.push(<Cell 
            key={ i } 
            num={ i } 
            head={ this.state.head === i ? true : false } 
            len={this.state.len}
            turns={this.state.turns}
        />)
    }
    
    console.log("render start");
    console.log(this.state.head);
    return (
    <div className="game">
        <div className="game-board" onKeyDown={ this.handleKeyDown } tabIndex="1">
            { cells }
        </div>
    </div>
    );
}
}

// ========================================

ReactDOM.render(
<Game />,
document.getElementById('root')
);
