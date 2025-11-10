// app/game/page.tsx
"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useGame } from "@/contexts/GameContext"
import Link from "next/link"

// Danh sách từ khóa cần tìm (slogan: "VIỆT NAM ĐỔI MỚI")
const keywords = [
  "VỐN",           // V - Home
  "FDI",           // I - Home
  "ĐIỆN TỬ",       // E - Economy
  "CAO TỐC",       // T - Economy
  "NGHÈO",         // N - Society
  "KINH TẾ XANH",  // A - Economy
  "NGÀNH MŨI NHỌN", // M - Economy
  "ĐỔI MỚI",       // D - Culture
  "CỐ ĐÔ HUẾ",     // O - Culture
  "HÀNH CHÍNH",    // I - Society
  "MẠNG LƯỚI Y TẾ", // M - Society
  "NGUỒN LỰC",     // O - Culture
  "HIỆN ĐẠI",      // I - Statistics
]

// Từ khóa từ trang home
const homeKeywords = ["VỐN", "FDI"]

export default function GamePage() {
  const { foundKeywords, resetGame } = useGame()
  const [showCelebration, setShowCelebration] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // Kiểm tra khi tìm đủ từ khóa
  useEffect(() => {
    if (foundKeywords.length === keywords.length && foundKeywords.length > 0) {
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 5000)
    }
  }, [foundKeywords])

  const getKeywordHint = (keyword: string) => {
    const hints: { [key: string]: string } = {
      VỐN: "Tìm trong trang Home - phần Kinh tế và Tin nổi bật",
      FDI: "Tìm trong trang Home - phần Kinh tế và Tin nổi bật",
      "ĐIỆN TỬ": "Tìm trong trang Kinh tế - ngành xuất khẩu công nghệ cao",
      "CAO TỐC": "Tìm trong trang Kinh tế - tuyến giao thông huyết mạch",
      NGHÈO: "Tìm trong trang Xã hội - mục tiêu giảm...",
      "KINH TẾ XANH": "Tìm trong trang Kinh tế - nông nghiệp công nghệ cao",
      "NGÀNH MŨI NHỌN": "Tìm trong trang Kinh tế - ngành tạo nhiều việc làm",
      "ĐỔI MỚI": "Tìm trong trang Văn hóa - tinh thần cải cách",
      "CỐ ĐÔ HUẾ": "Tìm trong trang Văn hóa - di sản UNESCO",
      "HÀNH CHÍNH": "Tìm trong trang Xã hội - lĩnh vực được nâng cao hiệu quả",
      "MẠNG LƯỚI Y TẾ": "Tìm trong trang Xã hội - hệ thống tiên phong chống dịch",
      "NGUỒN LỰC": "Tìm trong trang Văn hóa - yếu tố phát triển văn hóa sáng tạo",
      "HIỆN ĐẠI": "Tìm trong trang Thống kê - mục tiêu xã hội hướng tới",
    }
    return hints[keyword] || "Tìm trong các trang nội dung"
  }

  const handleResetGame = () => {
    if (confirm("Bạn có chắc muốn reset tiến trình game? Tất cả từ khóa đã tìm thấy sẽ bị xóa.")) {
      resetGame()
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-400 via-red-500 to-yellow-600 text-white p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">Mini Game</span>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-linear-to-r from-yellow-300 via-white to-red-300 bg-clip-text text-transparent">
              TÌM TỪ KHÓA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Khám phá các từ khóa ẩn trong trang nội dung để hoàn thành slogan bí mật!
          </p>
        </motion.div>

        {/* Game Board */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          {/* Left: Keyword Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-yellow-300">TỪ KHÓA CẦN TÌM</h2>
              <div className="flex gap-2">
                <motion.button
                  onClick={() => setShowHint(!showHint)}
                  className="px-4 py-2 bg-yellow-500/20 rounded-xl border border-yellow-400/30 text-yellow-300 text-sm font-semibold hover:bg-yellow-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showHint ? "Ẩn gợi ý" : "Hiện gợi ý"}
                </motion.button>
                {foundKeywords.length > 0 && (
                  <motion.button
                    onClick={handleResetGame}
                    className="px-4 py-2 bg-red-500/20 rounded-xl border border-red-400/30 text-red-300 text-sm font-semibold hover:bg-red-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reset
                  </motion.button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keywords.map((keyword, index) => {
                const isHomeKeyword = homeKeywords.includes(keyword)
                const isFound = foundKeywords.includes(keyword)

                return (
                  <motion.div
                    key={keyword}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-2xl text-center font-bold text-lg border-2 transition-all duration-300 group relative ${
                      isFound
                        ? "bg-green-500/20 border-green-400 text-green-300 shadow-lg"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                    } ${isHomeKeyword ? "home-keyword" : ""}`}
                  >
                    {isFound ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span>✅</span>
                        <span>{keyword}</span>
                        {isHomeKeyword && <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">HOME</span>}
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>❓</span>
                        <span>???</span>
                        {isHomeKeyword && <span className="text-xs bg-blue-500/50 px-2 py-1 rounded-full">HOME</span>}
                      </div>
                    )}

                    {/* Hint Tooltip */}
                    {showHint && !isFound && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black/90 backdrop-blur-sm rounded-xl p-3 text-sm font-normal text-white/90 z-10 border border-white/20 shadow-2xl"
                      >
                        <div className="text-yellow-400 text-xs font-semibold mb-1">Gợi ý:</div>
                        {getKeywordHint(keyword)}
                        {isHomeKeyword && (
                          <div className="text-blue-400 text-xs font-semibold mt-2 flex items-center gap-1">
                            <span>📍</span>
                            <span>Có trong trang Home</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Progress & Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center">TIẾN ĐỘ & HƯỚNG DẪN</h2>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-lg mb-3">
                <span className="text-white/80">Đã tìm thấy</span>
                <span className="font-bold text-yellow-300">
                  {foundKeywords.length}/{keywords.length}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 mb-2">
                <motion.div
                  className="h-4 bg-linear-to-r from-green-400 via-yellow-400 to-red-400 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${(foundKeywords.length / keywords.length) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="text-center">
                <motion.span
                  className="text-sm text-white/60"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {foundKeywords.length === 0 && "Bắt đầu hành trình tìm kiếm!"}
                  {foundKeywords.length > 0 && foundKeywords.length < keywords.length && "Tiếp tục khám phá!"}
                  {foundKeywords.length === keywords.length && "🎉 Hoàn thành xuất sắc!"}
                </motion.span>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl text-yellow-400">🎯</span>
                <div>
                  <div className="font-semibold text-white">Tìm từ khóa ẩn</div>
                  <div className="text-sm text-white/70">Khám phá các trang nội dung để tìm từ khóa</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl text-yellow-400">💡</span>
                <div>
                  <div className="font-semibold text-white">Click để thu thập</div>
                  <div className="text-sm text-white/70">Nhấp vào từ khóa được đánh dấu để thu thập</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl text-yellow-400">🏆</span>
                <div>
                  <div className="font-semibold text-white">Khám phá slogan</div>
                  <div className="text-sm text-white/70">Hoàn thành tất cả để mở khóa bí mật!</div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  name: "Trang chủ",
                  href: "/",
                  color: "from-blue-500 to-purple-500",
                  keywords: homeKeywords,
                  icon: "🏠",
                },
                {
                  name: "Kinh tế",
                  href: "/economy",
                  color: "from-red-500 to-yellow-500",
                  keywords: ["ĐIỆN TỬ", "CAO TỐC", "KINH TẾ XANH", "NGÀNH MŨI NHỌN"],
                  icon: "💰",
                },
                {
                  name: "Văn hóa",
                  href: "/culture",
                  color: "from-yellow-500 to-red-500",
                  keywords: ["ĐỔI MỚI", "CỐ ĐÔ HUẾ", "NGUỒN LỰC"],
                  icon: "🎭",
                },
                {
                  name: "Xã hội",
                  href: "/society",
                  color: "from-green-500 to-blue-500",
                  keywords: ["NGHÈO", "HÀNH CHÍNH", "MẠNG LƯỚI Y TẾ"],
                  icon: "👨‍👩‍👧‍👦",
                },
                {
                  name: "Thống kê",
                  href: "/statistics",
                  color: "from-purple-500 to-pink-500",
                  keywords: ["HIỆN ĐẠI"],
                  icon: "📊",
                },
              ].map((page) => {
                const foundCount = page.keywords.filter((k) => foundKeywords.includes(k)).length
                const totalCount = page.keywords.length

                return (
                  <motion.div key={page.name} className="relative group" whileHover={{ scale: 1.02 }}>
                    <Link href={page.href}>
                      <div
                        className={`p-3 text-center rounded-xl font-semibold bg-linear-to-r ${page.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                      >
                        <div className="relative z-10">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <span className="text-lg">{page.icon}</span>
                            <div className="text-sm font-bold">{page.name}</div>
                          </div>
                          <div className="text-xs opacity-90">
                            {foundCount}/{totalCount} từ khóa
                          </div>
                        </div>

                        {/* Progress indicator */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-white/30"
                          initial={{ width: 0 }}
                          animate={{ width: `${(foundCount / totalCount) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Slogan Preview */}
        {foundKeywords.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              {foundKeywords.length === keywords.length ? "SLOGAN HOÀN CHỈNH" : "SLOGAN ĐANG ĐƯỢC HOÀN THIỆN"}
            </h3>
            <div className="text-3xl md:text-4xl font-black tracking-wider">
              {foundKeywords.length === keywords.length ? (
                <motion.span
                  className="bg-linear-to-r from-yellow-300 via-red-300 to-yellow-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  VIỆT NAM ĐỔI MỚI
                </motion.span>
              ) : (
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {keywords.map((keyword, index) => (
                    <motion.span
                      key={keyword}
                      className={`px-2 py-1 rounded-lg ${
                        foundKeywords.includes(keyword)
                          ? "bg-green-500/20 text-green-300 border border-green-400"
                          : "bg-white/5 text-white/30 border border-white/10"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {foundKeywords.includes(keyword) ? keyword : "?"}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

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
                className="bg-linear-to-br from-yellow-400 via-red-500 to-yellow-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-white/20 max-w-md w-full"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <motion.div
                  className="text-8xl mb-6"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5, repeat: 3 }}
                >
                  🏆
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
                  Bạn đã tìm thấy tất cả từ khóa và khám phá được slogan bí mật!
                </motion.p>

                <motion.div
                  className="text-3xl font-black text-yellow-300 bg-white/10 rounded-2xl p-6 mb-6 border border-white/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  VIỆT NAM ĐỔI MỚI
                </motion.div>

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setShowCelebration(false)}
                    className="flex-1 px-6 py-4 bg-white text-red-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Tiếp tục khám phá
                  </motion.button>
                  <motion.button
                    onClick={handleResetGame}
                    className="flex-1 px-6 py-4 bg-red-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Chơi lại
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}