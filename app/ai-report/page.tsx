// app/ai-report/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Animation variants
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

const fadeInUp: Variants = {
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

export default function AIReportPage() {
  const aiTools = [
    {
      name: "Google Gemini",
      category: "Nghiên cứu",
      description: "Chatbox trên website trả lời câu hỏi về lịch sử Đảng",
      image: "/media/image1.png",
      color: "from-blue-500 to-purple-600",
      icon: "🤖",
      features: [
        "Trả lời câu hỏi",
        "Hỗ trợ nghiên cứu",
        "Tương tác người dùng",
      ],
    },
    {
      name: "GitHub Copilot",
      category: "Phát triển",
      description: "Trợ lý lập trình gợi ý và viết code website",
      image: "/media/image3.png",
      color: "from-gray-700 to-gray-900",
      icon: "💻",
      features: ["Gợi ý code", "Tối ưu hiệu suất", "Hỗ trợ debugging"],
    },
    {
      name: "DeepSeek",
      category: "Phát triển",
      description: "Tư vấn kỹ thuật thiết kế cấu trúc website",
      image: "/images/y-te.jpg",
      color: "from-orange-500 to-red-500",
      icon: "🎯",
      features: ["Tư vấn kỹ thuật", "Thiết kế cấu trúc", "Giải quyết vấn đề"],
    },
    {
      name: "ChatGPT",
      category: "Nội dung",
      description: "Viết mô tả và tạo ý tưởng thiết kế",
      image: "/media/image5.png",
      color: "from-emerald-500 to-green-600",
      icon: "✨",
      features: ["Tạo nội dung", "Ý tưởng thiết kế", "Viết mô tả"],
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Nghiên cứu Tài liệu",
      description:
        "Sử dụng ChatGPT để tổ chức và phân tích tài liệu hành trình đổi mới của Việt Nam từ nhiều nguồn",
      tools: ["ChatGPT", "Google Gemini"],
      icon: "📖",
    },
    {
      step: 2,
      title: "Xây dựng Website",
      description:
        "Làm việc với GitHub Copilot, Claude, ChatGPT và Grok để thiết kế và phát triển",
      tools: ["GitHub Copilot", "DeepSeek", "ChatGPT"],
      icon: "🚀",
    },
    {
      step: 3,
      title: "Kiểm tra & Hoàn thiện",
      description:
        "Kiểm duyệt thông tin, đánh giá chất lượng website, chỉnh sửa và hoàn thiện",
      tools: ["Kiến thức nhóm", "Đánh giá chuyên môn"],
      icon: "✅",
    },
  ];

  const teamResponsibilities = [
    {
      title: "Kiểm duyệt thông tin",
      description:
        "Xác minh tính chính xác của mọi thông tin lịch sử do AI tạo ra",
      icon: "🔍",
    },
    {
      title: "Đánh giá chất lượng",
      description: "Kiểm tra giao diện, tính năng và trải nghiệm người dùng",
      icon: "⭐",
    },
    {
      title: "Chỉnh sửa & Hoàn thiện",
      description:
        "Bổ sung và sửa đổi những phần AI chưa đầy đủ hoặc chưa phù hợp",
      icon: "✏️",
    },
    {
      title: "Quyết định cuối cùng",
      description:
        "Đưa ra quyết định về nội dung, thiết kế và công nghệ sử dụng",
      icon: "🎯",
    },
  ];

  const benefits = [
    { metric: "60-70%", description: "Giảm thời gian làm việc", icon: "⏱️" },
    {
      metric: "Chatbox",
      description: "Tương tác thông minh với người dùng",
      icon: "💬",
    },
    { metric: "Tối ưu", description: "Website chất lượng cao", icon: "🚀" },
    { metric: "Học hỏi", description: "Tiếp cận công nghệ mới", icon: "🎓" },
  ];

  const limitations = [
    "Cần kiểm tra thông tin do AI có thể tạo thông tin không chính xác",
    "Thiếu sáng tạo - cần con người để tạo nét riêng",
    "Chưa thay thế được kiến thức chuyên môn để đánh giá",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-vn-gradient-4 text-white p-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>

        {/* Animated floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-6 h-6 bg-blue-300 rounded-full"
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
          className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full"
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                  BÁO CÁO
                </span>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 mt-4 block">
                  Sử dụng AI trong Dự án
                </span>
              </h1>
              <div className="inline-flex my-6 items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-blue-300 text-sm md:text-base font-semibold">
                  Việt Nam - Hành trình đổi mới và phát triển bền vững
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
              <div className="space-y-6">
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium text-white/95"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Báo cáo tổng hợp về việc sử dụng các công cụ AI trong quá
                  trình
                  <span className="text-blue-300 font-semibold">
                    {" "}
                    nghiên cứu và phát triển
                  </span>{" "}
                  website giới thiệu hành trình đổi mới của Việt Nam.
                </motion.p>

                <motion.div
                  className="pt-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    VNR202 - Nhóm 3 - Half_2 SE1737 • Ngày: 01/11/2025
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedItem>
        </motion.div>
      </section>

      {/* Project Info Section */}
      <AnimatedSection className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Thông tin
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Dự án
                </span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedItem variants={fadeInUp}>
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🌐</span>
                  </div>
                  Thông tin Chính
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-100">
                    <span className="text-purple-500 text-lg">⚙️</span>
                    <div>
                      <p className="font-semibold text-gray-700">Công nghệ:</p>
                      <p className="text-gray-600">Website Next.js</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-100">
                    <span className="text-green-500 text-lg">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-700">Chủ đề:</p>
                      <p className="text-gray-600">
                        Việt Nam hành trình đổi mới 2018 - nay
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={fadeInUp}>
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🤖</span>
                  </div>
                  Tổng quan AI
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    Sử dụng{" "}
                    <span className="font-semibold text-purple-600">
                      5 công cụ AI
                    </span>{" "}
                    khác nhau trong quá trình nghiên cứu và phát triển dự án.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="text-center p-3 bg-white rounded-xl border border-purple-100">
                      <div className="text-lg font-bold text-purple-600">1</div>
                      <div className="text-xs text-purple-600">
                        Công cụ Nghiên cứu
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-xl border border-purple-100">
                      <div className="text-lg font-bold text-purple-600">1</div>
                      <div className="text-xs text-purple-600">
                        Công cụ Phát triển
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-xl border border-purple-100">
                      <div className="text-lg font-bold text-purple-600">1</div>
                      <div className="text-xs text-purple-600">
                        Công cụ Nội dung
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-xl border border-purple-100">
                      <div className="text-lg font-bold text-purple-600">1</div>
                      <div className="text-xs text-purple-600">
                        Công cụ Hỗ trợ
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* AI Tools Section */}
      <AnimatedSection className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Công cụ
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  AI Đã Sử Dụng
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Khám phá các công cụ AI đã được sử dụng trong quá trình phát
                triển dự án
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {aiTools.map((tool, index) => (
              <AnimatedItem key={tool.name} variants={fadeInUp}>
                <motion.div
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Header with gradient */}
                  <div
                    className={`bg-gradient-to-r ${tool.color} p-6 relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <span className="text-xl">{tool.icon}</span>
                        </div>
                        <div>
                          <span className="text-white/80 text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                            {tool.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Workflow Section */}
      <AnimatedSection className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quy trình
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Làm việc
                </span>
              </h2>
            </div>
          </AnimatedItem>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-400 to-blue-400 h-full shadow-lg"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                >
                  {/* Step marker */}
                  <motion.div
                    className="relative flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center z-10 shadow-2xl border-2 border-white"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <div className="text-center">
                      <span className="text-2xl">{step.icon}</span>
                      <div className="text-xs text-white font-bold mt-1">
                        Bước {step.step}
                      </div>
                    </div>
                  </motion.div>

                  {/* Connecting line */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0
                        ? "from-green-400/50 to-green-400 left-20"
                        : "from-blue-400 to-blue-400/50 right-20"
                    }`}
                  />

                  {/* Content card */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "ml-12" : "mr-12"}`}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100 shadow-lg"
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-green-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Responsibilities Section */}
      <AnimatedSection className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Trách nhiệm
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {" "}
                  Của Nhóm
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                AI chỉ là công cụ hỗ trợ. Nhóm chịu trách nhiệm chính về chất
                lượng sản phẩm
              </p>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamResponsibilities.map((responsibility, index) => (
              <AnimatedItem key={responsibility.title} variants={fadeInUp}>
                <motion.div
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-orange-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">
                        {responsibility.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {responsibility.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {responsibility.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits & Limitations Section */}
      <AnimatedSection className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <AnimatedItem variants={fadeInUp}>
              <motion.div
                className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100 shadow-lg"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  Lợi ích khi sử dụng AI
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.metric}
                      className="text-center p-4 bg-white rounded-xl border border-emerald-100"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl font-bold text-emerald-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="text-sm text-gray-600">
                        {benefit.description}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-emerald-600">
                      AI là công cụ hỗ trợ tuyệt vời
                    </span>{" "}
                    giúp nhóm làm việc hiệu quả hơn và tạo ra sản phẩm chất
                    lượng.
                  </p>
                </div>
              </motion.div>
            </AnimatedItem>

            {/* Limitations */}
            <AnimatedItem variants={fadeInUp}>
              <motion.div
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100 shadow-lg"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">⚠️</span>
                  </div>
                  Hạn chế cần lưu ý
                </h3>

                <div className="space-y-4 mb-6">
                  {limitations.map((limitation, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl border border-amber-100"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{limitation}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="p-4 bg-amber-100/50 rounded-xl border border-amber-200">
                  <p className="text-amber-800 font-semibold text-center">
                    🎯 AI không thể thay thế con người trong việc đánh giá và
                    quyết định cuối cùng
                  </p>
                </div>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Conclusion Section */}
      <AnimatedSection className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedItem variants={scaleUp}>
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kết luận
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Qua quá trình thực hiện dự án, nhóm nhận thấy{" "}
                  <span className="font-semibold text-purple-600">
                    AI là công cụ hỗ trợ mạnh mẽ
                  </span>
                  giúp tăng tốc độ phát triển và nâng cao chất lượng sản phẩm.
                </p>

                <p>
                  Tuy nhiên,{" "}
                  <span className="font-semibold text-orange-600">
                    vai trò của con người vẫn là yếu tố quyết định
                  </span>
                  trong việc kiểm duyệt thông tin, đánh giá chất lượng và đưa ra
                  quyết định cuối cùng.
                </p>

                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white font-semibold mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>VNR202 - Nhóm 3 - Half_2 SE1737</span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
