import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // 💥 This ensures it's a fully static export
}

export default nextConfig
