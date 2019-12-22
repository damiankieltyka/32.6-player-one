import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayerList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
    shallow(<App />);
});

it('should update player score', () => {
    const players = [
        {
            name: 'Karolina',
            score: 5
        }
    ];

    const appComponent = shallow(<App />);
    appComponent.setState({ players });

    const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
    onScoreUpdate(0, 5);

    const playersAfterUpdate = appComponent.state('players');
    expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should add a new player', () => {
    const players = [
        {
            name: 'Karolina',
            score: 5
        }
    ];

    const appComponent = shallow(<App />);
    appComponent.setState({ players });

    const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
    onPlayerAdd('Natalia');

    const playersAfterAdding = appComponent.state().players;
    expect(playersAfterAdding[1].name).toEqual('Natalia');
});

it('should remove player', () => {
    const players = [
        {
            name: 'Karolina',
            score: 5
        }
    ];

    const appComponent = shallow(<App />);
    appComponent.setState({ players });

    const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
    onPlayerRemove(0);

    const playersAfterRemoving = appComponent.state().players;
    expect(playersAfterRemoving).toEqual([]);
});
