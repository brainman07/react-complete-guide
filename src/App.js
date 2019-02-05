import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Irina', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        this.setState({persons: [
            {name: newName, age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 27}
        ]});
    }

    nameChangeHandler = (event) => {
        this.setState({persons: [
            {name: 'Max', age: 28},
            {name: event.target.value, age: 29},
            {name: 'Stephanie', age: 26}
        ]});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Max!!!')}
                        changed={this.nameChangeHandler}
                    >My hobbies: Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, i'm a React App</h1>
                <p>This is really working!</p>
                <button 
                    style={buttonStyle}
                    onClick={this.togglePersonsHandler}
                >
                    Toggle persons
                </button>

                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m a React App'));
    }
}

export default App;
