import { fetchPopularGames } from "./robloxApi"

const keywords = [
  "copy",
  "clone",
  "adopt me",
  "brookhaven",
  "blade ball"
]

export async function getCopyGames() {
  const games = await fetchPopularGames()

  const filtered = games.filter((game: any) => {
    const name = game.name.toLowerCase()

    return keywords.some(keyword => name.includes(keyword))
  })

  return filtered
}