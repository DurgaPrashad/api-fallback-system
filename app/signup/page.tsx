"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CreditCard, User } from "lucide-react"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")
  const [selectedPlan, setSelectedPlan] = useState(planParam || "starter")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>
              Get started with our API Fallback System
            </CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="plan">Select Plan</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  Continue to Plan <User className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </TabsContent>
            
            <TabsContent value="plan">
              <CardContent className="pt-4">
                <div className="grid gap-4 md:grid-cols-3">
                  {/* Starter Plan */}
                  <div 
                    className={`flex flex-col rounded-lg border p-4 cursor-pointer transition-all ${
                      selectedPlan === 'starter' ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setSelectedPlan('starter')}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Starter</h3>
                        <p className="text-sm text-gray-500">For small projects</p>
                      </div>
                      {selectedPlan === 'starter' && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="mt-4 text-2xl font-bold">$29<span className="text-sm font-normal">/mo</span></div>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>50,000 API calls/month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>2 API providers</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>Basic analytics</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Pro Plan */}
                  <div 
                    className={`flex flex-col rounded-lg border p-4 cursor-pointer transition-all relative ${
                      selectedPlan === 'pro' ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setSelectedPlan('pro')}
                  >
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Popular
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Pro</h3>
                        <p className="text-sm text-gray-500">For growing businesses</p>
                      </div>
                      {selectedPlan === 'pro' && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="mt-4 text-2xl font-bold">$99<span className="text-sm font-normal">/mo</span></div>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>500,000 API calls/month</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>5 API providers</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Enterprise Plan */}
                  <div 
                    className={`flex flex-col rounded-lg border p-4 cursor-pointer transition-all ${
                      selectedPlan === 'enterprise' ? 'border-primary bg-primary/5' : ''
                    }`\
                    onClick={() => setSelectedPlan('enterprise')}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Enterprise</h3>
                        <p className="text-sm text-gray-500">For large organizations</p>
                      </div>
                      {selectedPlan === 'enterprise' && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="mt-4 text-2xl font-bold">$499<span className="text-sm font-normal">/mo</span></div>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>Unlimited API calls</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>Unlimited API providers</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>Real-time analytics</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>24/7 dedicated support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>SLA guarantees</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  Continue to Payment <CreditCard className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </TabsContent>
            
            <TabsContent value="payment">
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name-on-card">Name on Card</Label>
                  <Input id="name-on-card" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billing-address">Billing Address</Label>
                  <Input id="billing-address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP / Postal Code</Label>
                    <Input id="zip" placeholder="10001" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="mr-2">
                  <Link href="/">Cancel</Link>
                </Button>
                <Button>Complete Signup</Button>
              </CardFooter>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </main>
  )
}

