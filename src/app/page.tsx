import Link from "next/link"

const games = [
  {
    id: 1,
    name: "Adopt Me Copy",
    players: 523,
    thumbnail: "https://tr.rbxcdn.com/180DAY-placeholder"
  },
  {
    id: 2,
    name: "Brookhaven Copy",
    players: 812,
    thumbnail: "https://tr.rbxcdn.com/180DAY-placeholder"
  },
  {
    id: 3,
    name: "Blade Ball Copy",
    players: 342,
    thumbnail: "https://tr.rbxcdn.com/180DAY-placeholder"
  }
]

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Roblox Copy Games
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}
      >
        {games.map((game) => (
          <Link key={game.id} href={`/game/${game.id}`}>
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
                style={{ width: "100%", borderRadius: "8px" }}
              />

              <h2 style={{ marginTop: "10px" }}>{game.name}</h2>

              <p>{game.players} players</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}