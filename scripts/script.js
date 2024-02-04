function Ship(length) {
    const shipLength = length;
    let timesHit = 0;

    const getLength = () => shipLength;

    const getHit = () => timesHit++;

    const isSunk = () => timesHit >= shipLength;

    return { getLength, isSunk, getHit };
}

function GameBoard() {
    const board = new Map();
}

export { Ship, GameBoard }