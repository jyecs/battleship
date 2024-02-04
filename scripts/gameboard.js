import Ship from "./ship";

export default function GameBoard(ships = 5) {
    const numShips = ships;
    const board = new Map();
    const seenAttacks = new Set();
    let sunkShips = 0;

    const recieveAttack = (row, col) => {
        if (seenAttacks.has(`${row} ${col}`)) { 
            return "You've already attacked this place!";
        }
        seenAttacks.add(`${row} ${col}`);
        const ship = board.get(`${row} ${col}`)
        if (!ship) {
            return "Attack Missed!";
        }
        ship.getHit();
        if (ship.isSunk()) { sunkShips += 1 };
        return "Attack Hit!";
    }

    const hasSeenAttack = (row, col) => {
        return seenAttacks.has(`${row} ${col}`);
    }

    const allShipsSunk = () => sunkShips >= numShips;

    const getBoard = () => board;
    
    return { recieveAttack, getBoard, allShipsSunk, hasSeenAttack }
}