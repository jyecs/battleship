import GameBoard from "./gameboard";

export default function Player(isComputer = false) {
    const isComputer = isComputer;
    const UNIFORM_CONSTANT = 11;
    
    const playMove = (board, ...coords) => {
        if (isComputer) {
            playComputerMove(board);
        }
        const row = coords[0];
        const col = coords[1];

        board.recieveAttack(row, col);


    }

    const playComputerMove = (board) => {
        const row = Math.floor(Math.random() * UNIFORM_CONSTANT);
        const col = math.floor(Math.random() * UNIFORM_CONSTANT);
        
        if(board.hasSeenAttack(row, col)) { 
            playComputerMove(board)
            return;
        };

        board.recieveAttack(row, col);

    }

    return { playMove }
}