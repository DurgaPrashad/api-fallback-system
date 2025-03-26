import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Reliable API Access with Automatic Fallback
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Never worry about API downtime again. Our system automatically switches to backup APIs when needed,
                ensuring your applications stay running.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Documentation
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden border bg-background p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 dark:opacity-30"></div>
              <div className="relative z-10 p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">api-fallback-system.js</div>
                </div>
                <pre className="flex-1 overflow-auto text-sm text-gray-800 dark:text-gray-200 font-mono">
                  <code>{`// API Fallback System
const fetchWithFallback = async (apis) => {
  for (const api of apis) {
    try {
      const response = await fetch(api.url, api.options);
      if (!response.ok) throw new Error();
      return await response.json();
    } catch (error) {
      console.log(\`API \${api.name} failed, trying next...\`);
      // Continue to next API
    }
  }
  throw new Error('All APIs failed');
};

// Example usage
const result = await fetchWithFallback([
  { name: 'Primary API', url: '/api/primary' },
  { name: 'Secondary API', url: '/api/secondary' },
  { name: 'Fallback API', url: '/api/fallback' }
]);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

