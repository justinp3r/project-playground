import Tile from "./Tile";

export function TicTacToeTile() {
  return (
    <Tile
      headerText="TicTacToe Algorithmus"
      description="Einfacher Algorithmus auf der Basis - Dont Lose"
      imageUrl="/src/assets/tictactoe.png"
      height={128}
      width={400}
      onClick={() => console.log("Clicked Tile TicTacToe")}
    />
  );
}
