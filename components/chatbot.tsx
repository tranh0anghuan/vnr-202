"use client";

import { useState, useRef, useLayoutEffect, FormEvent } from "react";
import { Send, Bot, User, Loader2, MessageCircle, X } from "lucide-react";
import axios from "axios";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
  const API_KEY = "AIzaSyChDAeQ0Kf1eTaF3i-dcTNR2cywLsiglUs";

  // Tự động cuộn xuống đáy khi có tin nhắn mới
  useLayoutEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Bạn là trợ lý học thuật hỗ trợ sinh viên tìm hiểu về thành tựu đổi mới và phát triển Việt Nam giai đoạn 2018–nay trong các lĩnh vực chính sách, kinh tế, xã hội, văn hóa và hạ tầng; trả lời dễ hiểu, chính xác, khách quan, dựa trên số liệu và nguồn chính thống (TTXVN, Báo Chính phủ, TCTK, VNExpress, VietnamPlus, VnEconomy…) và liên hệ phù hợp với CLO3 và CLO4; tránh ngôn ngữ tuyên truyền, không nhân danh tổ chức, không dùng đại từ tập thể, nếu nêu quan điểm thì ghi rõ là phân tích học thuật; ưu tiên thuật ngữ đầy đủ, hạn chế viết tắt (nếu có thì giải thích ngay); nếu câu hỏi hơi lệch nhưng vẫn liên quan bối cảnh Việt Nam hiện đại thì trả lời theo khung chủ đề và bổ sung thông tin từ báo chí chính thống; nếu thiếu dữ liệu thì tìm nguồn chính thống gần nhất; nếu câu hỏi không liên quan thì lịch sự từ chối và hướng lại đúng chủ đề; giúp sinh viên hiểu thành tựu thực tế, ý nghĩa đổi mới, chuyển đổi số, hội nhập quốc tế, phát triển hạ tầng (cao tốc Bắc–Nam, Long Thành…), tiến bộ y tế, giáo dục, an sinh, văn hóa và bài học phát triển tương lai.Câu hỏi là: ${input}`,
              },
            ],
          },
        ],
      });

      const assistantText =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "Xin lỗi, tôi chưa nhận được phản hồi hợp lệ.";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: assistantText,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          content: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });

  const clearChat = () => setMessages([]);
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsMinimized(false);
  };

  // Nút mở chat
  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-vn-gradient-3 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          <Bot className="w-3 h-3" />
        </div>
      </button>
    );
  }

  // Cửa sổ chat
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 h-[600px]`}
    >
      <div
        className={`bg-white h-[600px] rounded-2xl shadow-2xl border border-red-100 overflow-hidden flex flex-col ${
          isMinimized ? "w-80" : "w-96"
        } transition-all duration-300`}
      >
        {/* Header */}
        <div className="bg-vn-gradient-3 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Trợ lý Đổi mới Việt Nam</h3>
                {!isMinimized && (
                  <p className="text-white/80 text-sm">
                    Hỏi đáp về thành tựu 2018–nay
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className="flex-1 p-4 space-y-4 bg-gradient-to-b from-red-50 to-amber-50 overflow-y-auto h-[600px]"
            >
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                  <Bot className="w-12 h-12 mx-auto mb-3 text-red-400" />
                  <p className="font-medium text-gray-700">
                    Xin chào! Tôi có thể giúp gì cho bạn về thành tựu đổi mới
                    Việt Nam?
                  </p>

                  {/* Thêm các nút gợi ý ở đây */}
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    {/* Các nút gợi ý câu hỏi */}
                    <div className="flex flex-wrap gap-2 justify-center mt-3">
                      <button
                        onClick={() =>
                          setInput("Thành tựu kinh tế Việt Nam 2018-2023?")
                        }
                        className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-xs hover:bg-red-100 transition-colors border border-red-200"
                      >
                        Kinh tế 2018-2023
                      </button>
                      <button
                        onClick={() =>
                          setInput(
                            "Dự án hạ tầng trọng điểm nào đang triển khai?"
                          )
                        }
                        className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-xs hover:bg-red-100 transition-colors border border-red-200"
                      >
                        Dự án hạ tầng
                      </button>
                      <button
                        onClick={() =>
                          setInput("Chuyển đổi số ở Việt Nam có kết quả gì?")
                        }
                        className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-xs hover:bg-red-100 transition-colors border border-red-200"
                      >
                        Chuyển đổi số
                      </button>
                      <button
                        onClick={() =>
                          setInput(
                            "Thành tựu giáo dục Việt Nam giai đoạn 2018-2023?"
                          )
                        }
                        className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-xs hover:bg-red-100 transition-colors border border-red-200"
                      >
                        Giáo dục
                      </button>
                      <button
                        onClick={() =>
                          setInput(
                            "Chính sách đối ngoại Việt Nam có gì nổi bật?"
                          )
                        }
                        className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-xs hover:bg-red-100 transition-colors border border-red-200"
                      >
                        Đối ngoại
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-[85%] ${
                      msg.role === "user"
                        ? "bg-red-500 text-white rounded-2xl rounded-tr-none"
                        : "bg-white text-gray-800 rounded-2xl rounded-tl-none shadow-md border border-red-100"
                    } p-4 transition-all duration-200 hover:shadow-lg`}
                  >
                    <div className="flex items-start space-x-3">
                      {msg.role === "assistant" && (
                        <div className="p-1 bg-red-100 rounded-full mt-1 flex-shrink-0">
                          <Bot className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="whitespace-pre-wrap leading-relaxed break-words">
                          {msg.content}
                        </p>
                        <p
                          className={`text-xs mt-2 ${
                            msg.role === "user"
                              ? "text-red-100"
                              : "text-gray-500"
                          }`}
                        >
                          {formatTime(msg.timestamp)}
                        </p>
                      </div>
                      {msg.role === "user" && (
                        <div className="p-1 bg-red-600 rounded-full mt-1 flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-none shadow-md border border-red-100 p-4 flex items-center space-x-3">
                    <div className="p-1 bg-red-100 rounded-full">
                      <Bot className="w-4 h-4 text-red-600" />
                    </div>
                    <Loader2 className="w-4 h-4 text-red-500 animate-spin" />
                    <span className="text-gray-500 text-sm">
                      Đang phân tích...
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-red-100 bg-white"
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập câu hỏi..."
                  className="flex-1 px-4 py-3 border border-red-200 rounded-2xl focus:ring-2 focus:ring-red-500 bg-red-50 placeholder-red-300 transition-all duration-200"
                  disabled={isLoading}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-3 bg-vn-gradient-3 text-white rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:scale-100 flex items-center justify-center min-w-[80px]"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              {messages.length > 0 && (
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    onClick={clearChat}
                    className="text-xs text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Xóa lịch sử chat
                  </button>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
