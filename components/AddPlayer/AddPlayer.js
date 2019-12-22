import React from 'react';
import './AddPlayer.css';

const AddPlayer = props => {
    let input;
    const onSubmit = event => {
        event.preventDefault();
        props.onPlayerAdd(input.value);
        input.value = '';
    };

    return (
        <form className='add-player' onSubmit={ onSubmit }>
            <input type='text' className='add-player-input' ref={ (node) => input = node } />
            <input type='submit' className='add-player-submit' value='Add player' />
        </form>
    )
};

export default AddPlayer;
