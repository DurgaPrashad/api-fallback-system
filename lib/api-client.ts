/**
 * API Client with fallback functionality
 * This client handles API requests with automatic fallback to alternative APIs
 */

type ApiConfig = {
  name: string
  url: string
  headers?: Record<string, string>
  timeout?: number
}

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  body?: any
  headers?: Record<string, string>
  signal?: AbortSignal
}

export class ApiFallbackClient {
  private apiProviders: ApiConfig[]
  private defaultTimeout: number

  constructor(apiProviders: ApiConfig[], defaultTimeout = 5000) {
    if (!apiProviders || apiProviders.length === 0) {
      throw new Error("At least one API provider must be configured")
    }

    this.apiProviders = apiProviders
    this.defaultTimeout = defaultTimeout
  }

  /**
   * Fetch data from APIs with automatic fallback
   */
  async fetch<T>(endpoint: string, options: FetchOptions = {}): Promise<{ data: T; provider: string }> {
    const errors: Error[] = []

    for (const provider of this.apiProviders) {
      try {
        // Create a timeout signal if one wasn't provided
        const timeoutSignal = options.signal || AbortSignal.timeout(provider.timeout || this.defaultTimeout)

        // Combine default headers with provider headers and request headers
        const headers = {
          "Content-Type": "application/json",
          ...provider.headers,
          ...options.headers,
        }

        // Make the request
        const response = await fetch(`${provider.url}${endpoint}`, {
          method: options.method || "GET",
          headers,
          body: options.body ? JSON.stringify(options.body) : undefined,
          signal: timeoutSignal,
        })

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`)
        }

        const data = await response.json()

        // Log successful API call
        console.log(`Successfully used ${provider.name}`)

        return {
          data: data as T,
          provider: provider.name,
        }
      } catch (error) {
        // Log the error and continue to the next provider
        const errorMessage = error instanceof Error ? error.message : "Unknown error"
        console.error(`Error with ${provider.name}: ${errorMessage}`)
        errors.push(error instanceof Error ? error : new Error(String(error)))
      }
    }

    // If we get here, all providers failed
    throw new Error(`All API providers failed: ${errors.map((e) => e.message).join(", ")}`)
  }

  /**
   * Helper method for GET requests
   */
  async get<T>(endpoint: string, options: Omit<FetchOptions, "method" | "body"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "GET" })
  }

  /**
   * Helper method for POST requests
   */
  async post<T>(endpoint: string, data: any, options: Omit<FetchOptions, "method" | "body"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "POST", body: data })
  }

  /**
   * Helper method for PUT requests
   */
  async put<T>(endpoint: string, data: any, options: Omit<FetchOptions, "method" | "body"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "PUT", body: data })
  }

  /**
   * Helper method for DELETE requests
   */
  async delete<T>(endpoint: string, options: Omit<FetchOptions, "method" | "body"> = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "DELETE" })
  }
}

// Example usage:
// const apiClient = new ApiFallbackClient([
//   {
//     name: 'Primary API',
//     url: 'https://api.primary-provider.com',
//     headers: { 'Authorization': `Bearer ${process.env.PRIMARY_API_KEY}` }
//   },
//   {
//     name: 'Secondary API',
//     url: 'https://api.secondary-provider.com',
//     headers: { 'Authorization': `Bearer ${process.env.SECONDARY_API_KEY}` }
//   }
// ]);
//
// // Use the client
// const { data, provider } = await apiClient.get('/search', {
//   headers: { 'X-Custom-Header': 'value' }
// });

