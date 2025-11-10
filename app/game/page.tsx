// app/game/page.tsx
"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useGame } from "@/contexts/GameContext"
import Link from "next/link"

// Cấu trúc ô chữ với thông tin căn chỉnh cố định
const crosswordData = [
  { keyword: "EVFTA", highlightIndex: 1, letters: ["E", "V", "F", "T", "A"], paddingLeft: 7 }, // V
  { keyword: "FDI", highlightIndex: 2, letters: ["F", "D", "I"], paddingLeft: 6 }, // I
  { keyword: "ĐIỆN TỬ", highlightIndex: 2, letters: ["D", "I", "E", "N", "T", "U"], paddingLeft: 6 }, // E
  { keyword: "CAO TỐC", highlightIndex: 3, letters: ["C", "A", "O", "T", "O", "C"], paddingLeft: 5 }, // T
  { keyword: "NGHÈO", highlightIndex: 0, letters: ["N", "G", "H", "E", "O"], paddingLeft: 8 }, // N
  { keyword: "KINH TẾ XANH", highlightIndex: 7, letters: ["K", "I", "N", "H", "T", "E", "X", "A", "N", "H"], paddingLeft: 1 }, // A
  { keyword: "NGÀNH MŨI NHỌN", highlightIndex: 5, letters: ["N", "G", "A", "N", "H", "M", "U", "I", "N", "H", "O", "N"], paddingLeft: 3 }, // M
  { keyword: "DÂN GIAN", highlightIndex: 0, letters: ["D", "A", "N", "G", "I", "A", "N"], paddingLeft: 8 }, // D
  { keyword: "SỐ HÓA", highlightIndex: 3, letters: ["S", "O", "H", "O", "A"], paddingLeft: 5 }, // O
  { keyword: "HÀNH CHÍNH", highlightIndex: 6, letters: ["H", "A", "N", "H", "C", "H", "I", "N", "H"], paddingLeft: 2 }, // I
  { keyword: "MẠNG LƯỚI Y TẾ", highlightIndex: 0, letters: ["M", "A", "N", "G", "L", "U", "O", "I", "Y", "T", "E"], paddingLeft: 8 }, // M
  { keyword: "NGUỒN LỰC", highlightIndex: 3, letters: ["N", "G", "U", "O", "N", "L", "U", "C"], paddingLeft: 5 }, // O
  { keyword: "HIỆN ĐẠI", highlightIndex: 1, letters: ["H", "I", "E", "N", "D", "A", "I"], paddingLeft: 7 }, // I
]

// Từ khóa từ trang home (có dấu để match)
const homeKeywords = ["EVFTA", "FDI"]

