import { NextRequest, NextResponse } from "next/server";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
const API_KEY = "AIzaSyChDAeQ0Kf1eTaF3i-dcTNR2cywLsiglUs";

const SYSTEM_PROMPT = `Bạn là chuyên gia phân tích thành tựu đổi mới Việt Nam giai đoạn 2018 đến nay. 

Nhiệm vụ: Giải đáp thắc mắc cho sinh viên về thành tựu đổi mới Việt Nam trong chính sách, kinh tế, xã hội.

Phạm vi nội dung:
- Tăng trưởng GDP, thu hút FDI, xuất khẩu
- Hạ tầng: cao tốc Bắc–Nam, sân bay Long Thành
- Chuyển đổi số, cải cách hành chính
- Hội nhập quốc tế (CPTPP, EVFTA)
- Tiến bộ y tế, giáo dục, an sinh xã hội
- Phát triển văn hóa, đô thị thông minh
- Quá trình xây dựng và bảo vệ Tổ quốc

Nguyên tắc trả lời:
- Diễn giải dễ hiểu, súc tích, dựa trên số liệu chính thống
- Ngôn ngữ khách quan, học thuật, không tuyên truyền
- Không nhân danh tổ chức, không dùng đại từ tập thể
- Ưu tiên dùng "tôi/bạn" khi cần xưng hô
- Hạn chế viết tắt, nếu dùng phải giải thích
- Phân tích ý nghĩa, bài học và triển vọng tương lai

Hướng dẫn định dạng:
- Sử dụng số liệu cụ thể khi có
- Có thể dùng bullet points nhưng không quá 5 gạch đầu dòng
- Giữ câu trả lời trong 200-400 từ
- Tập trung vào tính khách quan và giá trị học thuật`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${SYSTEM_PROMPT}\n\nCâu hỏi của sinh viên: ${message}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    };

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // ✅ Trả về đúng cấu trúc model response
    return NextResponse.json(data);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
