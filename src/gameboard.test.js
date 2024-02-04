import GameBoard from "./gameboard";
import Ship from "./ship";

test("Shots are missed if no ship is there", () => {
    const board = GameBoard();
    expect(board.recieveAttack(1,2)).toBe("Attack Missed!");
});

test("Shots are hit if ship is there", () => {
    const board = GameBoard();
    board.getBoard().set("1 2", Ship(3));
    expect(board.recieveAttack(1,2)).toBe("Attack Hit!");
});

test("Attacks on the same place are not accepted", () => {
    const board = GameBoard();
    board.recieveAttack(3,4);
    expect(board.recieveAttack(3,4)).toBe("You've already attacked this place!");
});