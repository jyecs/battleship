import Ship from "./ship";

export default function GameBoard() {
    const board = new Map();
    const missedShots = new Set();

    const recieveAttack = (row, col) => {
        if (missedShots.has(`${row} ${col}`)) { 
            return "You've already attacked this place!";
        }
        const ship = board.get(`${row} ${col}`)
        if (!ship) {
            missedShots.add(`${row} ${col}`);
            return "Attack Missed!";
        }
        ship.getHit();
        return "Attack Hit!";
    }

    const getBoard = () => board;
    
    return { recieveAttack, getBoard }
}