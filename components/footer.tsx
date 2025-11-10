// components/Footer.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface FooterProps {
  showBackToTop?: boolean;
  compact?: boolean;
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
};

export default function Footer({
  showBackToTop = true,
  compact = false,
}: FooterProps) {
  const quickLinks = [
    { name: "Kinh tế", href: "/economy" },
    { name: "Văn hóa", href: "/culture" },
    { name: "Xã hội", href: "/society" },
    { name: "Thống kê", href: "/statistics" },
  ];

  const legalLinks = [
    { name: "Chính sách bảo mật", href: "/" },
    { name: "Điều khoản sử dụng", href: "/" },
    { name: "Liên hệ", href: "/" },
  ];

  return (
    <motion.footer
      className="relative bg-vn-gradient-dark text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Animated floating particles */}
      {!compact && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0
                  ? "bg-yellow-400"
                  : i % 3 === 1
                  ? "bg-red-400"
                  : "bg-white"
              }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Footer Content */}
        <div className={`px-4 ${compact ? "py-8" : "py-16"}`}>
          {!compact && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">VN</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-linear-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
                      Việt Nam Đổi Mới
                    </h3>
                    <p className="text-white/60 text-sm">2018 - Nay</p>
                  </div>
                </motion.div>
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  Khám phá hành trình đổi mới và phát triển bền vững của Việt
                  Nam qua những thành tựu nổi bật và câu chuyện thực tế.
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-yellow-300 mb-4">
                  Khám phá
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <motion.li key={link.name} whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact/Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-yellow-300 mb-4">
                  Thông tin
                </h4>
                <div className="space-y-3 text-white/70">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <span>📧</span>
                    </div>
                    <span>contact@vietnamdoimoi.vn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <span>🌐</span>
                    </div>
                    <span>www.vietnamdoimoi.vn</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Bottom Footer */}
          <motion.div
            className={`${compact ? "" : "pt-8 border-t border-white/10"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: compact ? 0.1 : 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm">
                  © 2025 Việt Nam Đổi Mới. Tất cả các quyền được bảo lưu.
                </p>
                {!compact && (
                  <p className="text-white/50 text-xs mt-1">
                    Nguồn dữ liệu: Các cơ quan báo chí và thống kê chính thống
                    của Việt Nam
                  </p>
                )}
              </div>

              <div className="flex gap-6 text-white/50 text-sm">
                {legalLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="hover:text-yellow-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: compact ? 0.2 : 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/80 hover:text-yellow-300 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <span>Về đầu trang</span>
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↑
                  </motion.span>
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
