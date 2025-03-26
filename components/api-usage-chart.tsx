"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data - in a real app, this would come from your API
const mockData = [
  {
    name: "Jan",
    primary: 4000,
    secondary: 240,
    fallback: 20,
  },
  {
    name: "Feb",
    primary: 3000,
    secondary: 198,
    fallback: 28,
  },
  {
    name: "Mar",
    primary: 2000,
    secondary: 980,
    fallback: 110,
  },
  {
    name: "Apr",
    primary: 2780,
    secondary: 390,
    fallback: 30,
  },
  {
    name: "May",
    primary: 1890,
    secondary: 480,
    fallback: 80,
  },
  {
    name: "Jun",
    primary: 2390,
    secondary: 380,
    fallback: 40,
  },
  {
    name: "Jul",
    primary: 3490,
    secondary: 430,
    fallback: 90,
  },
]

export function ApiUsageChart() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration errors with SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[350px] flex items-center justify-center">Loading chart...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="primary" name="Primary API" fill="#4f46e5" />
        <Bar dataKey="secondary" name="Secondary API" fill="#8884d8" />
        <Bar dataKey="fallback" name="Fallback API" fill="#ff7c43" />
      </BarChart>
    </ResponsiveContainer>
  )
}

