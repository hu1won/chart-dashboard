'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import LineChart from "@/components/LineChart"
import BarChart from "@/components/BarChart"
import PieChart from "@/components/PieChart"
import Button10 from "@/components/Button10"
import Button12 from "@/components/Button12"
import Button13 from "@/components/Button13"
import Button13_1 from "@/components/Button13_1"
import Button14 from "@/components/Button14"
import Button15 from "@/components/Button15"
import Button15_1 from "@/components/Button15_1"
import Button16 from "@/components/Button16"
import Button17 from "@/components/Button17"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [activeChart, setActiveChart] = useState<number | null>(null)

  const renderChart = () => {
    switch(activeChart) {
      case 1:
        return <LineChart />
      case 2:
        return <BarChart />
      case 3:
        return <PieChart />
      case 10:
        return <Button10 />
      case 12:
        return <Button12 />
      case 13:
        return <Button13 />
      case 13.1:
        return <Button13_1 />
      case 14:
        return <Button14 />
      case 15:
        return <Button15 />
      case 15.1:
        return <Button15_1 />
      case 16:
        return <Button16 />
      case 17:
        return <Button17 />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800 shadow-text">차트 대시보드</h1>
        <Card className="mb-8 p-6 bg-white bg-opacity-80 backdrop-blur-md">
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: 24 }, (_, i) => (
              <Button 
                key={i} 
                onClick={() => setActiveChart(i + 1)}
                className={`text-sm py-2 px-3 rounded-full transition-all duration-200 ${
                  activeChart === i + 1 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-white text-indigo-600 hover:bg-indigo-100'
                }`}
              >
                {i + 1}
              </Button>
            ))}
            <Button 
              onClick={() => setActiveChart(13.1)}
              className={`text-sm py-2 px-3 rounded-full transition-all duration-200 ${
                activeChart === 13.1 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-100'
              }`}
            >
              13-1
            </Button>
            <Button 
              onClick={() => setActiveChart(15.1)}
              className={`text-sm py-2 px-3 rounded-full transition-all duration-200 ${
                activeChart === 15.1 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-100'
              }`}
            >
              15-1
            </Button>
          </div>
        </Card>
        <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
          <CardContent className="p-6">
            {renderChart()}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
