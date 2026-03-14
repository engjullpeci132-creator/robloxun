import Link from "next/link"

interface Game {
  id: number
  name: string
  players: number
  thumbnail: string
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/game/${game.id}`}>
      <div
        style={{
          background: "#1f1f1f",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        <img
          src={game.thumbnail}
          alt={game.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <h3 style={{ marginTop: "10px" }}>{game.name}</h3>

        <p>{game.players} players</p>
      </div>
    </Link>
  )
}