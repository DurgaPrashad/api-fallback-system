"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from your API
const mockApiStatus = [
  {
    id: 1,
    name: "Primary API",
    status: "operational",
    latency: "45ms",
    uptime: "99.98%",
    lastChecked: "2 minutes ago",
  },
  {
    id: 2,
    name: "Secondary API",
    status: "operational",
    latency: "62ms",
    uptime: "99.95%",
    lastChecked: "3 minutes ago",
  },
  {
    id: 3,
    name: "Fallback API",
    status: "operational",
    latency: "87ms",
    uptime: "99.90%",
    lastChecked: "4 minutes ago",
  },
  {
    id: 4,
    name: "Analytics API",
    status: "degraded",
    latency: "210ms",
    uptime: "98.76%",
    lastChecked: "1 minute ago",
  },
  {
    id: 5,
    name: "Backup API",
    status: "operational",
    latency: "95ms",
    uptime: "99.85%",
    lastChecked: "5 minutes ago",
  },
]

export function ApiStatusTable() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration errors with SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[350px] flex items-center justify-center">Loading status...</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>API Provider</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Latency</TableHead>
          <TableHead>Uptime</TableHead>
          <TableHead className="text-right">Last Checked</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockApiStatus.map((api) => (
          <TableRow key={api.id}>
            <TableCell className="font-medium">{api.name}</TableCell>
            <TableCell>
              <StatusBadge status={api.status} />
            </TableCell>
            <TableCell>{api.latency}</TableCell>
            <TableCell>{api.uptime}</TableCell>
            <TableCell className="text-right">{api.lastChecked}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "operational":
      return <Badge className="bg-green-500 hover:bg-green-600">Operational</Badge>
    case "degraded":
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Degraded</Badge>
    case "outage":
      return <Badge className="bg-red-500 hover:bg-red-600">Outage</Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