export default function GamePage() {
  const { foundKeywords, resetGame } = useGame()
  const [showCelebration, setShowCelebration] = useState(false)
  const [showSlogan, setShowSlogan] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showResetDialog, setShowResetDialog] = useState(false)

  // Kiểm tra khi tìm đủ từ khóa
  useEffect(() => {
    if (foundKeywords.length === crosswordData.length && foundKeywords.length > 0) {
      setIsUnlocked(true)
    }
  }, [foundKeywords])

  const handleResetGame = () => {
    setShowResetDialog(true)
  }

  const confirmReset = () => {
    resetGame()
    setIsUnlocked(false)
    setShowSlogan(false)
    setShowResetDialog(false)
  }

  const cancelReset = () => {
    setShowResetDialog(false)
  }

  const handleUnlockSlogan = () => {
    if (isUnlocked) {
      setShowSlogan(true)
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 5000)
    }
  }

  // Render ô chữ với padding cố định
  const renderCrossword = () => {
    return (
      <div className="space-y-3">
        {crosswordData.map((row, rowIndex) => {
          const isFound = foundKeywords.includes(row.keyword)
          const totalWidth = 16 // Tổng chiều rộng 16 ô
          const paddingRight = totalWidth - (row.paddingLeft + row.letters.length)
          
          return (
            <motion.div
              key={row.keyword}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: rowIndex * 0.1 }}
              className="flex items-center gap-4"
            >
              {/* STT */}
              <div className="w-8 text-right text-sm text-white font-medium">
                {rowIndex + 1}.
              </div>

              {/* Các ô chữ cái với padding cố định */}
              <div className="flex gap-0 flex-1 min-h-6 items-center">
                {/* Padding trái cố định */}
                {Array.from({ length: row.paddingLeft }).map((_, index) => (
                  <div key={`left-${index}`} className="w-6 h-6" />
                ))}
                
                {/* Các ô chữ cái */}
                {row.letters.map((letter, letterIndex) => {
                  const isHighlighted = letterIndex === row.highlightIndex
                  
                  return (
                    <div
                      key={letterIndex}
                      className={`w-6 h-6 flex items-center justify-center border-2 text-sm font-bold transition-all duration-300 ${
                        isHighlighted
                          ? isFound
                            ? "bg-yellow-400 border-yellow-500 text-gray-900 shadow-lg transform scale-105"
                            : "bg-yellow-400/80 border-yellow-500/80 text-gray-900"
                          : isFound
                            ? "bg-white/90 border-gray-300 text-gray-700 shadow-md"
                            : "bg-white/70 border-gray-300 text-gray-600"
                      } ${letterIndex > 0 ? 'border-l-0' : ''}`}
                      style={{ borderRadius: 0 }}
                    >
                      {isFound ? letter : ""}
                    </div>
                  )
                })}

                {/* Padding phải */}
                {Array.from({ length: paddingRight }).map((_, index) => (
                  <div key={`right-${index}`} className="w-6 h-6" />
                ))}
              </div>

              {/* Ô hiển thị trạng thái */}
              <motion.div
                className={`w-8 h-8 flex items-center justify-center border-2 text-sm font-bold backdrop-blur-sm ${
                  isFound 
                    ? "bg-green-500/20 border-green-400 text-green-300 shadow-lg" 
                    : "bg-white/10 border-white/20 text-white/60"
                }`}
                style={{ borderRadius: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {isFound ? "✓" : "?"}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900 text-white">
      {/* Particles Background */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header với background gradient đỏ */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-linear-to-r from-red-600/80 to-orange-600/80 text-white py-12 shadow-2xl backdrop-blur-sm"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto max-w-7xl px-4 relative">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className="bg-linear-to-r from-yellow-300 via-white to-orange-300 bg-clip-text text-transparent">
                Ô CHỮ BÍ MẬT
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Tìm các từ khóa ẩn để mở khóa slogan bí mật!
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Nội dung chính */}
      <div className="container mx-auto max-w-7xl px-4 py-12 relative">
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-8 mb-8">
          {/* Left: Crossword - Chiếm 2/3 màn hình */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-6 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            {/* Header với tiêu đề và nút reset được căn chỉnh đúng */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">KHÁM PHÁ Ô CHỮ</h2>
              {foundKeywords.length > 0 && (
                <motion.button
                  onClick={handleResetGame}
                  className="px-4 py-2 bg-red-500/20 rounded-xl border border-red-400/30 text-white-300 text-sm font-semibold hover:bg-red-500/30 transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reset Game
                </motion.button>
              )}
            </div>

            {renderCrossword()}

            {/* Phần slogan được chuyển xuống đây */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <motion.button
                  onClick={handleUnlockSlogan}
                  disabled={!isUnlocked}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm ${
                    isUnlocked
                      ? "bg-linear-to-r from-yellow-500 to-orange-600 text-white hover:shadow-2xl cursor-pointer shadow-lg transform hover:scale-105"
                      : "bg-gray-600/30 text-gray-300 cursor-not-allowed border border-gray-500/30"
                  }`}
                  whileHover={isUnlocked ? { scale: 1.05, y: -2 } : {}}
                  whileTap={isUnlocked ? { scale: 0.95 } : {}}
                >
                  {isUnlocked ? (
                    <div className="flex items-center justify-center gap-3">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        🔓
                      </motion.span>
                      <span>MỞ KHÓA SLOGAN</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <span>🔒</span>
                      <span>CẦN TÌM ĐỦ {crosswordData.length} TỪ KHÓA ĐỂ HIỂN THỊ SLOGAN</span>
                    </div>
                  )}
                </motion.button>
              </div>

              {/* Hiển thị slogan khi mở khóa */}
              {showSlogan && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-6 p-6 bg-linear-to-r from-yellow-400/20 to-red-400/20 rounded-2xl border border-yellow-400/30 text-center backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">SLOGAN BÍ MẬT</h3>
                  <motion.div
                    className="text-3xl md:text-4xl font-black tracking-tight wrap-break-word leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="bg-linear-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                      VIETNAMMUONDOI
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right: Progress & Instructions - Chiếm 1/3 màn hình */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">TIẾN ĐỘ HOÀN THÀNH</h2>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-xl mb-4">
                <span className="text-white/80">Đã tìm thấy</span>
                <span className="font-bold text-yellow-300">
                  {foundKeywords.length}/{crosswordData.length}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 mb-3 backdrop-blur-sm">
                <motion.div
                  className="h-4 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${(foundKeywords.length / crosswordData.length) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="text-center">
                <motion.span
                  className="text-lg text-white/70"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {foundKeywords.length === 0 && "Bắt đầu tìm kiếm từ khóa!"}
                  {foundKeywords.length > 0 && foundKeywords.length < crosswordData.length && "Tiếp tục khám phá!"}
                  {foundKeywords.length === crosswordData.length && "🎉 Đã mở khóa slogan!"}
                </motion.span>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "🎯",
                  title: "Tìm từ khóa ẩn",
                  description: "Khám phá các trang nội dung để tìm từ khóa"
                },
                {
                  icon: "💡",
                  title: "Click để thu thập",
                  description: "Nhấp vào từ khóa được đánh dấu để thu thập"
                },
                {
                  icon: "🏆",
                  title: "Khám phá slogan",
                  description: "Hoàn thành tất cả để mở khóa bí mật!"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-lg">{item.title}</div>
                    <div className="text-white/70 text-sm">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="space-y-3">
              {[
                {
                  name: "Trang chủ",
                  href: "/",
                  keywords: homeKeywords,
                  icon: "🏠",
                  color: "from-red-500 to-orange-500"
                },
                {
                  name: "Văn hóa",
                  href: "/culture",
                  keywords: ["DÂN GIAN", "SỐ HÓA", "NGUỒN LỰC"],
                  icon: "🎭",
                  color: "from-amber-500 to-yellow-500"
                },
                {
                  name: "Kinh tế",
                  href: "/economy",
                  keywords: ["ĐIỆN TỬ", "CAO TỐC", "KINH TẾ XANH", "NGÀNH MŨI NHỌN"],
                  icon: "💰",
                  color: "from-orange-500 to-amber-500"
                },
                {
                  name: "Xã hội",
                  href: "/society",
                  keywords: ["NGHÈO", "HÀNH CHÍNH", "MẠNG LƯỚI Y TẾ"],
                  icon: "👨‍👩‍👧‍👦",
                  color: "from-yellow-500 to-red-500"
                },
                {
                  name: "Thống kê",
                  href: "/statistics",
                  keywords: ["HIỆN ĐẠI"],
                  icon: "📊",
                  color: "from-red-600 to-orange-600"
                },
              ].map((page, index) => {
                const foundCount = page.keywords.filter((k) => foundKeywords.includes(k)).length
                const totalCount = page.keywords.length

                return (
                  <motion.div 
                    key={page.name} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link href={page.href}>
                      <div className={`p-4 rounded-xl font-semibold bg-linear-to-r ${page.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm`}>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{page.icon}</span>
                              <div className="font-bold text-lg">{page.name}</div>
                            </div>
                            <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                              {foundCount}/{totalCount} từ khóa
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Reset Confirmation Dialog */}
        <AnimatePresence>
          {showResetDialog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4"
            >
              <motion.div
                className="bg-linear-to-br from-red-600/90 to-orange-600/90 rounded-3xl p-8 md:p-10 text-center shadow-2xl border border-white/20 max-w-md w-full backdrop-blur-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 0.5, repeat: 2 }}
                >
                  ⚠️
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-4xl font-black text-white mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  RESET GAME?
                </motion.h2>

                <motion.div
                  className="text-lg text-white/90 mb-2 p-4 bg-white/10 rounded-2xl border border-white/20"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="font-bold text-yellow-300 mb-1">
                    {foundKeywords.length} từ khóa sẽ bị xóa!
                  </div>
                  <div className="text-sm">
                    Tất cả tiến trình của bạn sẽ bị mất
                  </div>
                </motion.div>

                <motion.p
                  className="text-white/80 mb-6 text-sm"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Bạn có chắc muốn reset tiến trình game?
                </motion.p>

                <div className="flex gap-4">
                  <motion.button
                    onClick={cancelReset}
                    className="flex-1 px-4 py-3 bg-white/20 text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Hủy
                  </motion.button>
                  <motion.button
                    onClick={confirmReset}
                    className="flex-1 px-4 py-3 bg-linear-to-r from-red-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Reset Game
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Celebration Animation */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4"
            >
              <motion.div
                className="bg-linear-to-br from-red-600/90 to-orange-600/90 rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-white/20 max-w-md w-full backdrop-blur-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <motion.div
                  className="text-8xl mb-6"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 0.7, repeat: 3 }}
                >
                  🎉
                </motion.div>

                <motion.h2
                  className="text-4xl md:text-5xl font-black text-white mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  CHÚC MỪNG!
                </motion.h2>

                <motion.p
                  className="text-xl text-white/90 mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Bạn đã khám phá được slogan bí mật!
                </motion.p>

                <motion.div
                  className="text-2xl md:text-3xl font-black bg-linear-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent bg-white/10 rounded-2xl p-6 mb-6 border border-white/20 wrap-break-word leading-tight"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  VIETNAMMUONDOI
                </motion.div>

                <motion.button
                  onClick={() => setShowCelebration(false)}
                  className="w-full px-6 py-4 bg-white text-red-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Hoàn thành dự án
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}