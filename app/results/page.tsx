import { Suspense } from "react"
import { SearchResults } from "@/components/search-results"
import { SearchForm } from "@/components/search-form"

export default function ResultsPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ""

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Search Results for: {query}</h1>

        <div className="mb-8">
          <SearchForm />
        </div>

        <Suspense fallback={<SearchResultsSkeleton />}>
          <SearchResults query={query} />
        </Suspense>
      </div>
    </main>
  )
}

function SearchResultsSkeleton() {
  return (
    <div className="space-y-4 w-full">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-2">
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded w-full animate-pulse"></div>
        </div>
      ))}
    </div>
  )
}

