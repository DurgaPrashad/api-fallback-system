"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Package } from "lucide-react"
import Link from "next/link"

export function SubscriptionInfo() {
  const [open, setOpen] = useState(false)

  // Mock subscription data - in a real app, this would come from your API
  const subscription = {
    plan: "Pro",
    status: "active",
    renewalDate: "May 15, 2025",
    apiCallsUsed: 245678,
    apiCallsLimit: 500000,
    percentUsed: 49.1,
  }

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Package className="mr-2 h-4 w-4" />
        {subscription.plan} Plan
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Subscription Details</DialogTitle>
            <DialogDescription>Your current plan and usage information</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Plan</span>
                <span className="font-semibold">{subscription.plan}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <span className="font-semibold capitalize">{subscription.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Renewal Date</span>
                <span className="font-semibold">{subscription.renewalDate}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">API Calls Usage</span>
                <span className="text-sm text-gray-500">
                  {subscription.apiCallsUsed.toLocaleString()} / {subscription.apiCallsLimit.toLocaleString()}
                </span>
              </div>
              <Progress value={subscription.percentUsed} className="h-2" />
              <p className="text-xs text-gray-500">{subscription.percentUsed}% of your monthly API calls used</p>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" asChild className="sm:w-auto w-full">
              <Link href="/billing">
                <CreditCard className="mr-2 h-4 w-4" />
                Manage Billing
              </Link>
            </Button>
            <Button asChild className="sm:w-auto w-full">
              <Link href="/upgrade">Upgrade Plan</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

