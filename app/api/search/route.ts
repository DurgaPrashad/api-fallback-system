import { NextResponse } from "next/server"

// API configuration with multiple providers
const apiProviders = [
  {
    name: "Primary API",
    url: "https://api.primary-provider.com/search",
    apiKey: process.env.PRIMARY_API_KEY,
  },
  {
    name: "Secondary API",
    url: "https://api.secondary-provider.com/search",
    apiKey: process.env.SECONDARY_API_KEY,
  },
  {
    name: "Fallback API",
    url: "https://api.fallback-provider.com/search",
    apiKey: process.env.FALLBACK_API_KEY,
  },
]

// Normalize response data to ensure consistent format regardless of API provider
function normalizeResponse(data: any, provider: string) {
  // This would be customized based on the actual response formats
  // of your different API providers
  return {
    results: Array.isArray(data.results || data.items || data.data)
      ? (data.results || data.items || data.data).map((item: any) => ({
          id: item.id || item._id || Math.random().toString(36).substring(2),
          title: item.title || item.name || "Untitled",
          description: item.description || item.summary || item.content || "",
          url: item.url || item.link || "",
          // Add other fields as needed
        }))
      : [],
    provider,
    timestamp: new Date().toISOString(),
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 })
  }

  // Try each API provider in sequence until one succeeds
  for (const provider of apiProviders) {
    try {
      console.log(`Attempting to use ${provider.name}...`)

      const response = await fetch(`${provider.url}?q=${encodeURIComponent(query)}`, {
        headers: {
          Authorization: `Bearer ${provider.apiKey}`,
          "Content-Type": "application/json",
        },
        // Set a reasonable timeout to avoid waiting too long for a failing API
        signal: AbortSignal.timeout(5000),
      })

      if (!response.ok) {
        throw new Error(`${provider.name} returned status ${response.status}`)
      }

      const data = await response.json()
      const normalizedData = normalizeResponse(data, provider.name)

      // Log successful API call
      console.log(`Successfully used ${provider.name}`)

      // Cache the successful result (in a real app, you might use Redis or another caching solution)
      // This is just a placeholder for the concept
      // await cacheResult(query, normalizedData);

      return NextResponse.json(normalizedData)
    } catch (error) {
      console.error(`Error with ${provider.name}:`, error)
      // Continue to the next provider
    }
  }

  // If all APIs fail, return an error
  return NextResponse.json({ error: "All API providers failed", status: "error" }, { status: 503 })
}

