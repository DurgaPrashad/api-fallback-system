"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ExternalLink } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
}

interface SearchResponse {
  results: SearchResult[]
  provider: string
  timestamp: string
  error?: string
}

export function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [provider, setProvider] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query) {
      setIsLoading(false)
      return
    }

    async function fetchResults() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)

        if (!response.ok) {
          throw new Error(`Search failed with status: ${response.status}`)
        }

        const data: SearchResponse = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setResults(data.results)
        setProvider(data.provider)
      } catch (err) {
        console.error("Error fetching search results:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [query])

  if (isLoading) {
    return <SearchResultsSkeleton />
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}. Please try again later.</AlertDescription>
      </Alert>
    )
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No results found</h3>
        <p className="text-gray-500 dark:text-gray-400">
          We couldn't find any results for "{query}". Try a different search term.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Showing {results.length} results via {provider}
      </div>

      {results.map((result) => (
        <Card key={result.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{result.title}</CardTitle>
            {result.url && <CardDescription className="text-sm truncate text-blue-500">{result.url}</CardDescription>}
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
          </CardContent>
          {result.url && (
            <CardFooter className="pt-2 border-t">
              <Button variant="outline" size="sm" className="ml-auto" asChild>
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
}

function SearchResultsSkeleton() {
  return (
    <div className="space-y-4 w-full">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-2">
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse dark:bg-gray-700"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse dark:bg-gray-700"></div>
          <div className="h-16 bg-gray-200 rounded w-full animate-pulse dark:bg-gray-700"></div>
        </div>
      ))}
    </div>
  )
}

