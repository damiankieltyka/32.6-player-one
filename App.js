import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayerList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
    constructor() {
        super();

        this.state = {
            players: [
                {
                    name: 'Karolina',
                    score: 5,
                },
                {
                    name: 'Agnieszka',
                    score: 0,
                }
            ]
        }
    }

    // Change in the score state, after finding the right player index
    onScoreUpdate = (playerIndex, scoreChange) => {
        this.setState({
            players: this.state.players.map((player, index) => {
                if (index === playerIndex) {
                    return { ...player, score: player.score + scoreChange };
                }
                return player;
            })
        })
    }

    onPlayerAdd = playerName => {
        const newPlayer = {
            name: playerName,
            score: 0,
        }

        playerName == '' ? alert('Please enter name!') :
            this.setState({
                players: [...this.state.players, newPlayer]
            })
    }

    onPlayerRemove = playerIndex => {
        this.setState({
            players: this.state.players.filter((player, index) =>
                index !== playerIndex
            )
        })
    }

    scoreSort = () => {
        this.setState({
            players: this.state.players.sort((a, b) => {
                return b.score - a.score;
            })
        })
    }

    resetScores = () => {
        this.setState({
            players: this.state.players.map(player => {
                return { ...player, score: 0 };
            })
        })
    }

    render() {
        return (
            <div className='App'>
                <h1 className='app-title'>Scorekeeper app</h1>
                <AddPlayer onPlayerAdd={ this.onPlayerAdd } />
                <PlayersList
                    players={ this.state.players }
                    onScoreUpdate={ this.onScoreUpdate }
                    onPlayerRemove={ this.onPlayerRemove }
                    scoreSort={ this.scoreSort }
                />
                <div className='button-container'>
                    <button className='sort-btn' onClick={ this.scoreSort }>Sort list</button>
                    <button className='reset-btn' onClick={ this.resetScores}>Reset list</button>
                </div>
            </div>
        );
    }
}

export default App;
