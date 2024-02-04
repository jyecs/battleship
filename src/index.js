import Ship from "./ship";
import GameBoard from "./gameboard";
import Player from "./player";

function Battleship() {
    const playerOne = Player();
    const playerTwo = Player(true);
    const playerOneBoard = GameBoard();
    const PlayerTwoBoard = GameBoard();

    const playerOneShips = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
    const playerTwoShips = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];

    const placeShip = (ship, row, col, verticalPlacement = true, board) => {
        if (verticalPlacement) {
            placeShipVertically(ship, row, col, board);
        } else {
            placeShipHorizontally(ship, row, col, board);
        }
    };

    const placeShipHorizontally = (ship, row , col, board) => {
        for (let placeCol = col; placeCol < col + ship.getLength(); placeCol++ ) {
            board.getBoard().set(`${row} ${placeCol}`, ship);
        }
    }

    const placeShipVertically = (ship, row , col, board) => {
        for (let placeRow = row; placeRow < row + ship.getLength(); placeRow++ ) {
            board.getBoard().set(`${placeRow} ${col}`, ship);
        }
    }

    placeShip(playerOneShips[0], 0, 0, true, playerOneBoard);
    placeShip(playerOneShips[1], 2, 3, false, playerOneBoard);
    placeShip(playerOneShips[2], 5, 3, false, playerOneBoard);
    placeShip(playerOneShips[3], 6, 0, true, playerOneBoard);
    placeShip(playerOneShips[4], 5, 9, true, playerOneBoard);

    console.log(playerOneBoard.getBoard());
}

Battleship();