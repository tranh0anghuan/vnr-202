// app/statistics/page.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Animation variants với easing hợp lệ
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Animated component wrapper
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  );
}

function AnimatedItem({
  children,
  variants = itemVariants,
  className = "",
}: {
  children: React.ReactNode;
  variants?: any;
  className?: string;
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export default function StatisticsPage() {
  const statisticsData = {
    gdp: {
      title: "Tăng trưởng GDP theo năm (2018-2025)",
      description:
        "Đường biểu diễn mức tăng trưởng GDP với các biến cố lớn như COVID-19 (2020), phục hồi (2021-2024) và dự báo 2025",
      data: [
        { year: 2018, growth: 7.08, event: "Thúc đẩy cải cách" },
        { year: 2019, growth: 7.02, event: "Ký EVFTA" },
        { year: 2020, growth: 2.91, event: "COVID-19" },
        { year: 2021, growth: 2.58, event: "Phục hồi" },
        { year: 2022, growth: 8.12, event: "Tăng trưởng mạnh" },
        { year: 2023, growth: 5.05, event: "Ổn định" },
        { year: 2024, growth: 7.09, event: "Dự báo" },
        { year: 2025, growth: 6.9, event: "Dự báo" },
      ],
      sources: [
        "https://www.macrotrends.net/global-metrics/countries/vnm/vietnam/gdp-growth-rate",
        "https://www.nso.gov.vn/en/highlight/2025/02/socio-economic-situation-in-the-fourth-quarter-and-2024/",
      ],
    },
    exports: {
      title: "Cơ cấu xuất khẩu theo nhóm hàng",
      description: "Phân chia xuất khẩu của Việt Nam theo nhóm hàng chính",
      categories: [
        { name: "Điện tử & Linh kiện", value: 35, color: "bg-red-500" },
        { name: "Dệt may & Giày dép", value: 25, color: "bg-yellow-500" },
        { name: "Nông sản & Thủy sản", value: 15, color: "bg-green-500" },
        { name: "Máy móc & Thiết bị", value: 12, color: "bg-blue-500" },
        { name: "Gỗ & Sản phẩm gỗ", value: 8, color: "bg-purple-500" },
        { name: "Khác", value: 5, color: "bg-gray-500" },
      ],
      total: "405 tỷ USD (2024)",
      growth: "14%/năm",
      sources: [
        "https://www.macrotrends.net/global-metrics/countries/vnm/vietnam/gdp-growth-rate",
      ],
    },
    fdi: {
      title: "FDI theo vùng & ngành",
      description: "Vốn FDI đăng ký theo ngành và phân bổ theo vùng miền",
      sectors: [
        { name: "Chế tạo & Xử lý", value: 69.3, color: "bg-red-500" },
        { name: "Bất động sản", value: 12.5, color: "bg-yellow-500" },
        { name: "Dịch vụ tài chính", value: 8.2, color: "bg-blue-500" },
        { name: "Nông nghiệp", value: 4.5, color: "bg-green-500" },
        { name: "Khác", value: 5.5, color: "bg-gray-500" },
      ],
      regions: [
        { name: "Miền Bắc", value: 35, color: "bg-red-500" },
        { name: "Miền Nam", value: 45, color: "bg-yellow-500" },
        { name: "Miền Trung", value: 20, color: "bg-blue-500" },
      ],
      sources: [
        "https://industrial.savills.com.vn/2024/02/foreign-direct-investment-in-vietnam-an-overview/",
      ],
    },
    health: {
      title: "Tỉ lệ BHYT & Nghèo đa chiều",
      description: "Bao phủ bảo hiểm y tế và giảm tỉ lệ nghèo đa chiều",
      healthInsurance: [
        { year: 2018, coverage: 86.4 },
        { year: 2019, coverage: 88.2 },
        { year: 2020, coverage: 90.1 },
        { year: 2021, coverage: 91.5 },
        { year: 2022, coverage: 93.2 },
        { year: 2023, coverage: 95.1 },
        { year: 2024, coverage: 96.1 },
        { year: 2025, coverage: 96.46 },
      ],
      poverty: [
        { year: 2018, rate: 7.1 },
        { year: 2019, rate: 6.7 },
        { year: 2020, rate: 5.2 },
        { year: 2021, rate: 4.4 },
        { year: 2022, rate: 3.6 },
        { year: 2023, rate: 2.9 },
        { year: 2024, rate: 2.4 },
      ],
      sources: [
        "https://vss.gov.vn/english/news/Pages/vietnam-social-security.aspx?CateID=0&ItemID=12689",
      ],
    },
    tourism: {
      title: "Du lịch quốc tế (khách quốc tế / năm)",
      description: "Số lượng khách quốc tế đến Việt Nam từ 2018 đến nay",
      data: [
        { year: 2018, visitors: 15.5, event: "Tăng trưởng ổn định" },
        { year: 2019, visitors: 18.0, event: "Kỷ lục mới" },
        { year: 2020, visitors: 3.8, event: "COVID-19" },
        { year: 2021, visitors: 0.2, event: "Đóng cửa" },
        { year: 2022, visitors: 3.6, event: "Mở cửa lại" },
        { year: 2023, visitors: 12.6, event: "Phục hồi" },
        { year: 2024, visitors: 18.0, event: "Về mức trước dịch" },
      ],
      sources: ["https://www.nso.gov.vn/en/homepage/"],
    },
  };

  return (
    <div className="min-h-screen bg-vn-gradient-1 text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-vn-gradient-4 text-white p-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-300/30 rounded-full blur-lg"></div>

        {/* Animated floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-6 h-6 bg-yellow-300 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-red-400 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <AnimatedItem variants={itemVariants}>
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                  Thống kê & Infographic
                </span>
              </h1>
              <div className="inline-flex my-6 items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-yellow-300 text-sm md:text-base font-semibold">
                  Dữ liệu trực quan 2018 – Nay
                </span>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem variants={scaleUp}>
            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/10 shadow-2xl"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <motion.p
                  className="text-xl md:text-2xl leading-relaxed font-medium text-white/95 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Phần này tập trung trình bày{" "}
                  <span className="text-yellow-300 font-semibold">
                    dữ liệu chính thức
                  </span>{" "}
                  và{" "}
                  <span className="text-yellow-300 font-semibold">
                    đồ họa dễ hiểu
                  </span>{" "}
                  về GDP theo năm, xuất khẩu theo ngành, FDI theo vùng, tỉ lệ
                  BHYT, du lịch, giáo dục.
                </motion.p>

                <motion.div
                  className="pt-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-lg text-white/80 leading-relaxed text-center">
                    Người dùng có thể tải infographic hoặc dữ liệu để phục vụ{" "}
                    <span className="text-yellow-200 font-medium">
                      học tập và nghiên cứu
                    </span>
                    . Mục tiêu là giúp dễ dàng tiếp cận thông tin, cung cấp nền
                    tảng số liệu cho việc giảng dạy, học tập và phân tích xu
                    hướng phát triển của đất nước.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedItem>

          {/* Slogan */}
          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="mt-12 pb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="inline-flex flex-col items-center">
                {/* Decorative lines */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-red-400"></div>
                </div>

                <div className="text-center">
                  <motion.span
                    className="text-4xl md:text-5xl font-black"
                    animate={{
                      backgroundPosition: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      background:
                        "linear-gradient(45deg, #fbbf24, #f59e0b, #dc2626, #b91c1c)",
                      backgroundSize: "300% 300%",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Dữ liệu — Minh bạch.
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </AnimatedItem>
        </motion.div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
      </section>

      {/* GDP Growth Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-red-50/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-red-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Kinh tế vĩ mô
                </span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {statisticsData.gdp.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {statisticsData.gdp.description}
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedItem variants={slideInLeft}>
              <motion.div
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-red-100 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      className="text-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      📈
                    </motion.span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-red-700 transition-colors">
                    Biểu đồ tăng trưởng GDP
                  </h3>

                  {/* GDP Growth Chart Visualization */}
                  <div className="relative h-80 bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-6 border border-red-200">
                    <div className="absolute inset-0 flex items-end justify-between px-6 pb-6">
                      {statisticsData.gdp.data.map((item, index) => (
                        <div
                          key={item.year}
                          className="flex flex-col items-center"
                        >
                          <motion.div
                            className={`w-8 rounded-t-lg shadow-lg ${
                              item.year === 2020
                                ? "bg-red-400"
                                : item.year >= 2021
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }`}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${item.growth * 8}px` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                          <span className="text-sm font-semibold mt-2">
                            {item.year}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.growth}%
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Chart grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      {[0, 25, 50, 75, 100].map((line) => (
                        <div key={line} className="border-t border-red-100" />
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-4 mt-6 justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded shadow"></div>
                      <span className="text-sm">Tăng trưởng ổn định</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-400 rounded shadow"></div>
                      <span className="text-sm">Ảnh hưởng COVID-19</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded shadow"></div>
                      <span className="text-sm">Phục hồi & Tăng trưởng</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={slideInRight}>
              <div className="space-y-6">
                <motion.div
                  className="group bg-white rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    Điểm nổi bật
                  </h4>
                  <ul className="space-y-3">
                    {statisticsData.gdp.data.map((item) => (
                      <motion.li
                        key={item.year}
                        className="flex items-center gap-3 p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <div
                          className={`w-3 h-3 rounded-full shadow ${
                            item.year === 2020
                              ? "bg-red-500"
                              : item.year >= 2021
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        />
                        <div>
                          <span className="font-semibold">{item.year}: </span>
                          <span>
                            {item.growth}% - {item.event}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="group bg-red-50 rounded-2xl p-6 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    Nguồn dữ liệu
                  </h4>
                  <div className="space-y-2">
                    {statisticsData.gdp.sources.map((source, index) => (
                      <motion.a
                        key={index}
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link block text-blue-600 hover:text-blue-800 text-sm transition-colors p-2 rounded-lg hover:bg-white"
                        whileHover={{ x: 5 }}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-red-500">📊</span>
                          <span className="group-hover/link:underline">
                            {source}
                          </span>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Export Structure Section */}
      <AnimatedSection className="py-20 px-4 bg-vn-gradient-2 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">
                  Xuất khẩu
                </span>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {statisticsData.exports.title}
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {statisticsData.exports.description}
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedItem variants={slideInLeft}>
              <motion.div
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-yellow-300 mb-6 group-hover:text-yellow-200 transition-colors">
                    Cơ cấu xuất khẩu 2024
                  </h3>

                  {/* Pie Chart Visualization */}
                  <div className="relative h-80 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {statisticsData.exports.categories.map(
                        (category, index) => {
                          const startAngle = statisticsData.exports.categories
                            .slice(0, index)
                            .reduce(
                              (acc, cat) => acc + (cat.value / 100) * 360,
                              0
                            );
                          const angle = (category.value / 100) * 360;

                          return (
                            <motion.div
                              key={category.name}
                              className="absolute inset-0 rounded-full shadow-2xl"
                              style={{
                                clipPath: `conic-gradient(from ${startAngle}deg, ${category.color} 0deg, ${category.color} ${angle}deg, transparent ${angle}deg)`,
                              }}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          );
                        }
                      )}

                      {/* Center circle */}
                      <div className="absolute inset-0 m-auto w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/20">
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold">2024</div>
                          <div className="text-sm text-white/70">
                            Tổng xuất khẩu
                          </div>
                          <div className="text-lg font-semibold text-yellow-300">
                            {statisticsData.exports.total}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-center mt-6">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-yellow-300 font-semibold">
                        📈 Tăng trưởng: {statisticsData.exports.growth}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={slideInRight}>
              <div className="space-y-6">
                <motion.div
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-yellow-300 mb-4">
                    Phân loại ngành hàng
                  </h4>
                  <div className="space-y-4">
                    {statisticsData.exports.categories.map(
                      (category, index) => (
                        <motion.div
                          key={category.name}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded shadow ${category.color}`}
                            />
                            <span className="font-medium text-white">
                              {category.name}
                            </span>
                          </div>
                          <span className="font-semibold text-yellow-300">
                            {category.value}%
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>

                <motion.div
                  className="group bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">
                    Nguồn dữ liệu
                  </h4>
                  <div className="space-y-2">
                    {statisticsData.exports.sources.map((source, index) => (
                      <motion.a
                        key={index}
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link block text-yellow-200 hover:text-yellow-100 text-sm transition-colors p-2 rounded-lg hover:bg-white/5"
                        whileHover={{ x: 5 }}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-yellow-400">📊</span>
                          <span className="group-hover/link:underline">
                            {source}
                          </span>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* FDI Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-blue-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Đầu tư nước ngoài
                </span>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {statisticsData.fdi.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {statisticsData.fdi.description}
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedItem variants={slideInLeft}>
              <motion.div
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      className="text-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      💼
                    </motion.span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors">
                    FDI theo ngành (2023)
                  </h3>

                  {/* Sector Distribution */}
                  <div className="space-y-4 mb-8">
                    {statisticsData.fdi.sectors.map((sector, index) => (
                      <motion.div
                        key={sector.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{sector.name}</span>
                          <span className="font-semibold">{sector.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            className={`h-3 rounded-full shadow ${sector.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${sector.value}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center p-4 bg-blue-100 rounded-2xl border border-blue-200">
                    <p className="text-lg font-semibold text-blue-800">
                      Chế tạo & Xử lý chiếm 69.3% tổng vốn FDI đăng ký
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={slideInRight}>
              <motion.div
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-red-100 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{
                      rotate: [0, 5, -5, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      className="text-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      🗺️
                    </motion.span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-red-700 transition-colors">
                    Phân bổ FDI theo vùng
                  </h3>

                  {/* Regional Distribution */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {statisticsData.fdi.regions.map((region, index) => (
                      <motion.div
                        key={region.name}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="relative h-40 flex items-end justify-center mb-4">
                          <motion.div
                            className={`w-16 rounded-t-lg shadow-lg ${region.color} mx-auto`}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${region.value * 3}px` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-primary">
                            {region.name}
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {region.value}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center p-4 bg-red-100 rounded-2xl border border-red-200">
                    <p className="text-lg font-semibold text-red-800">
                      Miền Nam thu hút 45% tổng vốn FDI
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          </div>

          {/* Sources */}
          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-200 max-w-2xl mx-auto shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-semibold text-primary mb-3 text-center">
                Nguồn dữ liệu
              </h4>
              <div className="space-y-2 text-center">
                {statisticsData.fdi.sources.map((source, index) => (
                  <motion.a
                    key={index}
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block text-blue-600 hover:text-blue-800 text-sm transition-colors p-2 rounded-lg hover:bg-white"
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <span className="text-blue-500">📊</span>
                      <span className="group-hover/link:underline">
                        {source}
                      </span>
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Health & Poverty Section */}
      <AnimatedSection className="py-20 px-4 bg-vn-gradient-3 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
                  An sinh xã hội
                </span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {statisticsData.health.title}
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {statisticsData.health.description}
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedItem variants={slideInLeft}>
              <motion.div
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-green-300 mb-6 group-hover:text-green-200 transition-colors">
                    Tỉ lệ bao phủ BHYT (%)
                  </h3>

                  {/* Health Insurance Coverage */}
                  <div className="space-y-4">
                    {statisticsData.health.healthInsurance.map(
                      (item, index) => (
                        <motion.div
                          key={item.year}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="font-semibold text-white">
                            {item.year}
                          </span>
                          <div className="flex items-center gap-4">
                            <div className="w-32 bg-white/20 rounded-full h-3">
                              <motion.div
                                className="h-3 bg-green-500 rounded-full shadow"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.coverage}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                              />
                            </div>
                            <span className="font-bold text-green-300 w-12">
                              {item.coverage}%
                            </span>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                  <div className="mt-6 text-center p-4 bg-green-500/20 backdrop-blur-sm rounded-2xl border border-green-400/30">
                    <p className="text-lg font-semibold text-green-300">
                      Đến 5/2025: 96.46% dân số được bao phủ BHYT
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={slideInRight}>
              <motion.div
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-red-300 mb-6 group-hover:text-red-200 transition-colors">
                    Tỉ lệ nghèo đa chiều (%)
                  </h3>

                  {/* Poverty Rate */}
                  <div className="space-y-4">
                    {statisticsData.health.poverty.map((item, index) => (
                      <motion.div
                        key={item.year}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="font-semibold text-white">
                          {item.year}
                        </span>
                        <div className="flex items-center gap-4">
                          <div className="w-32 bg-white/20 rounded-full h-3">
                            <motion.div
                              className="h-3 bg-red-500 rounded-full shadow"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.rate * 10}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="font-bold text-red-300 w-12">
                            {item.rate}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 text-center p-4 bg-red-500/20 backdrop-blur-sm rounded-2xl border border-red-400/30">
                    <p className="text-lg font-semibold text-red-300">
                      Giảm từ 7.1% (2018) xuống 2.4% (2024)
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          </div>

          {/* Sources */}
          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="mt-12 bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 max-w-2xl mx-auto shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-semibold text-green-300 mb-3 text-center">
                Nguồn dữ liệu
              </h4>
              <div className="space-y-2 text-center">
                {statisticsData.health.sources.map((source, index) => (
                  <motion.a
                    key={index}
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block text-green-200 hover:text-green-100 text-sm transition-colors p-2 rounded-lg hover:bg-white/5"
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <span className="text-green-400">📊</span>
                      <span className="group-hover/link:underline">
                        {source}
                      </span>
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Tourism Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-purple-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Du lịch
                </span>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {statisticsData.tourism.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {statisticsData.tourism.description}
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem variants={fadeInUp}>
            <motion.div
              className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-purple-100 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="p-8">
                {/* Icon Container */}
                <motion.div
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="text-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    ✈️
                  </motion.span>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors">
                  Du lịch quốc tế Việt Nam
                </h3>

                {/* Tourism Chart */}
                <div className="relative h-96 bg-gradient-to-br from-purple-50 to-red-50 rounded-2xl p-6 border border-purple-200">
                  <div className="absolute inset-0 flex items-end justify-between px-6 pb-8">
                    {statisticsData.tourism.data.map((item, index) => (
                      <div
                        key={item.year}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          className={`w-10 rounded-t-lg shadow-lg ${
                            item.year === 2020 || item.year === 2021
                              ? "bg-red-400"
                              : item.year >= 2022
                              ? "bg-green-500"
                              : "bg-purple-500"
                          }`}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.visitors * 1.5}px` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                        <span className="text-sm font-semibold mt-2">
                          {item.year}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.visitors}M
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Chart grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0, 25, 50, 75, 100].map((line) => (
                      <div key={line} className="border-t border-purple-100" />
                    ))}
                  </div>
                </div>

                {/* Legend and Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">
                      Giai đoạn chính
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-500 rounded shadow"></div>
                        <span className="text-sm">
                          Tăng trưởng ổn định (2018-2019)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded shadow"></div>
                        <span className="text-sm">
                          Ảnh hưởng COVID-19 (2020-2021)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded shadow"></div>
                        <span className="text-sm">Phục hồi (2022-2024)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">
                      Thông tin nổi bật
                    </h4>
                    <div className="space-y-2 text-sm">
                      {statisticsData.tourism.data.map((item) => (
                        <div key={item.year} className="flex justify-between">
                          <span className="font-medium">{item.year}:</span>
                          <span className="text-muted-foreground">
                            {item.event}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sources */}
                <motion.div
                  className="mt-6 bg-purple-50 rounded-2xl p-4 border border-purple-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-semibold text-primary mb-2 text-center">
                    Nguồn dữ liệu
                  </h4>
                  <div className="space-y-1 text-center">
                    {statisticsData.tourism.sources.map((source, index) => (
                      <motion.a
                        key={index}
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link block text-blue-600 hover:text-blue-800 text-sm transition-colors p-2 rounded-lg hover:bg-white"
                        whileHover={{ x: 5 }}
                      >
                        <span className="flex items-center gap-2 justify-center">
                          <span className="text-purple-500">📊</span>
                          <span className="group-hover/link:underline">
                            {source}
                          </span>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
