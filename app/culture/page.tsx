// app/culture/page.tsx
"use client"

import type React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useInView, type Variants } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { useGame } from "@/contexts/GameContext"

// Animation variants với easing hợp lệ
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// Animated component wrapper
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function AnimatedItem({
  children,
  variants = itemVariants,
  className = "",
}: {
  children: React.ReactNode
  variants?: Variants
  className?: string
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

// Component cho từ khóa có thể click với hint - ĐÃ SỬA (bỏ icon bóng đèn)
function Keyword({
  word,
  keyword,
  hint,
  className = "",
  inheritFontWeight = false,
}: {
  word: string
  keyword: string
  hint: string
  className?: string
  inheritFontWeight?: boolean
}) {
  const { foundKeywords, addKeyword } = useGame()
  const [isRecentlyFound, setIsRecentlyFound] = useState(false)

  const isFound = foundKeywords.includes(keyword)

  const handleClick = () => {
    if (!isFound) {
      addKeyword(keyword)
      setIsRecentlyFound(true)
      setTimeout(() => setIsRecentlyFound(false), 2000)
    }
  }

  return (
    <span className="keyword-wrapper relative inline-block">
      <motion.span
        onClick={handleClick}
        className={`
          keyword 
          ${isFound ? "found" : "not-found"} 
          ${isRecentlyFound ? "recently-found" : ""}
          ${inheritFontWeight ? "inherit-weight" : ""}
          ${className}
        `}
        whileHover={{ scale: isFound ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={isFound ? "Đã tìm thấy!" : `Click để thu thập từ khóa: ${hint}`}
        style={{
          cursor: isFound ? "default" : "pointer",
          display: "inline-block",
          margin: "0 2px",
        }}
      >
        {word}
      </motion.span>
    </span>
  )
}

// Component Hint Panel cho Culture
function CultureHintPanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hint Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-40 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-xl shadow-2xl font-semibold flex items-center gap-2"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <span>💡</span>
        <span className="hidden sm:inline">Gợi ý</span>
      </motion.button>

      {/* Hint Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-sm z-50 shadow-2xl border-l border-gray-200"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span>💡</span>
                  Gợi ý Tìm từ khóa - Văn hóa
                </h3>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-xl">×</span>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                      <span>🔄</span>
                      Từ khóa "ĐỔI MỚI"
                    </h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• 2 từ, 7 chữ cái</li>
                      <li>• Liên quan đến tinh thần cải cách</li>
                      <li>• Tìm trong phần Sự kiện văn hóa</li>
                      <li>• Thể hiện tinh thần phát triển</li>
                      <li>• Chữ cái cần tìm: <strong>D</strong></li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <span>🏯</span>
                      Từ khóa "CỐ ĐÔ HUẾ"
                    </h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• 3 từ, 8 chữ cái</li>
                      <li>• Liên quan đến di sản UNESCO</li>
                      <li>• Tìm trong phần Di sản & Công nhận</li>
                      <li>• Di sản văn hóa thế giới</li>
                      <li>• Chữ cái cần tìm: <strong>O</strong></li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <span>💎</span>
                      Từ khóa "NGUỒN LỰC"
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 2 từ, 8 chữ cái</li>
                      <li>• Liên quan đến phát triển văn hóa</li>
                      <li>• Tìm trong phần Văn hóa sáng tạo</li>
                      <li>• Yếu tố quan trọng cho phát triển</li>
                      <li>• Chữ cái cần tìm: <strong>O</strong></li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <span>💎</span>
                      Mẹo tìm kiếm
                    </h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Tìm các từ được gạch chân nhẹ</li>
                      <li>• Di chuột vào từ để xem gợi ý</li>
                      <li>• Click vào từ để thu thập từ khóa</li>
                      <li>• Từ khóa đã tìm thấy sẽ chuyển màu xanh</li>
                      <li>• Mỗi từ khóa chỉ xuất hiện 1 lần duy nhất</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">Tìm tất cả từ khóa để khám phá slogan bí mật!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default function CulturePage() {
  const { foundKeywords } = useGame()

  // CSS styles cho keyword system - ĐÃ SỬA (xóa hoàn toàn gạch chân)
  const keywordStyles = `
    .keyword {
      cursor: pointer;
      padding: 2px 4px;
      border-radius: 4px;
      transition: all 0.3s ease;
      position: relative;
      border: 1px solid transparent;
      display: inline-block;
    }
    
    .keyword.inherit-weight {
      font-weight: inherit;
    }
    
    .keyword.not-found {
      background: transparent;
      color: inherit;
      font-weight: inherit;
      /* HOÀN TOÀN BÌNH THƯỜNG - KHÔNG GẠCH CHÂN */
    }
    
    .keyword.not-found:hover {
      background: rgba(251, 191, 36, 0.1);
      border-color: #f59e0b;
    }
    
    .keyword.found {
      background: linear-gradient(45deg, #10b981, #059669);
      color: white;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
      border-color: #059669;
      font-weight: 600;
    }
    
    .keyword.recently-found {
      animation: pulse-glow 2s ease-in-out;
    }
    
    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
      }
      50% { 
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
        transform: scale(1.1);
      }
    }
    
    .game-float-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }

    .keyword-wrapper {
      display: inline-block;
      position: relative;
    }
  `

  const heritageSites = [
    {
      name: "Phố cổ Hội An",
      description: "Di sản văn hóa thế giới được UNESCO công nhận",
      image: "/images/hoi-an.jpg",
      link: "https://ftripvietnam.com/the-ultimate-guide-to-exploring-vietnams-unesco-world-heritage",
    },
    {
      name: "Quần thể Cố đô Huế",
      description: "Di sản văn hóa thế giới với kiến trúc cung đình độc đáo",
      image: "/images/hue.jpg",
      link: "https://ftripvietnam.com/the-ultimate-guide-to-exploring-vietnams-unesco-world-heritage",
    },
    {
      name: "Quần thể danh thắng Tràng An",
      description: "Di sản văn hóa và thiên nhiên thế giới kép",
      image: "/images/trang-an.jpg",
      link: "https://vi.wikipedia.org/wiki/Qu%E1%BA%A7n_th%E1%BB%83_danh_th%E1%BA%AFng_Tr%C3%A0ng_An",
    },
  ]

  const culturalEvents = [
    {
      title: "SEA Games 31 (2022)",
      description:
        "Lễ khai mạc với hơn 1.000 nghệ sĩ và học sinh, giới thiệu văn hóa Việt Nam đến bạn bè quốc tế, thể hiện tinh thần ",
      image: "/images/sea-games.jpg",
      link: "https://vietnamnews.vn/life-style/1188874/sea-games-opening-ceremony-to-show-essence-of-viet-nam.html",
      stats: "1.000+ nghệ sĩ tham gia",
    },
    {
      title: "Liên hoan phim quốc tế",
      description:
        "Ngành điện ảnh Việt Nam đạt doanh thu ~3.017 tỷ đồng (~US$123 triệu) nửa đầu 2025, cho thấy sự ",
      image: "/images/film-festival.jpg",
      link: "https://vietnamnet.vn/en/vietnamese-cinema-and-art-industries-surge-in-2025-2456571.html",
      stats: "67% thị phần phim Việt",
    },
  ]

  const creativeIndustries = [
    {
      sector: "Công nghiệp Game",
      revenue: "13.663 tỷ đồng",
      growth: "+8.8%",
      description: "Hơn 5.7 tỷ lượt tải từ nước ngoài năm 2024, cho thấy ",
      image: "/images/game-industry.jpg",
      link: "https://www.vietnam.vn/en/buoc-chuyen-minh-cua-game-viet",
    },
    {
      sector: "Dịch vụ Văn hóa",
      revenue: "55.3%",
      growth: "+11.9%",
      description: "Tỷ lệ doanh thu ngành dịch vụ văn hóa trong tổng doanh thu, phản ánh ",
      image: "/images/creative-services.jpg",
      link: "https://www.vietnam.vn/buoc-tien-chien-luoc-tren-ban-do-kinh-te-sang-tao-toan-cau",
    },
  ]

  const preservationInitiatives = [
    {
      title: "Đưa nghệ thuật truyền thống vào trường học",
      description:
        "Xây dựng CLB văn hóa dân gian, số hóa di sản để tiếp cận người trẻ và bảo tồn ",
      image: "/images/traditional-art.jpg",
    },
    {
      title: "Phục dựng nghề truyền thống",
      description:
        "Kết hợp dệt, gốm với du lịch trải nghiệm, tạo sinh kế cho cộng đồng và phát huy ",
      image: "/images/craft-village.jpg",
    },
    {
      title: "Số hóa di sản",
      description:
        "Ứng dụng công nghệ trong bảo tồn và quảng bá di sản văn hóa, tạo ",
      image: "/images/digital-heritage.jpg",
    },
  ]

  const challenges = [
    "Thương mại hóa văn hóa dễ dẫn đến mất bản sắc",
    "Thiếu nguồn lực cho bảo tồn dài hạn",
    "Cần cơ chế hỗ trợ nghệ sĩ độc lập và sáng tạo trẻ",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-red-50 text-foreground overflow-x-hidden">
      
      <style jsx>{keywordStyles}</style>

      {/* Hint Panel Component */}
      <CultureHintPanel />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-600 text-white p-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-400/30 rounded-full blur-2xl"></div>

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <AnimatedItem variants={itemVariants}>
            <div className="mb-8">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wide">
                  Văn hóa Việt Nam
                </span>
                <div className="w-2 h-2 bg-red-300 rounded-full"></div>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 via-white to-red-300 bg-clip-text text-transparent">
                  Văn Hóa
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 mt-4 block">
                  Bảo tồn & Sáng tạo
                </span>
              </h1>

              <div className="inline-flex my-6 items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-yellow-300 text-sm md:text-base font-semibold">
                  2018 – Nay
                </span>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/10 shadow-2xl"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-white/95 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Văn hóa Việt Nam trong giai đoạn 2018–nay là bức tranh giao thoa
                giữa bảo tồn truyền thống và bùng nổ sáng tạo hiện đại. Từ việc
                bảo tồn di sản tới sự lên ngôi của nền công nghiệp sáng tạo, văn
                hóa đóng vai trò quan trọng trong xây dựng bản sắc và thu hút du
                lịch.
              </motion.p>
            </motion.div>
          </AnimatedItem>
        </motion.div>
      </section>

      {/* Di sản & Công nhận quốc tế */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Di sản &
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Công nhận Quốc tế
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Khám phá những di sản văn hóa và thiên nhiên thế giới được
                UNESCO công nhận
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heritageSites.map((site, index) => (
              <AnimatedItem key={site.name} variants={slideInLeft}>
                <motion.div
                  className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      UNESCO
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {site.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {site.name === "Quần thể Cố đô Huế" ? (
                        <>
                          Di sản văn hóa thế giới với kiến trúc{" "}
                          <Keyword 
                            word="Cố đô Huế" 
                            keyword="CỐ ĐÔ HUẾ" 
                            hint="Di sản UNESCO với kiến trúc cung đình độc đáo" 
                            inheritFontWeight={true}
                          />{" "}
                          độc đáo
                        </>
                      ) : (
                        site.description
                      )}
                    </p>
                    <motion.a
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Tìm hiểu thêm</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="mt-12 p-8 bg-gradient-to-r from-yellow-50 to-red-50 rounded-3xl border border-yellow-200"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg text-gray-700 text-center">
                Sáng kiến bảo tồn như số hóa di sản, nâng cấp kết cấu hạ tầng
                đón khách du lịch đã góp phần gia tăng lượng khách quốc tế và
                tạo nguồn lực cho địa phương.
              </p>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Sự kiện văn hóa tiêu biểu */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-red-50/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Sự kiện Văn hóa
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Tiêu biểu
                </span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="space-y-12">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
              >
                <div className="lg:w-1/2">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative h-80 lg:h-96 w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="font-semibold text-gray-800">
                          {event.stats}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:w-1/2">
                  <motion.div
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                      {event.title === "SEA Games 31 (2022)" ? (
                        <Keyword 
                          word="đổi mới" 
                          keyword="ĐỔI MỚI" 
                          hint="Tinh thần cải cách và phát triển trong văn hóa" 
                          inheritFontWeight={true}
                        />
                      ) : (
                        "phát triển ổn định"
                      )}{" "}
                      của ngành văn hóa.
                    </p>
                    <motion.a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>Xem chi tiết</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Văn hóa sáng tạo & Công nghiệp nội dung */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Văn hóa Sáng tạo &
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Công nghiệp Nội dung
                </span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {creativeIndustries.map((industry, index) => (
              <AnimatedItem
                key={industry.sector}
                variants={index === 0 ? slideInLeft : slideInRight}
              >
                <motion.div
                  className="group relative bg-gradient-to-br from-yellow-50 to-red-50 rounded-3xl p-8 shadow-2xl border border-yellow-200 overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {industry.sector}
                    </h3>

                    <div className="flex items-center gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-black text-red-600">
                          {industry.revenue}
                        </div>
                        <div className="text-sm text-gray-600">Doanh thu</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-green-600">
                          {industry.growth}
                        </div>
                        <div className="text-sm text-gray-600">Tăng trưởng</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-lg">
                      {industry.description}
                      <Keyword 
                        word="nguồn lực" 
                        keyword="NGUỒN LỰC" 
                        hint="Yếu tố quan trọng cho phát triển văn hóa sáng tạo" 
                        inheritFontWeight={true}
                      />{" "}
                      phát triển mạnh mẽ.
                    </p>

                    <motion.a
                      href={industry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Khám phá thêm</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200/30 rounded-full translate-y-12 -translate-x-12"></div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-3xl p-8 text-white text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xl font-semibold">
                Sự chuyển dịch từ sản xuất đơn thuần sang dịch vụ — trải nghiệm
                và sáng tạo nội dung số được chú trọng
              </p>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Bảo tồn bản sắc & Truyền dạy */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Bảo tồn Bản sắc &
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Truyền dạy
                </span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preservationInitiatives.map((initiative, index) => (
              <AnimatedItem key={initiative.title} variants={fadeInUp}>
                <motion.div
                  className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {initiative.description}
                      {initiative.title === "Đưa nghệ thuật truyền thống vào trường học" && " văn hóa truyền thống."}
                      {initiative.title === "Phục dựng nghề truyền thống" && " bản sắc văn hóa."}
                      {initiative.title === "Số hóa di sản" && " cơ hội tiếp cận rộng rãi."}
                    </p>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="mt-12 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg text-gray-700">
                Sự kết hợp giữa giữ gìn bản sắc và ứng dụng hiện đại giúp văn
                hóa truyền thống tiếp cận sống động trong thời đại mới.
              </p>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Thách thức & Kết luận */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Thách thức */}
            <AnimatedItem variants={slideInLeft}>
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-2xl border border-red-100"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center">
                  Thách Thức
                </h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.li
                      key={challenge}
                      className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">
                        {challenge}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedItem>

            {/* Kết luận */}
            <AnimatedItem variants={slideInRight}>
              <motion.div
                className="bg-gradient-to-br from-yellow-400 to-red-500 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Kết Luận
                  </h3>
                  <p className="text-lg leading-relaxed text-center mb-6">
                    Văn hóa đang trở thành lực đẩy mềm cho phát triển xã hội và
                    kinh tế; việc cân bằng giữa bảo tồn và đổi mới là yếu tố
                    then chốt để phát huy giá trị lâu dài.
                  </p>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Game Navigation Floating Button */}
      <motion.div
        className="game-float-btn"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Link href="/game">
          <motion.div
            className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <span className="text-xl">🎮</span>
              {foundKeywords.length > 0 && (
                <motion.div
                  className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full text-xs flex items-center justify-center text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {foundKeywords.length}
                </motion.div>
              )}
            </div>
            <span>Mini Game</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              →
            </motion.span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}