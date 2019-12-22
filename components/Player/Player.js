import React from 'react';
import './Player.css';

const Player = props => (
    <li className='player'>
        <span className='player-name'>{ props.name }</span>
        <div className='table-score'>
            <span className='player-score'>{ props.score }</span>
            <span className='player-button plus-btn' onClick={ () => props.onPlayerScoreChange(1) }>+</span>
            <span className='player-button minus-btn' onClick={ () => props.onPlayerScoreChange(-1) }>-</span>
            <span className='player-button delete-btn' onClick={ () => props.onPlayerRemove() }>X</span>
        </div>
    </li>
);

export default Player;
