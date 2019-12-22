import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={ playerNamePassed } />);
    const playerNameRendered = playerComponent.find('.playerName').text();
    expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
    const playerScorePassed = 1;
    const playerComponent = shallow(<Player score={ playerScorePassed } />);
    const playerScoreRendered = Number(playerComponent.find('.playerScore').text());
    expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={ mockedOnPlayerScoreChange } />);
    const plusButton = playerComponent.find('.playerButton').at(0);
    plusButton.simulate('click');
    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={ mockedOnPlayerScoreChange } />);
    const minusButton = playerComponent.find('.playerButton').at(1);
    minusButton.simulate('click');
    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it(`should call onPlayerRemove with when 'X' button is clicked`, () => {
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={ mockedOnPlayerRemove } />);
    const deleteButton = playerComponent.find('.playerButton').at(2);
    deleteButton.simulate('click');
    expect(mockedOnPlayerRemove).toBeCalledWith();
});
