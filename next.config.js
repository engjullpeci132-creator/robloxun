/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "tr.rbxcdn.com",
      "rbxcdn.com",
      "t0.rbxcdn.com",
      "t1.rbxcdn.com",
      "t2.rbxcdn.com"
    ]
  }
}

module.exports = nextConfig