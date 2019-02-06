import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        text: ''
    }

    textChangeHandler = (e) => {
        this.setState({text: e.target.value})
    }

    deleteCharHandler = (charIndex) => {
        const chars = this.state.text.split('');
        chars.splice(charIndex, 1);
        this.setState({text: chars.join('')});
    }

    render() {
        let charComponents = null;
        charComponents = (
            <div>
                {this.state.text.split("").map((letter, index) => {
                    return <Char
                        letter={letter}
                        key={index}
                        click={() => this.deleteCharHandler(index)}
                    />
                })}
            </div>
        );

        return (
            <div className="App">
                <input 
                    type="text"
                    value={this.state.text}
                    onChange={this.textChangeHandler}
                />
                <p>{this.state.text.length}</p>
                <Validation inputText={this.state.text}/>

                {charComponents}
            </div>
        );
    }
}

export default App;
