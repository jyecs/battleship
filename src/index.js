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
    placeShip(playerTwoShips[1], 2, 3, false, boards[1]);
    placeShip(playerTwoShips[2], 5, 3, false, boards[1]);
    placeShip(playerTwoShips[3], 6, 0, true, boards[1]);
    placeShip(playerTwoShips[4], 5, 9, true, boards[1]);

    return { players, boards };

}

function ScreenController() {
    const game = Battleship();
    const playerBoard = document.querySelector("#player");
    const enemyBoard = document.querySelector("#enemy");
    
    const constructDivBoard = (container) => {
        container.replaceChildren();
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const button = document.createElement("button");
                button.dataset.coord = `${i} ${j}`
                container.appendChild(button);

            }
        }
    }

    const renderShips = (container, gameboard) => {
        const ships = gameboard.getBoard().keys();
        for (const ship of ships) {
            document.querySelector(`${container} [data-coord='${ship}']`).classList.add("ship");
        }
    }

    const renderHitsAndMisses = (container, gameboard) => {
        const hitsAndMisses = gameboard.getSeenAttacks().entries();
        for (const attack of hitsAndMisses) {
            if (attack[1]) {
                document.querySelector(`${container} [data-coord='${attack[0]}']`).innerHTML = "X";
            } else {
                document.querySelector(`${container} [data-coord='${attack[0]}']`).classList.add("miss");
            }
        }

    };

    const renderBoard = () => {
        constructDivBoard(playerBoard);
        constructDivBoard(enemyBoard);
        renderShips("#player", game.boards[0]);
        renderHitsAndMisses("#player", game.boards[0]);
        renderHitsAndMisses("#enemy", game.boards[1]);
        addListenersToEnemy();
    };

    const addListenersToEnemy = () => {
        const buttons = document.querySelectorAll("#enemy > button");
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const coords = e.target.dataset.coord.split(" ");
                const row = parseInt(coords[0]);
                const col = parseInt(coords[1]);
                game.boards[1].recieveAttack(row, col);
                game.players[1].playMove(game.boards[0]);
                renderBoard();
            });
        });
    };

    renderBoard();
}

ScreenController();