// app/society/page.tsx
"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView, type Variants } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { useGame } from "@/contexts/GameContext"
import Link from "next/link"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
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

const slideInLeft = {
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

const slideInRight = {
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
  variants?: any
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

// Component Hint Panel cho Society
function SocietyHintPanel() {
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
                  Gợi ý Tìm từ khóa - Xã hội
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
                      <span>📉</span>
                      Từ khóa "NGHÈO"
                    </h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• 1 từ, 5 chữ cái</li>
                      <li>• Liên quan đến chính sách xã hội</li>
                      <li>• Tìm trong phần Hero Section</li>
                      <li>• Vấn đề xã hội quan trọng</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <span>🏛️</span>
                      Từ khóa "HÀNH CHÍNH"
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 2 từ, 9 chữ cái</li>
                      <li>• Liên quan đến dịch vụ công</li>
                      <li>• Tìm trong phần Giáo dục & Đào tạo</li>
                      <li>• Hệ thống quản lý nhà nước</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <span>🏥</span>
                      Từ khóa "MẠNG LƯỚI Y TẾ"
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 3 từ, 12 chữ cái</li>
                      <li>• Liên quan đến hệ thống chăm sóc sức khỏe</li>
                      <li>• Tìm trong phần Y tế & Phúc lợi</li>
                      <li>• Hệ thống cơ sở y tế toàn quốc</li>
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

export default function SocietyPage() {
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

  const healthcareStats = [
    {
      value: "94.2%",
      label: "Tỷ lệ BHYT 2024",
      description: "~95.5 triệu người tham gia",
      trend: "+",
      color: "text-chart-1",
      link: "https://vss.gov.vn/english/news/Pages/vietnam-social-security.aspx?CateID=198&ItemID=12528",
    },
    {
      value: "95%",
      label: "Mục tiêu 2025",
      description: "Phủ sóng toàn dân",
      trend: "↑",
      color: "text-chart-3",
      link: "https://vietnamnews.vn/society/1178063/localities-asked-to-raise-health-insurance-coverage-to-over-95-per-cent-by-2025.html",
    },
    {
      value: "100%",
      label: "Tiêm chủng",
      description: "Tỷ lệ bao phủ vaccine COVID-19",
      trend: "✓",
      color: "text-chart-2",
    },
  ]

  const educationStats = [
    {
      value: "98%",
      label: "Hoàn thành tiểu học",
      description: "Tỷ lệ phổ cập giáo dục",
      icon: "🎓",
      link: "https://b-company.jp/vi/vietnam-education-development-targets-to-2030-and-opportunities-for-foreign-investors/",
    },
    {
      value: "90%",
      label: "Trường học có Internet",
      description: "Kết nối toàn quốc",
      icon: "🌐",
      link: "https://un-dco.org/stories/viet-nam-closes-learning-gaps-towards-education-all",
    },
    {
      value: "204M+",
      label: "Phút học trực tuyến",
      description: "Nền tảng miễn phí 2024",
      icon: "💻",
      link: "https://vietnamnet.vn/en/vietnam-becomes-second-largest-global-user-of-free-online-learning-platforms-2370118.html",
    },
  ]

  const digitalTransformation = [
    {
      title: "Dịch vụ công trực tuyến",
      description: "Hóa đơn điện tử, một cửa điện tử và quản lý dữ liệu dân cư",
      icon: "📱",
      status: "Đang triển khai",
      link: "https://dangcongsan.vn/tin-hoat-dong/thuc-day-trien-khai-cac-giai-phap-cong-nghe-phuc-vu-nguoi-dan-doanh-nghiep-gan-voi-du-lieu-dan-cu-dinh-danh-xac-thuc-die.html",
    },
    {
      title: "BHYT số",
      description: "Từ 1/6/2025 ngừng thẻ giấy, chuyển sang VssID và căn cước chip",
      icon: "💳",
      status: "Sắp áp dụng",
      link: "https://dangcongsan.vn/tin-hoat-dong/thuc-day-trien-khai-cac-giai-phap-cong-nghe-phuc-vu-nguoi-dan-doanh-nghiep-gan-voi-du-lieu-dan-cu-dinh-danh-xac-thuc-die.html",
    },
    {
      title: "Telemedicine",
      description: "Khám chữa bệnh từ xa và chăm sóc tại nhà",
      icon: "🏥",
      status: "Mở rộng",
      link: "https://english.luatvietnam.vn/legal-news/law-revising-the-law-on-health-insurance-4729-102030-article.html",
    },
  ]

  const socialWelfareItems = [
    {
      icon: "🏠",
      title: "Nhà ở xã hội",
      description: "Các chương trình hỗ trợ nhà ở cho người thu nhập thấp",
    },
    {
      icon: "💰",
      title: "Hỗ trợ thu nhập",
      description: "Chính sách trợ cấp cho các nhóm dễ bị tổn thương",
    },
    {
      icon: "📉",
      title: "Giảm nghèo đa chiều",
      description: "Mục tiêu giảm xuống dưới 3%",
    },
  ]

  const genderEquality = [
    {
      aspect: "Lãnh đạo nữ",
      progress: "35%",
      description: "Tỷ lệ phụ nữ trong vị trí lãnh đạo",
      trend: "↑",
    },
    {
      aspect: "Khởi nghiệp",
      progress: "42%",
      description: "Thanh niên tham gia khởi nghiệp sáng tạo",
      trend: "↑",
    },
    {
      aspect: "Kinh tế số",
      progress: "65%",
      description: "Thanh niên tham gia lực lượng lao động số",
      trend: "↑",
    },
  ]

  const challenges = [
    "Bất bình đẳng vùng miền trong tiếp cận dịch vụ cơ bản",
    "Chất lượng giáo dục đại học chưa đồng đều",
    "Áp lực tài chính đối với hệ thống y tế khi dân số già hóa",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden vn-red">
      
      <style jsx>{keywordStyles}</style>

      {/* Hint Panel Component */}
      <SocietyHintPanel />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-vn-gradient-4 text-white p-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-500/30 rounded-full blur-2xl"></div>

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
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wide">Xã hội Việt Nam</span>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-linear-to-r from-yellow-300 via-white to-red-300 bg-clip-text text-transparent">
                  Xã Hội
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 mt-4 block">
                  An sinh, Y tế, Giáo dục & Chuyển đổi số
                </span>
              </h1>

              <div className="inline-flex my-6 items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-yellow-300 text-sm md:text-base font-semibold">2018 – Nay</span>
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
                Giai đoạn 2018–nay chứng kiến nhiều bước tiến rõ nét về chất lượng cuộc sống tại Việt Nam: mở rộng bảo
                hiểm y tế, chính sách giảm <Keyword word="nghèo" keyword="NGHÈO" hint="Vấn đề xã hội quan trọng cần giải quyết" inheritFontWeight={true} />, cải tiến giáo dục và chuyển đổi số
                trong dịch vụ công.
              </motion.p>
            </motion.div>
          </AnimatedItem>
        </motion.div>
      </section>

      {/* Y tế & Phúc lợi */}
      <AnimatedSection className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Y tế &
                <span className="bg-linear-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
                  {" "}
                  Phúc lợi
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Những tiến bộ vượt bậc trong hệ thống chăm sóc sức khỏe với{" "}
                <Keyword word="mạng lưới y tế" keyword="MẠNG LƯỚI Y TẾ" hint="Hệ thống cơ sở y tế toàn quốc" /> không ngừng được cải tiến
              </p>
            </div>
          </AnimatedItem>

          {/* Healthcare Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {healthcareStats.map((stat, index) => (
              <AnimatedItem key={stat.label} variants={slideInLeft}>
                <motion.div
                  className="bg-linear-to-br from-muted to-accent rounded-3xl p-8 text-center border border-border shadow-xl"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className={`text-5xl font-black ${stat.color} mb-4`}>{stat.value}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                  <div className="mt-4 text-2xl text-chart-2">{stat.trend}</div>
                  {stat.link && (
                    <motion.a
                      href={stat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-chart-1 text-sm font-semibold mt-4 hover:text-chart-3 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Chi tiết</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  )}
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedItem variants={slideInLeft}>
              <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.05 }}>
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/healthcare-system.jpg"
                    alt="Hệ thống y tế Việt Nam"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="font-semibold text-foreground">BHYT Toàn dân</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={slideInRight}>
              <div className="space-y-6">
                <motion.div className="bg-card rounded-2xl p-6 shadow-lg border border-border" whileHover={{ y: -3 }}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-chart-1">Mở rộng BHYT</h3>
                    <motion.a
                      href="https://vss.gov.vn/english/news/Pages/vietnam-social-security.aspx?CateID=198&ItemID=12528"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chart-1 hover:text-chart-3 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      Xem thêm
                    </motion.a>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Việc mở rộng BHYT giúp người dân — đặc biệt nhóm nghèo, vùng sâu vùng xa — tiếp cận chăm sóc sức
                    khỏe tốt hơn và giảm gánh nặng chi phí y tế. Hệ thống mạng lưới y tế được mở rộng và nâng cấp toàn diện.
                  </p>
                </motion.div>

                <motion.div className="bg-card rounded-2xl p-6 shadow-lg border border-border" whileHover={{ y: -3 }}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-chart-3">Ứng phó COVID-19</h3>
                    <motion.a
                      href="https://moh.gov.vn/tin-tong-hop/-/asset_publisher/k206Q9qkZOqn/content/chu-ong-ung-pho-voi-dich-covid-19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chart-3 hover:text-chart-1 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      Xem thêm
                    </motion.a>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Triển khai chiến dịch tiêm chủng nhanh, cách ly và điều trị rộng khắp; áp dụng công nghệ số trong
                    quản lý dịch và chăm sóc sức khỏe. Mạng lưới y tế đã chứng tỏ hiệu quả trong việc ứng phó với đại dịch.
                  </p>
                </motion.div>

                <motion.div className="bg-card rounded-2xl p-6 shadow-lg border border-border" whileHover={{ y: -3 }}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-chart-2">Cải cách Luật BHYT 2024</h3>
                    <motion.a
                      href="https://english.luatvietnam.vn/legal-news/law-revising-the-law-on-health-insurance-4729-102030-article.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chart-2 hover:text-chart-3 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      Xem thêm
                    </motion.a>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Cho phép người tham gia đăng ký khám chữa bệnh tại bất cứ cơ sở y tế tuyến cơ sở nào trên toàn quốc,
                    không lệ thuộc nơi đăng ký hộ khẩu. Điều này giúp tối ưu hóa mạng lưới y tế hiện có.
                  </p>
                </motion.div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Giáo dục & Đào tạo */}
      <AnimatedSection className="py-20 px-4 bg-vn-gradient-1 text-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Giáo dục &
                <span className="bg-linear-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
                  {" "}
                  Đào tạo
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Chuyển đổi số giúp nâng cao hiệu quả quản lý trong lĩnh vực{" "}
                <Keyword word="hành chính" keyword="HÀNH CHÍNH" hint="Hệ thống quản lý nhà nước và dịch vụ công" /> giáo dục
              </p>
            </div>
          </AnimatedItem>

          {/* Education Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {educationStats.map((stat, index) => (
              <AnimatedItem key={stat.label} variants={fadeInUp}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-white/20"
                  whileHover={{ y: -8, rotate: index === 1 ? 2 : 0 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black text-yellow-300 mb-2">{stat.value}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-white/80 mb-4">{stat.description}</p>
                  {stat.link && (
                    <motion.a
                      href={stat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-300 text-sm font-semibold hover:text-yellow-200 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Xem thêm</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  )}
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedItem variants={slideInLeft}>
              <div className="space-y-6">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-yellow-300">Đổi mới chương trình</h3>
                    <motion.a
                      href="https://nhandan.vn/hanh-trinh-thay-doi-phuong-phap-day-va-hoc-post880922.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-300 hover:text-yellow-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      Xem thêm
                    </motion.a>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    Việt Nam tiếp tục cải cách chương trình giáo dục phổ thông, thay đổi phương pháp dạy-học, tăng cường
                    ứng dụng công nghệ, chuẩn bị cho chuyển đổi số trong giáo dục. Các thủ tục hành chính được đơn giản hóa đáng kể.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-yellow-300">Học trực tuyến & Chuyển đổi số</h3>
                    <motion.a
                      href="https://vietnamnet.vn/en/vietnam-becomes-second-largest-global-user-of-free-online-learning-platforms-2370118.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-300 hover:text-yellow-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      Xem thêm
                    </motion.a>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    Thị trường giáo dục trực tuyến tại Việt Nam tăng trưởng mạnh — năm 2024 ghi nhận hơn 204 triệu phút
                    học trên nền tảng miễn phí toàn cầu. Công tác hành chính trong giáo dục được số hóa toàn diện.
                  </p>
                </motion.div>
              </div>
            </AnimatedItem>

            <AnimatedItem variants={slideInRight}>
              <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.05 }}>
                <div className="relative h-80 w-full">
                  <Image src="/images/digital-education.jpg" alt="Giáo dục số Việt Nam" fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="font-semibold text-foreground">Top 10 Toàn cầu</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* An sinh & Giảm nghèo */}
      <AnimatedSection className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                An sinh &
                <span className="bg-linear-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
                  {" "}
                  Giảm nghèo
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Các chương trình hỗ trợ toàn diện cho các nhóm dễ bị tổn thương trong xã hội
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {socialWelfareItems.map((item, index) => (
              <AnimatedItem key={item.title} variants={fadeInUp}>
                <motion.div
                  className="bg-card rounded-3xl p-8 text-center shadow-xl border border-border"
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="bg-linear-to-r from-chart-1 to-chart-2 rounded-3xl p-8 text-white text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg leading-relaxed">
                Việc mở rộng BHYT, cải thiện dịch vụ cơ sở và chính sách hỗ trợ xã hội giúp các nhóm yếu thế tiếp cận
                tốt hơn với các dịch vụ công. Chính phủ đặt mục tiêu giảm nghèo đa chiều xuống dưới 3%.
              </p>
              <motion.a
                href="https://nhandan.vn/giam-ngheo-giup-nguoi-dan-nang-cao-nang-luc-khoi-day-noi-luc-va-lan-toa-gia-tri-ben-vung-trong-cong-dong-post918622.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-white font-semibold hover:text-yellow-200 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Tìm hiểu thêm về chương trình giảm nghèo</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Bình đẳng giới & Vai trò thanh niên */}
      <AnimatedSection className="py-20 px-4 bg-vn-gradient-3 text-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Bình đẳng giới &
                <span className="bg-linear-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
                  {" "}
                  Vai trò thanh niên
                </span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {genderEquality.map((item, index) => (
              <AnimatedItem key={item.aspect} variants={fadeInUp}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-white/20"
                  whileHover={{ y: -8 }}
                >
                  <div className="text-3xl font-black text-yellow-300 mb-2">{item.progress}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.aspect}</h3>
                  <p className="text-white/80 mb-3">{item.description}</p>
                  <div className="text-2xl text-green-400">{item.trend}</div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg text-white/90 text-center leading-relaxed mb-4">
                Các chính sách thúc đẩy bình đẳng giới trong lao động, nâng cao vị trí lãnh đạo của phụ nữ và khuyến
                khích thanh niên tham gia khởi nghiệp và đổi mới sáng tạo.
              </p>
              <p className="text-lg text-yellow-300 text-center font-semibold">
                Thanh niên trở thành lực lượng chủ chốt trong nền kinh tế số, góp phần hình thành văn hóa đổi mới.
              </p>
              <motion.a
                href="https://molisa.gov.vn/baiviet/231336?tintucID=231336"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-yellow-300 font-semibold hover:text-yellow-200 transition-colors justify-center w-full"
                whileHover={{ x: 5 }}
              >
                <span>Khám phá chính sách bình đẳng giới</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Chuyển đổi số & Hành chính công */}
      <AnimatedSection className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Chuyển đổi số &
                <span className="bg-linear-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
                  {" "}
                  Hành chính công
                </span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalTransformation.map((item, index) => (
              <AnimatedItem key={item.title} variants={fadeInUp}>
                <motion.div
                  className="group relative bg-linear-to-br from-muted to-accent rounded-3xl p-8 shadow-xl border border-border overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-chart-1 text-white rounded-full text-sm font-semibold">
                        {item.status}
                      </div>
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-chart-1 hover:text-chart-3 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        Xem thêm
                      </motion.a>
                    </div>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-chart-1/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-chart-2/10 rounded-full translate-y-10 -translate-x-10"></div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="mt-12 p-8 bg-linear-to-r from-chart-1 to-chart-2 rounded-3xl text-white text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xl font-semibold">
                Dịch vụ công trực tuyến giúp rút ngắn thủ tục hành chính, tăng minh bạch và thuận tiện cho người dân và doanh
                nghiệp
              </p>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Thách thức & Kết luận */}
      <AnimatedSection className="py-20 px-4 bg-vn-gradient-dark text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Thách thức */}
            <AnimatedItem variants={slideInLeft}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 text-center">Thách Thức</h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.li
                      key={challenge}
                      className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                      <span className="text-white/90 font-medium">{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedItem>

            {/* Kết luận */}
            <AnimatedItem variants={slideInRight}>
              <motion.div
                className="bg-linear-to-br from-chart-1 to-chart-2 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Kết Luận</h3>
                  <p className="text-lg leading-relaxed text-center mb-6">
                    Thành tựu xã hội sau 2018 là rõ rệt: chất lượng y tế, giáo dục và an sinh được cải thiện đáng kể.
                    Tuy nhiên, việc đảm bảo <strong>tiếp cận công bằng</strong> dịch vụ và{" "}
                    <strong>nâng cao chất lượng</strong>
                    vẫn là bài toán chính sách cần được tiếp tục giải quyết.
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
            className="bg-linear-to-r from-yellow-500 to-red-500 text-white p-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3 group"
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