import Tile from "./Tile";

export function PassGenTile() {
  return (
    <Tile
      headerText="Passwort Generator"
      description="Zur Generierung von Passwörtern auf Basis heutiger Sicherheitsstandards"
      imageUrl="/src/assets/PassGen.jpg"
      height={128}
      width={400}
      onClick={() => console.log("Clicked Tile TicTacToe")}
    />
  );
}
