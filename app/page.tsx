import { Suspense } from "react"
import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import { PricingCards } from "@/components/pricing-cards"
import { Features } from "@/components/features"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try Our API Search</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our system automatically falls back to alternative APIs if the primary one fails
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Suspense fallback={<div className="w-full h-10 bg-gray-200 animate-pulse rounded-md"></div>}>
                <SearchForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <PricingCards />

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up now and start using our reliable API service with built-in fallback protection.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Sign Up
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

