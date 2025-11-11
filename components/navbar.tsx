"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Kinh tế", href: "/economy" },
    { name: "Văn hóa", href: "/culture" },
    { name: "Xã hội", href: "/society" },
    { name: "Thống kê", href: "/statistics" },
    { name: "Trò chơi", href: "/game" },
    { name: "AI", href: "/ai-report" },
  ];

  return (
    <>
      <motion.nav
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, #b30000 0%, #da251d 60%, #ffd600 120%)"
            : "linear-gradient(135deg, #da251d 0%, #ff4444 60%, #ffd600 120%)",
          backdropFilter: "blur(20px)",
          borderBottom: isScrolled
            ? "1px solid rgba(255,255,255,0.2)"
            : "1px solid rgba(255,255,255,0.1)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0,0,0,0.2)"
            : "0 4px 20px rgba(255,215,0,0.25)",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #da251d, #ffd600)",
                  boxShadow: "0 4px 20px rgba(255,215,0,0.4)",
                }}
              >
                <span className="text-white font-bold text-xl drop-shadow-md">
                  VN
                </span>
              </div>
              <div className="hidden sm:block">
                <span
                  className="text-2xl font-bold tracking-tight"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffd600, #fff, #ffd600)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Việt Nam
                </span>
                <div className="text-sm font-medium text-yellow-200 mt-1">
                  Đổi mới & Phát triển
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                        isActive
                          ? "text-white"
                          : "text-yellow-50 hover:text-yellow-200"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background:
                              "linear-gradient(135deg, #ffd600, #da251d)",
                            boxShadow: "0 4px 20px rgba(255,215,0,0.4)",
                          }}
                          layoutId="activeNavItem"
                        />
                      )}
                      <span className="relative z-10 whitespace-nowrap">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Link đặt câu hỏi */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="https://padlet.com/nttung2k3k/vnr202-nh-m-3-cow3mcwhsrzvha3f"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl font-semibold text-white bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hãy đặt câu hỏi cho nhóm mình
              </motion.a>
            </div>

            {/* Mobile menu button - Ẩn tạm thời nếu không cần */}
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      <div className="h-16 lg:h-20" />
    </>
  );
}