// app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView, Variants, cubicBezier } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

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
      ease: [0.25, 0.46, 0.45, 0.94], // "easeOut" equivalent
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

// Hoặc sử dụng easing functions được định nghĩa sẵn
const easingFunctions = {
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
};

// Alternative: Sử dụng string easing hợp lệ
const slideInLeftAlt: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideInRightAlt: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

export default function HomePage() {
  const timelineEvents = [
    {
      year: 2018,
      title: "Thúc đẩy cải cách kinh tế, ký các hiệp định thương mại",
      description: "CPTPP có hiệu lực đầu năm 2019",
      links: [
        "https://www.vietnam-briefing.com/news/vietnam-free-trade-agreements-opportunities-for-your-business.html/?utm_source=chatgpt.com",
      ],
      image: "/images/timeline-2018.jpg",
      category: "Kinh tế",
    },
    {
      year: 2019,
      title: "Gia tăng FDI và mở rộng xuất khẩu sản phẩm công nghệ",
      description: "FDI thực hiện đạt 20.38 tỷ USD, ký EVFTA",
      links: [
        "https://vietnamlawmagazine.vn/vietnams-diplomacy-achievements-in-2019-16997.html?utm_source=chatgpt.com",
      ],
      image: "/images/timeline-2019.jpg",
      category: "Kinh tế",
    },
    {
      year: 2020,
      title: "Ứng phó COVID-19",
      description: "Triển khai biện pháp y tế và chính sách hỗ trợ kinh tế",
      links: [
        "https://www.tapchicongsan.org.vn/media-story/-/asset_publisher/V8hhp4dK31Gf/content/mot-so-co-che-chinh-sach-cap-thiet-nham-thuc-day-phat-trien-san-xuat-kinh-doanh-phuc-hoi-kinh-te-do-tac-dong-cua-dai-dich-covid-19",
      ],
      image: "/images/timeline-2020.jpg",
      category: "Xã hội",
    },
    {
      year: 2021,
      title: "Thúc đẩy chuyển đổi số trong dịch vụ công",
      description: "Triển khai chương trình chuyển đổi số quốc gia",
      links: [
        "https://vietnam.opendevelopmentmekong.net/topics/vietnam-digital-transformation-agenda/?utm_source=chatgpt.com",
      ],
      image: "/images/timeline-2021.jpg",
      category: "Công nghệ",
    },
    {
      year: 2022,
      title: "Khôi phục du lịch quốc tế, đẩy mạnh đầu tư hạ tầng",
      description: "Mở cửa lại du lịch quốc tế từ 15/3/2022",
      links: [
        "https://bvhttdl.gov.vn/2022-nganh-du-lich-the-gioi-hoi-sinh-sau-su-dinh-tre-boi-dai-dich-toan-cau-20221227185021814.htm#:~:text=H%E1%BB%93i%20sinh%20m%E1%BA%A1nh%20m%E1%BA%B5%2C,to%C3%A0n%20c%E1%BA%A7u%20trong%20n%C4%83m%20t%E1%BB%9Bi.",
      ],
      image: "/images/timeline-2022.jpg",
      category: "Du lịch",
    },
    {
      year: 2023,
      title: "Các dự án giao thông trọng điểm triển khai",
      description: "Sân bay Quốc tế Long Thành và các dự án cao tốc",
      links: [
        "https://baochinhphu.vn/khoi-cong-trai-tim-cua-san-bay-long-thanh-va-loi-hua-cua-chinh-phu-102230829113130396.htm",
      ],
      image: "/images/timeline-2023.jpg",
      category: "Hạ tầng",
    },
    {
      year: 2024,
      title: "Mở rộng các khu công nghiệp công nghệ cao và chính sách xanh",
      description: "Phát triển hạ tầng đồng bộ với bảo vệ môi trường",
      links: [
        "https://nhandan.vn/thuc-day-phat-trien-khu-cong-nghiep-thong-minh-ben-vung-post851473.html",
      ],
      image: "/images/timeline-2024.jpg",
      category: "Môi trường",
    },
    {
      year: 2025,
      title: "Tăng trưởng kinh tế mạnh mẽ và thu hút FDI kỷ lục",
      description: "Dự báo tăng trưởng 6.9%, FDI đạt 21.51 tỷ USD",
      links: [
        "https://en.vneconomy.vn/fdi-investments-reaches-21-51-billion-in-first-half-of-2025.htm?utm_source=chatgpt.com",
      ],
      image: "/images/timeline-2025.jpg",
      category: "Kinh tế",
    },
  ];

  const featuredNews = [
    {
      title:
        "Báo Chính phủ: Tăng trưởng của Việt Nam gây ấn tượng với giới đầu tư quốc tế",
      summary:
        "Việt Nam tiếp tục thu hút mạnh mẽ dòng vốn FDI với nhiều dự án quy mô lớn",
      image: "/media/image1.png",
      link: "https://baochinhphu.vn/tang-truong-cua-viet-nam-gay-an-tuong-voi-gioi-dau-tu-quoc-te-102251007100945146.htm",
    },
    {
      title:
        "Bộ Văn hóa, Thể thao và Du lịch: Bảo tồn và phát huy giá trị nghệ thuật truyền thống",
      summary: "Kết hợp hài hòa giữa bảo tồn di sản và sáng tạo đương đại",
      image: "/media/image3.png",
      link: "https://daibieunhandan.vn/bao-ton-va-phat-huy-gia-tri-nghe-thuat-truyen-thong-trong-boi-canh-phat-trien-kinh-te-thi-truong-va-hoi-nhap-quoc-te-10361093.html",
    },
  ];

  return (
    <div className="min-h-screen bg-vn-gradient-1 text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vn-gradient-4 text-white p-4">
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
          {/* Main Title */}
          <AnimatedItem variants={itemVariants}>
            <div className="">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                  Việt Nam
                </span>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 mt-4 block">
                  Hành trình đổi mới và phát triển bền vững
                </span>
              </h1>
              <div className="inline-flex my-6 items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-yellow-300 text-sm md:text-base font-semibold">
                  2018 – Nay
                </span>
              </div>
            </div>
          </AnimatedItem>

          {/* Content Card */}
          <AnimatedItem variants={scaleUp}>
            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-white/10 shadow-2xl"
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
                  className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium text-white/95"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Từ năm 2018 đến nay, Việt Nam trải qua quá trình{" "}
                  <span className="text-yellow-300 font-semibold">
                    chuyển mình mạnh mẽ
                  </span>{" "}
                  trên nhiều mặt: tăng trưởng kinh tế ổn định, hạ tầng đầu tư mở
                  rộng, văn hóa đan xen giữa truyền thống và sáng tạo, cùng
                  những tiến bộ xã hội đáng kể về y tế, giáo dục và an sinh.
                </motion.p>

                <motion.div
                  className="pt-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    Trang web này giới thiệu những{" "}
                    <span className="text-yellow-200 font-medium">
                      thành tựu nổi bật
                    </span>
                    ,{" "}
                    <span className="text-yellow-200 font-medium">
                      số liệu minh bạch
                    </span>{" "}
                    và{" "}
                    <span className="text-yellow-200 font-medium">
                      câu chuyện thực tế
                    </span>{" "}
                    để giúp học sinh, sinh viên và công chúng hiểu sâu hơn về
                    con đường đổi mới của đất nước.
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
                    className="text-5xl md:text-6xl font-black"
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
                    Việt Nam — Đổi mới.
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </AnimatedItem>
        </motion.div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
      </section>

      {/* Featured Sections */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-red-50/30">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
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
                  Thành Tựu Nổi Bật
                </span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Lĩnh vực
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Nổi bật
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Khám phá những bước tiến ấn tượng của Việt Nam qua các lĩnh vực
                then chốt
              </p>
            </div>
          </AnimatedItem>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Economy Card */}
            <AnimatedItem variants={slideInLeft}>
              <motion.div
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-red-100 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/ket-cau-ha-tang-duong-cao-toc.jpg"
                    alt="Hạ tầng kinh tế Việt Nam - Cầu cao tốc và khu công nghiệp"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Kinh tế
                  </div>

                  {/* Icon overlay */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-12"
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
                      💰
                    </motion.span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                    Kinh tế Phát triển
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    Tăng trưởng GDP ấn tượng, thu hút mạnh mẽ dòng vốn FDI,
                    chuyển dịch cơ cấu kinh tế và triển khai các dự án hạ tầng
                    chiến lược quy mô lớn.
                  </p>

                  {/* Stats Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-green-700">
                        +6.9% GDP
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 rounded-full">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-blue-700">
                        $21.5B FDI
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="https://baochinhphu.vn/tang-truong-cua-viet-nam-gay-an-tuong-voi-gioi-dau-tu-quoc-te-102251007100945146.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors group/btn"
                    >
                      <span>Khám phá thành tựu</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedItem>

            {/* Culture Card */}
            <AnimatedItem variants={fadeInUp}>
              <motion.div
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-yellow-100 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/le-hoi.jpg"
                    alt="Di sản văn hóa Việt Nam - Biểu diễn nghệ thuật truyền thống"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Văn hóa
                  </div>

                  {/* Icon overlay */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-xl">🎭</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-12"
                    whileHover={{
                      rotate: [0, 5, -5, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      className="text-xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      🎭
                    </motion.span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors">
                    Văn hóa Rực rỡ
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    Bảo tồn di sản văn hóa truyền thống, sáng tạo nghệ thuật
                    đương đại và tổ chức các sự kiện quốc tế thu hút đông đảo
                    công chúng.
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {[
                      "Di sản UNESCO",
                      "Nghệ thuật đương đại",
                      "Lễ hội quốc tế",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.div whileHover={{ x: 5 }}>
  <Link
    href="https://daibieunhandan.vn/bao-ton-va-phat-huy-gia-tri-nghe-thuat-truyen-thong-trong-boi-canh-phat-trien-kinh-te-thi-truong-va-hoi-nhap-quoc-te-10361093.html"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-all duration-300 group/btn"
  >
    <span>Khám phá di sản</span>
    <motion.span
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      →
    </motion.span>
  </Link>
</motion.div>

                </div>
              </motion.div>
            </AnimatedItem>

            {/* Society Card */}
            <AnimatedItem variants={slideInRight}>
              <motion.div
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-green-100 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/y-te.jpg"
                    alt="Phát triển xã hội Việt Nam - Hệ thống y tế và giáo dục"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Xã hội
                  </div>

                  {/* Icon overlay */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏥</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-12"
                    whileHover={{
                      scale: 1.1,
                      y: [0, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      className="text-xl"
                      animate={{
                        y: [0, -3, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4,
                      }}
                    >
                      👨‍👩‍👧‍👦
                    </motion.span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    Xã hội Đổi thay
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    Tiến bộ vượt bậc trong y tế, mở rộng bảo hiểm toàn dân, cải
                    cách giáo dục và hoàn thiện hệ thống an sinh xã hội.
                  </p>

                  {/* Progress Indicators */}
                  <div className="space-y-3 mb-6">
                    {[
                      {
                        label: "Bảo hiểm y tế",
                        value: 95,
                        color: "bg-green-500",
                      },
                      {
                        label: "Tiếp cận giáo dục",
                        value: 98,
                        color: "bg-blue-500",
                      },
                      {
                        label: "An sinh xã hội",
                        value: 90,
                        color: "bg-purple-500",
                      },
                    ].map((item, index) => (
                      <div key={item.label} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-semibold text-gray-700">
                            {item.value}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${item.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.div whileHover={{ x: 5 }}>
  <Link
    href="https://nhandan.vn/danh-ngan-sach-thuc-day-bao-hiem-y-te-toan-dan-post891435.html"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-all duration-300 group/btn"
  >
    <span>Xem tiến bộ</span>
    <motion.span
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      →
    </motion.span>
  </Link>
</motion.div>

                </div>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection className="py-20 px-4 bg-vn-gradient-2 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
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
                  Dòng thời gian
                </span>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Hành trình
                <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                  {" "}
                  Đổi mới
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Khám phá những cột mốc quan trọng trong hành trình phát triển
                của Việt Nam từ 2018 đến nay
              </p>
            </div>
          </AnimatedItem>

          {/* Timeline */}
          <div className="relative">
            {/* Animated Timeline line with gradient */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-yellow-400 via-red-500 to-yellow-400 h-full shadow-2xl"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-50"></div>
            </motion.div>

            {/* Timeline nodes with connecting lines */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={index % 2 === 0 ? slideInLeftAlt : slideInRightAlt}
                >
                  {/* Year marker with glow effect */}
                  <motion.div
                    className="relative flex-shrink-0 w-28 h-28 bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl flex items-center justify-center z-10 shadow-2xl border-2 border-white/20"
                    whileHover={{
                      scale: 1.15,
                      rotate: index % 2 === 0 ? 5 : -5,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-2 bg-white/10 rounded-xl"></div>

                    {/* Year text */}
                    <div className="relative text-center">
                      <motion.span
                        className="text-2xl font-black text-white block leading-none"
                        whileHover={{ scale: 1.1 }}
                      >
                        {event.year}
                      </motion.span>
                      <div className="w-8 h-0.5 bg-white/60 rounded-full mx-auto mt-1"></div>
                    </div>

                    {/* Decorative corner */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "-right-2 -top-2" : "-left-2 -top-2"
                      } w-6 h-6 bg-yellow-400 rounded-full shadow-lg`}
                    ></div>
                  </motion.div>

                  {/* Connecting line */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0
                        ? "from-yellow-400/50 to-yellow-400 left-28"
                        : "from-yellow-400 to-yellow-400/50 right-28"
                    }`}
                  ></div>

                  {/* Content card */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "ml-16" : "mr-16"}`}
                  >
                    <motion.div
                      className="group relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                      whileHover={{
                        scale: 1.03,
                        y: -5,
                        backgroundColor: "rgba(255,255,255,0.15)",
                      }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                          <Image
                            src={
                              event.image ||
                              `/images/timeline-${event.year}.jpg`
                            }
                            alt={`Sự kiện ${event.year} - ${event.title}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />

                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent"></div>

                          {/* Year badge on image */}
                          <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            {event.year}
                          </div>

                          {/* Category icon */}
                          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <span className="text-lg">
                              {event.category === "Kinh tế"
                                ? "📈"
                                : event.category === "Xã hội"
                                ? "🏥"
                                : event.category === "Công nghệ"
                                ? "💻"
                                : event.category === "Du lịch"
                                ? "✈️"
                                : event.category === "Hạ tầng"
                                ? "🏗️"
                                : event.category === "Môi trường"
                                ? "🌱"
                                : "🎨"}
                            </span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-6 md:p-8">
                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  event.category === "Kinh tế"
                                    ? "bg-green-400"
                                    : event.category === "Xã hội"
                                    ? "bg-blue-400"
                                    : event.category === "Công nghệ"
                                    ? "bg-purple-400"
                                    : event.category === "Du lịch"
                                    ? "bg-orange-400"
                                    : event.category === "Hạ tầng"
                                    ? "bg-indigo-400"
                                    : event.category === "Môi trường"
                                    ? "bg-emerald-400"
                                    : "bg-pink-400"
                                } shadow-lg`}
                              ></div>
                              <h3 className="text-2xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">
                                {event.title}
                              </h3>
                            </div>

                            <p className="text-white/90 text-lg leading-relaxed mb-6">
                              {event.description}
                            </p>

                            {/* Additional details based on year */}
                            <div className="mb-6">
                              {event.year === 2018 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>📄 Hiệp định CPTPP</span>
                                  <span>•</span>
                                  <span>🌏 Hội nhập quốc tế</span>
                                </div>
                              )}
                              {event.year === 2019 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>💼 $20.38B FDI</span>
                                  <span>•</span>
                                  <span>🇪🇺 EVFTA</span>
                                </div>
                              )}
                              {event.year === 2020 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>🦠 Ứng phó COVID</span>
                                  <span>•</span>
                                  <span>📊 Kích thích kinh tế</span>
                                </div>
                              )}
                              {event.year === 2021 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>💻 Chuyển đổi số</span>
                                  <span>•</span>
                                  <span>🏛️ Chính phủ số</span>
                                </div>
                              )}
                              {event.year === 2022 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>✈️ Mở cửa du lịch</span>
                                  <span>•</span>
                                  <span>🏗️ Đầu tư hạ tầng</span>
                                </div>
                              )}
                              {event.year === 2023 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>🛣️ Dự án giao thông</span>
                                  <span>•</span>
                                  <span>🏢 Long Thành Airport</span>
                                </div>
                              )}
                              {event.year === 2024 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>🏭 Công nghiệp xanh</span>
                                  <span>•</span>
                                  <span>🌱 Chính sách bền vững</span>
                                </div>
                              )}
                              {event.year === 2025 && (
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                  <span>📈 +6.9% GDP</span>
                                  <span>•</span>
                                  <span>💵 $21.5B FDI</span>
                                </div>
                              )}
                            </div>

                            {/* Action button với dropdown links */}
                            <motion.div
                              className="flex items-center gap-4"
                              whileHover={{ x: 5 }}
                            >
                              <div className="relative group/dropdown">
                                <motion.a
                                  href={event.links[0]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/btn relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 rounded-xl font-semibold text-white shadow-lg overflow-hidden inline-flex items-center gap-2"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {/* Button background effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                  <span className="relative">
                                    Khám phá chi tiết
                                  </span>
                                  <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                    }}
                                  >
                                    →
                                  </motion.span>
                                </motion.a>

                                {/* Dropdown menu for multiple links - FIXED POSITIONING */}
                                {event.links.length > 1 && (
                                  <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 z-50 transform origin-top">
                                    <div className="p-3">
                                      <p className="text-xs text-gray-600 px-2 py-1 border-b border-white/10 mb-2 font-medium">
                                        📚 Tài liệu tham khảo:
                                      </p>
                                      <div className="space-y-1 max-h-60 overflow-y-auto">
                                        {event.links
                                          .slice(1)
                                          .map((link, linkIndex) => (
                                            <motion.a
                                              key={linkIndex}
                                              href={link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 transition-all duration-200 group/link border border-transparent hover:border-red-100"
                                              whileHover={{ x: 3, scale: 1.02 }}
                                              initial={{ opacity: 0, y: 5 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{
                                                delay: linkIndex * 0.1,
                                              }}
                                            >
                                              <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                                              <span className="text-gray-700 text-sm font-medium group-hover/link:text-red-600 transition-colors flex-1 truncate">
                                                {linkIndex === 0
                                                  ? "Bài phân tích"
                                                  : linkIndex === 1
                                                  ? "Báo cáo chính thức"
                                                  : "Tài liệu bổ sung"}{" "}
                                                {linkIndex + 1}
                                              </span>
                                              <motion.span
                                                className="text-gray-400 group-hover/link:text-red-500 text-lg flex-shrink-0"
                                                whileHover={{ scale: 1.2 }}
                                              >
                                                ↗
                                              </motion.span>
                                            </motion.a>
                                          ))}
                                      </div>
                                    </div>

                                    {/* Source info */}
                                    <div className="border-t border-white/20 p-3 bg-white/50 rounded-b-xl">
                                      <p className="text-xs text-gray-500 text-center">
                                        Nguồn: Các cơ quan báo chí chính thống
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Link counter badge */}
                              {event.links.length > 1 && (
                                <motion.div
                                  className="px-3 py-1 bg-white/20 rounded-full border border-white/30 relative z-40"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <span className="text-xs text-white/90 font-medium flex items-center gap-1">
                                    <span>+{event.links.length - 1}</span>
                                    <span className="text-[10px]">
                                      tài liệu
                                    </span>
                                  </span>
                                </motion.div>
                              )}

                              {/* Category badge */}
                              <motion.div
                                className="px-3 py-1 bg-white/10 rounded-full border border-white/20 relative z-40"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                <span className="text-sm text-white/70 font-medium">
                                  {event.category}
                                </span>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Corner decoration */}
                      <div
                        className={`absolute ${
                          index % 2 === 0 ? "top-4 right-4" : "top-4 left-4"
                        } w-8 h-8 border-t-2 border-r-2 ${
                          index % 2 === 0
                            ? "border-yellow-400"
                            : "border-red-400"
                        } rounded-tr-xl opacity-50`}
                      ></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline end marker */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full shadow-2xl border-2 border-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured News Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-white to-red-50/20">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <AnimatedItem variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-red-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Cập nhật mới nhất
                </span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Tin
                <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Nổi bật
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Những bài báo và báo cáo mới nhất về hành trình phát triển của
                Việt Nam
              </p>
            </div>
          </AnimatedItem>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news, index) => (
              <AnimatedItem
                key={index}
                variants={index === 0 ? slideInLeftAlt : slideInRightAlt}
              >
                <motion.article
                  className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-red-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image Container */}
                  <motion.div
                    className="relative h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Real Image */}
                    <Image
                      src={
                        index === 0
                          ? "/images/news-economy.jpg"
                          : "/images/news-culture.jpg"
                      }
                      alt={
                        index === 0
                          ? "Phát triển kinh tế và đầu tư Việt Nam"
                          : "Di sản văn hóa Việt Nam"
                      }
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>

                    {/* Featured Badge */}
                    <motion.div
                      className="absolute top-4 left-4 z-20 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full shadow-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Nổi bật
                    </motion.div>

                    {/* Date Badge */}
                    <motion.div
                      className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {index === 0 ? "07/10/2025" : "06/03/2025"}
                    </motion.div>

                    {/* Category Overlay */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-lg">
                          {index === 0 ? "📈" : "🎨"}
                        </span>
                        <span className="text-sm font-semibold">
                          {index === 0
                            ? "Kinh tế & Đầu tư"
                            : "Văn hóa & Di sản"}
                        </span>
                      </motion.div>
                    </div>

                    {/* Read Time Overlay */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <motion.div
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-white text-xs font-medium">
                          5 phút đọc
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Source Badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-full mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium text-red-700">
                        {index === 0
                          ? "Báo Chính phủ"
                          : "Bộ Văn hóa, Thể thao và Du lịch"}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-red-700 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {news.title}
                    </motion.h3>

                    {/* Summary */}
                    <motion.p
                      className="text-gray-600 leading-relaxed mb-6 text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {news.summary}
                    </motion.p>

                    {/* Stats & Highlights */}
                    <motion.div
                      className="grid grid-cols-2 gap-4 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      {index === 0 ? (
                        <>
                          <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200">
                            <div className="text-lg font-bold text-green-700">
                              +6.9%
                            </div>
                            <div className="text-xs text-green-600">
                              Tăng trưởng GDP
                            </div>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                            <div className="text-lg font-bold text-blue-700">
                              $21.5B
                            </div>
                            <div className="text-xs text-blue-600">Vốn FDI</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-center p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                            <div className="text-lg font-bold text-yellow-700">
                              15+
                            </div>
                            <div className="text-xs text-yellow-600">
                              Di sản UNESCO
                            </div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-200">
                            <div className="text-lg font-bold text-purple-700">
                              50+
                            </div>
                            <div className="text-xs text-purple-600">
                              Lễ hội quốc tế
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          href={news.link}
                          className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          target="_blank"
                        >
                          <span>Đọc bài viết</span>
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>

                      {/* Share Button */}
                      <motion.button
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                        </svg>
                      </motion.button>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2 mt-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      {(index === 0
                        ? ["Kinh tế", "FDI", "Tăng trưởng", "Đầu tư", "Hạ tầng"]
                        : [
                            "Di sản",
                            "Nghệ thuật",
                            "Bảo tồn",
                            "Văn hóa",
                            "UNESCO",
                          ]
                      ).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + tagIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-red-200 transition-all duration-500 pointer-events-none"></div>
                </motion.article>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
