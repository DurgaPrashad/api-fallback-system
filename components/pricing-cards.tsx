import Link from "next/link"
import { Check } from "lucide-react"

export function PricingCards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Flexible pricing options to meet your needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
          {/* Starter Plan */}
          <div className="flex flex-col rounded-lg border bg-white shadow-sm dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-xl font-bold">Starter</h3>
              <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                <span className="text-3xl font-bold tracking-tight">$29</span>
                <span className="ml-1 text-sm font-semibold">/month</span>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">Perfect for small projects and startups</p>
              <ul className="mt-6 space-y-3">
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Up to 50,000 API calls/month</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">2 API providers</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Basic analytics</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Email support</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col justify-end p-6 pt-0">
              <Link
                href="/signup?plan=starter"
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col rounded-lg border bg-white shadow-sm dark:bg-gray-950 relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Popular
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                <span className="text-3xl font-bold tracking-tight">$99</span>
                <span className="ml-1 text-sm font-semibold">/month</span>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">For growing businesses with higher demands</p>
              <ul className="mt-6 space-y-3">
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Up to 500,000 API calls/month</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">5 API providers</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Advanced analytics</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Priority support</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Custom integrations</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col justify-end p-6 pt-0">
              <Link
                href="/signup?plan=pro"
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col rounded-lg border bg-white shadow-sm dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                <span className="text-3xl font-bold tracking-tight">$499</span>
                <span className="ml-1 text-sm font-semibold">/month</span>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                For large organizations with mission-critical needs
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Unlimited API calls</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Unlimited API providers</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Real-time analytics dashboard</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">24/7 dedicated support</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">SLA guarantees</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">Custom development</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col justify-end p-6 pt-0">
              <Link
                href="/contact"
                className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

