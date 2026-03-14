export async function fetchPopularGames() {
  const res = await fetch(
    "https://games.roblox.com/v1/games/list?sortOrder=Desc&limit=20"
  )

  if (!res.ok) {
    throw new Error("Failed to fetch Roblox games")
  }

  const data = await res.json()
  return data.games || []
}

export async function fetchGameDetails(gameId: number) {
  const res = await fetch(
    `https://games.roblox.com/v1/games?universeIds=${gameId}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch game details")
  }

  const data = await res.json()
  return data.data?.[0]
}