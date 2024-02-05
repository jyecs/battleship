import Ship from "./ship";
import GameBoard from "./gameboard";
import Player from "./player";

function Battleship() {
    const players = [Player(), Player(true)];
    const boards = [GameBoard(), GameBoard()];

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

    placeShip(playerOneShips[0], 0, 0, true, boards[0]);
    placeShip(playerOneShips[1], 2, 3, false, boards[0]);
    placeShip(playerOneShips[2], 5, 3, false, boards[0]);
    placeShip(playerOneShips[3], 6, 0, true, boards[0]);
    placeShip(playerOneShips[4], 5, 9, true, boards[0]);

    placeShip(playerTwoShips[0], 0, 0, true, boards[1]);
    placeShip(playerTwoShips[0], 2, 3, false, boards[1]);
    placeShip(playerTwoShips[0], 5, 3, false, boards[1]);
    placeShip(playerTwoShips[0], 6, 0, true, boards[1]);
    placeShip(playerTwoShips[0], 5, 9, true, boards[1]);

    return { players, boards };

}

function ScreenController() {
    const game = Battleship();
    const playerBoard = document.querySelector("#player");
    const enemyBoard = document.querySelector("#enemy");
    
    const constructDivBoard = (container) => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const button = document.createElement("button");
                container.appendChild(button);

            }
        }
    }


    constructDivBoard(playerBoard);
    constructDivBoard(enemyBoard);
}

ScreenController();