import Link from "next/link"

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#111"
      }}
    >
      <Link href="/" style={{ fontSize: "20px", fontWeight: "bold" }}>
        Roblox Copy Games
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/trending">Trending</Link>
        <Link href="/new">New</Link>
      </div>
    </nav>
  )
}