"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useGame } from "@/contexts/GameContext"

interface ClickableKeywordProps {
  keyword: string
  children: React.ReactNode
  className?: string
}

export default function ClickableKeyword({ keyword, children, className = "" }: ClickableKeywordProps) {
  const gameContext = useGame()
  const addFoundKeyword = gameContext?.addFoundKeyword || gameContext?.addKeyword
  const isKeywordFound =
    gameContext?.isKeywordFound || ((k: string) => gameContext?.foundKeywords?.includes(k) ?? false)

  const isFound = isKeywordFound(keyword)

  const handleClick = () => {
    if (!isFound && addFoundKeyword) {
      addFoundKeyword(keyword)
    }
  }

  return (
    <motion.span
      onClick={handleClick}
      className={`cursor-pointer transition-all duration-300 ${
        isFound
          ? "bg-green-500/20 text-green-300 px-1 rounded"
          : "hover:bg-yellow-500/20 hover:text-yellow-300 px-1 rounded"
      } ${className}`}
      whileHover={{ scale: isFound ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isFound ? "Đã tìm thấy!" : "Click để thu thập từ khóa"}
    >
      {children}
      {!isFound && (
        <motion.span className="ml-1 text-xs" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
          💡
        </motion.span>
      )}
    </motion.span>
  )
}
