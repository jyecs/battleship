export default function GameBoard(ships = 5) {
    const numShips = ships;
    const board = new Map();
    const seenAttacks = new Map();
    let sunkShips = 0;

    const recieveAttack = (row, col) => {
        if (hasSeenAttack(row, col)) { 
            return "You've already attacked this place!";
        }
        const ship = board.get(`${row} ${col}`)
        if (!ship) {
            seenAttacks.set(`${row} ${col}`, false);
            return "Attack Missed!";
        }
        seenAttacks.set(`${row} ${col}`, true);
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