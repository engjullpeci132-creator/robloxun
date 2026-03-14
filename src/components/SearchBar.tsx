"use client"

import { useState } from "react"

export default function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
  const [query, setQuery] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <input
      type="text"
      placeholder="Search games..."
      value={query}
      onChange={handleChange}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "400px",
        borderRadius: "8px",
        border: "none"
      }}
    />
  )
}