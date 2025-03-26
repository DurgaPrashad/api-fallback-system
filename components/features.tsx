import { CheckCircle, Shield, Zap, RefreshCw, Database, Lock } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our API Fallback System</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform ensures your applications stay running with intelligent API fallback mechanisms
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <RefreshCw className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Automatic Fallback</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Seamlessly switches between multiple API providers when one fails
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Zap className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">High Performance</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Optimized for speed with intelligent caching and request management
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Reliability</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              99.99% uptime guarantee with our multi-provider approach
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Database className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Data Consistency</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Ensures consistent data format regardless of the API provider used
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Lock className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Enterprise-grade security with encryption and access controls
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <CheckCircle className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Easy Integration</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Simple SDK and comprehensive documentation for quick implementation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

