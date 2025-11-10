"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface GameContextType {
  foundKeywords: string[]
  addKeyword: (keyword: string) => void
  resetGame: () => void
  addFoundKeyword?: (keyword: string) => void
  isKeywordFound?: (keyword: string) => boolean
}


const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [foundKeywords, setFoundKeywords] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("foundKeywords")
    if (saved) {
      setFoundKeywords(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("foundKeywords", JSON.stringify(foundKeywords))
  }, [foundKeywords])

  const addKeyword = (keyword: string) => {
    if (!foundKeywords.includes(keyword)) {
      setFoundKeywords((prev) => [...prev, keyword])
    }
  }

  const resetGame = () => {
    setFoundKeywords([])
    localStorage.removeItem("foundKeywords")
  }

  const addFoundKeyword = (keyword: string) => {
    addKeyword(keyword)
  }

  const isKeywordFound = (keyword: string) => {
    return foundKeywords.includes(keyword)
  }

  return (
    <GameContext.Provider value={{ foundKeywords, addKeyword, resetGame, addFoundKeyword, isKeywordFound }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}
