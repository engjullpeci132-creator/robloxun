export function formatPlayers(players: number): string {
  if (players >= 1000000) {
    return (players / 1000000).toFixed(1) + "M"
  }

  if (players >= 1000) {
    return (players / 1000).toFixed(1) + "K"
  }

  return players.toString()
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function sortGamesByPlayers(games: any[]) {
  return games.sort((a, b) => b.players - a.players)
}