import GameBoard from "./gameboard";

export default function Player(isComputer = false) {
    const isComputerPlayer = isComputer;
    const UNIFORM_CONSTANT = 10;
    
    const playMove = (board, ...coords) => {
        if (isComputerPlayer) {
            playComputerMove(board);
            return;
        }
        const row = coords[0];
        const col = coords[1];

        board.recieveAttack(row, col);


    }

    const playComputerMove = (board) => {
        let row = Math.floor(Math.random() * UNIFORM_CONSTANT);
        let col = Math.floor(Math.random() * UNIFORM_CONSTANT);
        
        while (board.hasSeenAttack(row, col)) { 
            row = Math.floor(Math.random() * UNIFORM_CONSTANT);
            col = Math.floor(Math.random() * UNIFORM_CONSTANT);
        };
        board.recieveAttack(row, col);

    }

    return { playMove }
}