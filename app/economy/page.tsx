// app/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { JSX, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

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
      ease: "easeOut",
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
      ease: "easeOut",
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
      ease: "easeOut",
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
      ease: "easeOut",
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
      ease: "easeOut",
    },
  },
};

// Animated component wrappers
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

export default function VietnamEconomyPage() {
  // Dữ liệu cho các chỉ số then chốt
  const keyIndicators = [
    {
      title: "GDP",
      content:
        "Tăng trưởng GDP Việt Nam từ năm 2018 đến nay có xu hướng ổn định - giai đoạn 2018-2019 duy trì khoảng trên 5%/năm, năm 2020 chịu ảnh hưởng bởi COVID-19, sau đó phục hồi và ghi nhận quý I 2025 tăng khoảng 6,93% so với cùng kỳ năm trước.",
      image: "/images/economy2.jpg",
      link: "https://www.nso.gov.vn/bai-top/2025/01/bao-cao-tinh-hinh-kinh-te-xa-hoi-quy-iv-va-nam-2024/",
    },
    {
      title: "Thương mại & xuất khẩu",
      content:
        "Việt Nam tiếp tục mở rộng xuất khẩu sản phẩm chế tạo - trong 6 tháng đầu 2025, xuất khẩu hàng hóa đạt khoảng 219,83 tỷ USD, tăng ~14,4% so với cùng kỳ năm trước.",
      image: "/images/economy3.jpg",
      link: "https://www.nso.gov.vn/en/data-and-statistics/2025/07/report-on-socio-economic-situation-in-second-quarter-and-six-months-of-2025/",
    },
    {
      title: "FDI",
      content:
        "Vốn đầu tư trực tiếp nước ngoài (FDI) đăng ký đạt khoảng 21,52 tỷ USD trong 6 tháng đầu 2025, tăng ~32,6% so với cùng kỳ năm trước.",
      image: null,
      link: null,
    },
    {
      title: "Năng suất lao động & việc làm",
      content:
        "Giai đoạn gần đây cho thấy lực lượng lao động có trình độ tăng, tỷ lệ lao động qua đào tạo năm 2025 ở khoảng 29,0%.",
      image: null,
      link: null,
    },
    {
      title: "Lạm phát & chính sách tiền tệ",
      content:
        "Giai đoạn gần đây cho thấy lực lượng lao động có trình độ tăng, tỷ lệ lao động qua đào tạo năm 2025 ở khoảng 29,0%.",
      image: null,
      link: null,
    },
    {
      title: "Tài chính số & Fintech",
      content:
        "Ngành thông tin-truyền thông trong quý I 2025 tăng ~6,66% so với cùng kỳ, cho thấy sự phát triển mạnh của lĩnh vực số.",
      image: null,
      link: null,
    },
  ];

  // Dữ liệu cho các ngành mũi nhọn
  const keyIndustries = [
    {
      title: "Công nghiệp chế tạo & điện tử",
      content:
        "Ngành công nghiệp chế tạo và điện tử là trụ cột của tăng trưởng Việt Nam. Việt Nam đang trở thành trung tâm lắp ráp toàn cầu với nhiều nhà đầu tư lớn từ Hàn Quốc, Nhật Bản và Hoa Kỳ chọn đặt nhà máy tại các khu công nghiệp. Việc này giúp phát triển chuỗi giá trị công nghệ, tạo việc làm kỹ thuật cao và thúc đẩy xuất khẩu sản phẩm định hướng công nghệ.",
      image: "/images/economy4.jpg",
      link: "https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2025/10/chi-so-san-xuat-cong-nghiep-thang-chin-nam-2025/",
    },
    {
      title: "Nông nghiệp công nghệ cao",
      content:
        "Việt Nam đang triển khai mạnh chuyển đổi số trong nông nghiệp: áp dụng công nghệ trong trồng trọt, quản lý truy xuất nguồn gốc, chế biến sâu. Nhờ đó, nông nghiệp từng bước nâng cao giá trị và chất lượng, giảm sử dụng lao động giản đơn, tăng xuất khẩu sản phẩm sạch. Đây là hướng đi quan trọng để nâng cao hiệu quả và phát triển bền vững.",
      image: "/images/economy5.jpg",
      link: "https://nhandan.vn/thanh-pho-ho-chi-minh-phat-trien-nong-nghiep-cong-nghe-cao-post918663.html",
    },
    {
      title: "Dịch vụ & du lịch",
      content:
        "Sau đại dịch COVID-19, ngành du lịch Việt Nam bắt đầu khôi phục mạnh mẽ. Đồng thời, hoạt động logistics, thương mại điện tử và dịch vụ số tiếp tục tăng trưởng nhanh. Ví dụ trong 6 tháng đầu 2025 ngành xuất khẩu dịch vụ đạt ~14,79 tỷ USD, tăng ~21,2% so với cùng kỳ.",
      image: "/images/economy6.jpg",
      link: "https://bvhttdl.gov.vn/tp-hcm-tong-thu-du-lich-9-thang-nam-2025-uoc-dat-gan-190000-ty-dong-2025091710070355.htm",
    },
    {
      title: "Công nghệ thông tin & startup",
      content:
        "Hệ sinh thái startup Việt Nam đang phát triển nhanh với nhiều quỹ đầu tư và chính sách hỗ trợ khởi nghiệp. Việt Nam đang hướng tới mô hình kinh tế số, chuyển đổi số mạnh mẽ và thu hút đầu tư vào fintech, AI, dữ liệu lớn. Đây là ngành có tiềm năng để nâng cao năng suất lao động và giá trị xuất khẩu trong tương lai.",
      image: "/images/economy7.jpg",
      link: "https://dost.hochiminhcity.gov.vn/hoat-dong-so-khcn/tphcm-day-manh-khoi-nghiep-sang-tao-but-pha-huong-den-nam-2030/",
    },
  ];

  // Dữ liệu cho dự án hạ tầng
  const infrastructureProjects = [
    {
      title: "Cao tốc Bắc--Nam",
      content:
        "Dự án cao tốc Bắc--Nam được xem là tuyến huyết mạch kết nối các vùng miền, góp phần tăng năng lực vận tải, rút ngắn thời gian di chuyển, thúc đẩy logistics và kinh tế vùng. Trong giai đoạn này, việc triển khai từng đoạn cao tốc giúp kết nối các khu công nghiệp, cảng biển và sân bay, hỗ trợ chuỗi cung ứng và phát triển vùng.",
      image: "/images/economy8.jpg",
      link: "https://vietnamnet.vn/toan-canh-1206-km-tuyen-cao-toc-bac-nam-da-thong-xe-2401333.html",
    },
    {
      title: "Sân bay Long Thành (giai đoạn triển khai)",
      content:
        "Dự án Sân bay Quốc tế Long Thành với quy mô lớn, đặt mục tiêu trở thành đầu mối hàng không quốc tế, hỗ trợ phát triển vùng Đông Nam Bộ và kết nối quốc tế. Việc triển khai sân bay mới sẽ tạo bước đột phá về hạ tầng hàng không, thúc đẩy du lịch, logistics và phát triển vùng.",
      image: "/images/economy9.jpg",
      link: "https://baomoi.com/lo-trinh-chuyen-giao-khai-thac-tu-cang-hkqt-tan-son-nhat-sang-cang-hkqt-long-thanh-c53668511.epi",
    },
    {
      title: "Đô thị thông minh (các thành phố thí điểm)",
      content:
        "Việt Nam đã triển khai các thành phố thông minh với tính năng như quản lý giao thông, dịch vụ công trực tuyến, IoT và dữ liệu lớn. Các dự án này hướng tới nâng cao chất lượng sống, hiệu quả quản lý và thu hút đầu tư. Ví dụ một số thành phố lớn đang triển khai mô hình thí điểm.",
      image: "/images/economy10.jpg",
      link: "https://tuoitre.vn/tp-hcm-se-thi-diem-mo-hinh-do-thi-tu-chu-trong-thanh-pho-nhiem-ky-toi-20251014101950316.htm",
    },
  ];

  // Dữ liệu cho hạn chế & rủi ro
  const limitations = [
    "Cấu trúc kinh tế chuyển dịch chậm",
    "Áp lực về môi trường và quản lý tài nguyên",
    "Phụ thuộc chuỗi cung ứng nước ngoài ở một số ngành",
  ];

  function getIndicatorIcon(title: string) {
    const icons: { [key: string]: string } = {
      GDP: "📈",
      "Thương mại & xuất khẩu": "📦",
      FDI: "💼",
      "Năng suất lao động & việc làm": "👨‍💼",
      "Lạm phát & chính sách tiền tệ": "💰",
      "Tài chính số & Fintech": "💻",
    };
    return icons[title] || "📊";
  }

  function hasProgressData(title: string) {
    return [
      "GDP",
      "Thương mại & xuất khẩu",
      "FDI",
      "Tài chính số & Fintech",
    ].includes(title);
  }

  function getProgressValue(title: string) {
    const values: { [key: string]: string } = {
      GDP: "+6.93%",
      "Thương mại & xuất khẩu": "+14.4%",
      FDI: "+32.6%",
      "Tài chính số & Fintech": "+6.66%",
    };
    return values[title] || "";
  }

  function getProgressWidth(title: string) {
    const widths: { [key: string]: string } = {
      GDP: "85%",
      "Thương mại & xuất khẩu": "75%",
      FDI: "90%",
      "Tài chính số & Fintech": "70%",
    };
    return widths[title] || "60%";
  }

  function getIndustryIcon(title: string) {
    const icons: { [key: string]: JSX.Element } = {
      "Công nghiệp chế tạo & điện tử": (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      "Nông nghiệp công nghệ cao": (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
      "Dịch vụ & du lịch": (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      "Công nghệ thông tin & startup": (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    };
    return icons[title] || <span>🏭</span>;
  }

  function getIndustryCategory(title: string) {
    const categories: { [key: string]: string } = {
      "Công nghiệp chế tạo & điện tử": "Công Nghiệp",
      "Nông nghiệp công nghệ cao": "Nông Nghiệp",
      "Dịch vụ & du lịch": "Dịch Vụ",
      "Công nghệ thông tin & startup": "Công Nghệ",
    };
    return categories[title] || "Ngành Then Chốt";
  }

  function getIndustryStats(title: string) {
    const stats: { [key: string]: Array<{ value: string; label: string }> } = {
      "Công nghiệp chế tạo & điện tử": [
        { value: "15%", label: "Đóng góp GDP" },
        { value: "45%", label: "Xuất khẩu" },
      ],
      "Nông nghiệp công nghệ cao": [
        { value: "12%", label: "Đóng góp GDP" },
        { value: "8%", label: "Tăng trưởng" },
      ],
      "Dịch vụ & du lịch": [
        { value: "41%", label: "Đóng góp GDP" },
        { value: "21%", label: "Tăng trưởng" },
      ],
      "Công nghệ thông tin & startup": [
        { value: "7%", label: "Đóng góp GDP" },
        { value: "15%", label: "Tăng trưởng" },
      ],
    };
    return stats[title] || [{ value: "N/A", label: "Dữ liệu" }];
  }

  function getIndustryFeatures(title: string) {
    const features: { [key: string]: string[] } = {
      "Công nghiệp chế tạo & điện tử": [
        "Trung tâm lắp ráp toàn cầu",
        "Chuỗi cung ứng công nghệ cao",
        "Đầu tư FDI quy mô lớn",
        "Xuất khẩu sản phẩm công nghệ",
      ],
      "Nông nghiệp công nghệ cao": [
        "Chuyển đổi số nông nghiệp",
        "Truy xuất nguồn gốc",
        "Sản phẩm sạch & chất lượng",
        "Phát triển bền vững",
      ],
      "Dịch vụ & du lịch": [
        "Logistics hiện đại",
        "Thương mại điện tử",
        "Du lịch phục hồi mạnh",
        "Dịch vụ số tăng trưởng",
      ],
      "Công nghệ thông tin & startup": [
        "Hệ sinh thái startup",
        "Đầu tư Fintech, AI",
        "Chuyển đổi số quốc gia",
        "Nguồn nhân lực chất lượng",
      ],
    };
    return features[title] || ["Đang cập nhật..."];
  }

  function getProjectIcon(title: string) {
    const icons: { [key: string]: string } = {
      "Cao tốc Bắc--Nam": "🛣️",
      "Sân bay Long Thành (giai đoạn triển khai)": "✈️",
      "Đô thị thông minh (các thành phố thí điểm)": "🏙️",
    };
    return icons[title] || "🏗️";
  }

  function getProjectType(title: string) {
    const types: { [key: string]: string } = {
      "Cao tốc Bắc--Nam": "Giao Thông",
      "Sân bay Long Thành (giai đoạn triển khai)": "Hàng Không",
      "Đô thị thông minh (các thành phố thí điểm)": "Đô Thị",
    };
    return types[title] || "Hạ Tầng";
  }

  function getProjectDetails(title: string) {
    const details: { [key: string]: Array<{ value: string; label: string }> } =
      {
        "Cao tốc Bắc--Nam": [
          { value: "1,206km", label: "Tổng chiều dài" },
          { value: "2025", label: "Hoàn thành" },
        ],
        "Sân bay Long Thành (giai đoạn triển khai)": [
          { value: "5,000ha", label: "Diện tích" },
          { value: "100tr", label: "Hành khách/năm" },
        ],
        "Đô thị thông minh (các thành phố thí điểm)": [
          { value: "5+", label: "Thành phố" },
          { value: "IoT", label: "Công nghệ" },
        ],
      };
    return details[title] || [{ value: "N/A", label: "Thông tin" }];
  }

  function getProjectProgress(title: string) {
    const progress: { [key: string]: string } = {
      "Cao tốc Bắc--Nam": "85%",
      "Sân bay Long Thành (giai đoạn triển khai)": "60%",
      "Đô thị thông minh (các thành phố thí điểm)": "75%",
    };
    return progress[title] || "50%";
  }

  function getProjectProgressWidth(title: string) {
    const widths: { [key: string]: string } = {
      "Cao tốc Bắc--Nam": "85%",
      "Sân bay Long Thành (giai đoạn triển khai)": "60%",
      "Đô thị thông minh (các thành phố thí điểm)": "75%",
    };
    return widths[title] || "50%";
  }

  function getProjectTimeline(title: string) {
    const timelines: { [key: string]: string } = {
      "Cao tốc Bắc--Nam": "2021-2025",
      "Sân bay Long Thành (giai đoạn triển khai)": "2021-2026",
      "Đô thị thông minh (các thành phố thí điểm)": "2020-2025",
    };
    return timelines[title] || "Đang triển khai";
  }

  const impactMetrics = [
    { value: "85%", label: "Việc làm mới" },
    { value: "23%", label: "Tăng thu nhập" },
    { value: "67%", label: "Đào tạo kỹ năng" },
    { value: "42%", label: "Phát triển vùng" },
  ];

  const focusAreas = [
    "Đào tạo nguồn nhân lực",
    "Phát triển hạ tầng đô thị",
    "Phân bố lợi ích công bằng",
    "An sinh xã hội",
    "Kinh tế xanh",
    "Bảo vệ môi trường",
  ];

  function getRiskIcon(index: number) {
    const icons = [
      <svg
        key={0}
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>,
      <svg
        key={1}
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>,
      <svg
        key={2}
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>,
    ];
    return icons[index] || icons[0];
  }

  function getRiskDescription(limitation: string) {
    const descriptions: { [key: string]: string } = {
      "Cấu trúc kinh tế chuyển dịch chậm":
        "Quá trình chuyển đổi từ mô hình truyền thống sang kinh tế số và công nghệ cao cần được đẩy nhanh để bắt kịp xu hướng toàn cầu.",
      "Áp lực về môi trường và quản lý tài nguyên":
        "Tăng trưởng kinh tế đặt ra thách thức lớn về bảo vệ môi trường và sử dụng bền vững tài nguyên thiên nhiên.",
      "Phụ thuộc chuỗi cung ứng nước ngoài ở một số ngành":
        "Sự phụ thuộc vào nguyên liệu và công nghệ nhập khẩu có thể ảnh hưởng đến an ninh kinh tế quốc gia.",
    };
    return (
      descriptions[limitation] || "Đang được nghiên cứu và đánh giá chi tiết."
    );
  }

  function getRiskImpact(limitation: string) {
    const impacts: { [key: string]: string } = {
      "Cấu trúc kinh tế chuyển dịch chậm": "Cao",
      "Áp lực về môi trường và quản lý tài nguyên": "Trung bình",
      "Phụ thuộc chuỗi cung ứng nước ngoài ở một số ngành": "Cao",
    };
    return impacts[limitation] || "Đang đánh giá";
  }

  function getRiskImpactWidth(limitation: string) {
    const widths: { [key: string]: string } = {
      "Cấu trúc kinh tế chuyển dịch chậm": "85%",
      "Áp lực về môi trường và quản lý tài nguyên": "65%",
      "Phụ thuộc chuỗi cung ứng nước ngoài ở một số ngành": "80%",
    };
    return widths[limitation] || "50%";
  }

  const focusAreas2 = [
    {
      title: "Đổi Mới Thể Chế",
      description: "Cải cách hệ thống, tạo môi trường kinh doanh thuận lợi",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Năng Suất Lao Động",
      description: "Nâng cao kỹ năng, ứng dụng công nghệ hiện đại",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Kinh Tế Xanh",
      description: "Phát triển bền vững, bảo vệ môi trường",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="vn-red min-h-screen scroll-smooth overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>

      {/* Header với gradient Việt Nam */}
      <motion.header
        className="bg-vn-gradient-3 text-white py-8 relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Kinh tế Việt Nam 2018--nay --- Tiến trình, con số và dự án
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-yellow-400 mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          ></motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="text-sm">Dữ liệu cập nhật 2025</span>
            </div>
          </motion.div>
        </div>

        {/* Animated waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <motion.svg
            className="w-full h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-current text-white/20"
              animate={{
                d: [
                  "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                  "M0,0V42.29c52.91,18.2,98.11,28.17,148,25,65.36-4.37,125.33-30.31,190.8-34.5C428.64,28.43,502.34,48.67,568,62.05c71.27,16,135.3,22.88,201.4,15.08,41.15-5,79.85-15.84,114.45-26.34C974.49,20,1098-16.29,1200,48.47V0Z",
                  "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.path>
          </motion.svg>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 relative">
        {/* Mở bài */}
        <AnimatedSection>
          <motion.section
            className="mb-16 group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            {/* Main Card với gradient border */}
            <div className="relative">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 overflow-hidden">
                {/* Background Pattern với gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-white to-yellow-50/30"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-100 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-100 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

                {/* Animated Orbs */}
                <motion.div
                  className="absolute top-6 right-6 w-6 h-6 bg-yellow-400 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-4 h-4 bg-red-500 rounded-full opacity-30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <div className="relative z-10">
                  {/* Header với icon */}
                  <motion.div
                    className="flex items-center gap-4 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    <div>
                      <motion.h2
                        className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-700 to-yellow-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        Tổng Quan Kinh Tế
                      </motion.h2>
                      <motion.p
                        className="text-gray-600 text-sm mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        2018 - Hiện tại • Cập nhật mới nhất
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.p
                        className="text-lg lg:text-xl leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        Từ năm 2018, nền kinh tế Việt Nam tiếp tục khẳng định{" "}
                        <span className="font-semibold text-red-600">
                          sức bật mạnh mẽ
                        </span>{" "}
                        trong bối cảnh toàn cầu biến động. Việt Nam duy trì mức
                        tăng trưởng dương, cải thiện môi trường đầu tư, thu hút
                        FDI vào chuỗi cung ứng công nghệ cao và thúc đẩy xuất
                        khẩu.
                      </motion.p>

                      <motion.p
                        className="text-lg lg:text-xl leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        Các dự án hạ tầng lớn và chính sách hỗ trợ doanh nghiệp
                        đã góp phần tạo nên{" "}
                        <span className="font-semibold text-yellow-600">
                          bức tranh phát triển rõ nét
                        </span>{" "}
                        với nhiều điểm sáng ấn tượng.
                      </motion.p>

                      {/* Stats Highlight */}
                      <motion.div
                        className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-6 border border-red-100"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                              />
                            </svg>
                          </div>
                          <div>
                            <motion.p
                              className="text-2xl font-bold text-gray-900"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.7 }}
                            >
                              ~6,93%
                            </motion.p>
                            <p className="text-gray-600 text-sm">
                              Tăng trưởng GDP Quý I 2025
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Action Button */}
                      <motion.div
                        className="pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                      >
                        <motion.a
                          href="https://xaydungchinhsach.chinhphu.vn/tang-truong-gdp-quy-i-2025-dat-693-cao-hon-cung-ky-5-nam-qua-119250406134047291.htm"
                          className="group/btn inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative">Xem Báo Cáo Chi Tiết</span>
                          <motion.span
                            className="relative"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </motion.span>

                          {/* Button glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl blur opacity-0 group-hover/btn:opacity-100 transition duration-500 -z-10"></div>
                        </motion.a>
                      </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="relative group/image">
                        {/* Main Image Container */}
                        <motion.div
                          className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src="/images/economy1.jpg"
                            alt="Biểu đồ tăng trưởng GDP Việt Nam 2018-2025"
                            fill
                            className="object-cover group-hover/image:scale-110 transition-transform duration-700"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                          {/* Image Badge */}
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                              <span className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Cập nhật 2025
                              </span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                          className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 opacity-20 group-hover/image:opacity-40 transition duration-500"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [12, 15, 12],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-2xl -rotate-12 opacity-20 group-hover/image:opacity-40 transition duration-500"
                          animate={{
                            y: [0, 8, 0],
                            rotate: [-12, -15, -12],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        />
                      </div>

                      {/* Image Caption */}
                      <motion.div
                        className="text-center mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-gray-600 text-sm">
                          Biểu đồ tăng trưởng GDP Việt Nam giai đoạn 2018-2025
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatedSection>

        {/* Chỉ số then chốt */}
        <AnimatedSection className="mb-20">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl border border-red-100 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">
                Chỉ Số Quan Trọng
              </span>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                Chỉ Số Then Chốt
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Những con số biết nói về sự phát triển kinh tế Việt Nam
            </motion.p>
          </motion.div>

          {/* Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyIndicators.map((indicator, index) => (
              <AnimatedItem key={index} variants={fadeInUp}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Gradient Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600 via-yellow-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                  <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden h-full transition-all duration-300">
                    {/* Header với gradient background */}
                    <div className="relative bg-gradient-to-r from-red-600 to-yellow-500 p-6">
                      <div className="absolute inset-0 bg-black/10"></div>

                      {/* Icon và Title */}
                      <div className="relative z-10 flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {getIndicatorIcon(indicator.title)}
                        </motion.div>

                        <div>
                          <motion.h3
                            className="text-xl font-bold text-white"
                            whileHover={{ x: 3 }}
                          >
                            {indicator.title}
                          </motion.h3>
                          <motion.div
                            className="w-8 h-0.5 bg-white/60 rounded-full mt-1"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          ></motion.div>
                        </div>
                      </div>

                      {/* Floating decoration */}
                      <motion.div
                        className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Content Text */}
                      <motion.p
                        className="text-gray-700 leading-relaxed mb-6 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {indicator.content}
                      </motion.p>

                      {/* Image (nếu có) */}
                      {indicator.image && (
                        <motion.div
                          className="relative w-full h-40 rounded-xl overflow-hidden mb-4 group/image"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Image
                            src={indicator.image}
                            alt={indicator.title}
                            fill
                            className="object-cover group-hover/image:scale-110 transition-transform duration-500"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                          {/* Image Badge */}
                          <div className="absolute top-3 left-3">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                              <span className="text-xs font-semibold text-gray-800">
                                📊 Biểu đồ
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Link (nếu có) */}
                      {indicator.link && (
                        <motion.div
                          className="flex items-center justify-between pt-4 border-t border-gray-100"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                        >
                          <motion.a
                            href={indicator.link}
                            className="group/link inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 3 }}
                          >
                            <span>Xem dữ liệu chi tiết</span>
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </motion.span>
                          </motion.a>

                          {/* Source Badge */}
                          <motion.div
                            className="px-3 py-1 bg-gray-100 rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs text-gray-600 font-medium">
                              NSO
                            </span>
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Progress Indicator cho các chỉ số có số liệu */}
                      {hasProgressData(indicator.title) && (
                        <motion.div
                          className="mt-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>Mức độ tăng trưởng</span>
                            <span className="font-semibold text-green-600">
                              {getProgressValue(indicator.title)}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600"
                              initial={{ width: 0 }}
                              whileInView={{
                                width: getProgressWidth(indicator.title),
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Corner Decoration */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-400 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          {/* Section Footer */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.p
              className="text-gray-600 text-lg"
              whileHover={{ scale: 1.02 }}
            >
              Dữ liệu được cập nhật theo báo cáo chính thức từ Tổng cục Thống kê
            </motion.p>
          </motion.div>
        </AnimatedSection>

        {/* Các ngành mũi nhọn */}
        <AnimatedSection className="mb-20">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl border border-red-100 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">
                Động Lực Tăng Trưởng
              </span>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                Ngành Mũi Nhọn
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Khám phá những lĩnh vực then chốt đang định hình tương lai kinh tế
              Việt Nam
            </motion.p>
          </motion.div>

          {/* Industries List */}
          <div className="space-y-12">
            {keyIndustries.map((industry, index) => (
              <AnimatedItem
                key={index}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
              >
                <motion.div
                  className="group relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10"></div>

                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300">
                    <div
                      className={`flex flex-col lg:flex-row ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Image Section */}
                      <div className="lg:w-2/5 relative">
                        <motion.div
                          className="relative h-64 lg:h-full min-h-80 group/image"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src={industry.image}
                            alt={industry.title}
                            fill
                            className="object-cover group-hover/image:scale-105 transition-transform duration-700"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-black/20 lg:to-transparent"></div>

                          {/* Industry Badge */}
                          <div className="absolute top-6 left-6">
                            <motion.div
                              className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 }}
                            >
                              <span className="text-sm font-bold text-gray-800 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                {getIndustryCategory(industry.title)}
                              </span>
                            </motion.div>
                          </div>

                          {/* Stats Overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <motion.div
                              className="grid grid-cols-2 gap-3"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                            >
                              {getIndustryStats(industry.title).map(
                                (stat, statIndex) => (
                                  <div
                                    key={statIndex}
                                    className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center"
                                  >
                                    <div className="text-lg font-bold text-gray-900">
                                      {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      {stat.label}
                                    </div>
                                  </div>
                                )
                              )}
                            </motion.div>
                          </div>

                          {/* Floating Elements */}
                          <motion.div
                            className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 p-8 lg:p-10">
                        <div className="relative">
                          {/* Header with Icon */}
                          <motion.div
                            className="flex items-center gap-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div
                              className="w-14 h-14 bg-gradient-to-br from-red-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              {getIndustryIcon(industry.title)}
                            </motion.div>
                            <div>
                              <motion.h3
                                className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300"
                                whileHover={{ x: 3 }}
                              >
                                {industry.title}
                              </motion.h3>
                              <motion.div
                                className="w-12 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mt-2"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                              />
                            </div>
                          </motion.div>

                          {/* Content */}
                          <motion.p
                            className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                          >
                            {industry.content}
                          </motion.p>

                          {/* Features Grid */}
                          <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                          >
                            {getIndustryFeatures(industry.title).map(
                              (feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300 group/feature"
                                  whileHover={{ scale: 1.02, x: 3 }}
                                >
                                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover/feature:bg-red-200 transition-colors duration-300">
                                    <span className="text-red-600 text-sm">
                                      ✓
                                    </span>
                                  </div>
                                  <span className="text-gray-700 font-medium">
                                    {feature}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </motion.div>

                          {/* Action Buttons */}
                          <motion.div
                            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          >
                            <motion.a
                              href={industry.link}
                              className="group/btn inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Khám Phá Chi Tiết</span>
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </svg>
                              </motion.span>
                            </motion.a>

                            {/* Additional Info */}
                            <motion.div
                              className="flex items-center gap-4 text-sm text-gray-600"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Đang phát triển</span>
                              </div>
                              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>Tiềm năng cao</span>
                              </div>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <motion.div
                      className={`absolute ${
                        index % 2 === 0 ? "top-4 right-4" : "top-4 left-4"
                      } w-8 h-8 border-t-2 border-r-2 ${
                        index % 2 === 0 ? "border-yellow-400" : "border-red-400"
                      } rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        {/* Dự án hạ tầng tiêu biểu */}
        <AnimatedSection className="mb-20">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl border border-red-100 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">
                Đột Phá Hạ Tầng
              </span>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                Dự Án Tiêu Biểu
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Những công trình hạ tầng trọng điểm đang kiến tạo tương lai Việt
              Nam
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureProjects.map((project, index) => (
              <AnimatedItem key={index} variants={scaleUp}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600 via-yellow-500 to-red-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                  <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden h-full transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden group/image">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover/image:scale-110 transition-transform duration-700"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                        {/* Status Badge */}
                        <motion.div
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            Đang triển khai
                          </div>
                        </motion.div>

                        {/* Project Type Badge */}
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                            <span className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                              {getProjectIcon(project.title)}
                              {getProjectType(project.title)}
                            </span>
                          </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                          className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                      </motion.div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <motion.div
                          className="p-4 w-full"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          <div className="flex justify-between items-center text-white">
                            <span className="text-sm font-medium">
                              Xem chi tiết
                            </span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <motion.h3
                        className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300 line-clamp-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-gray-600 leading-relaxed mb-6 line-clamp-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {project.content}
                      </motion.p>

                      {/* Project Details */}
                      <motion.div
                        className="grid grid-cols-2 gap-4 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        {getProjectDetails(project.title).map(
                          (detail, detailIndex) => (
                            <div key={detailIndex} className="text-center">
                              <div className="text-2xl font-bold text-red-600">
                                {detail.value}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {detail.label}
                              </div>
                            </div>
                          )
                        )}
                      </motion.div>

                      {/* Progress Bar */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Tiến độ dự án</span>
                          <span className="font-semibold text-green-600">
                            {getProjectProgress(project.title)}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600"
                            initial={{ width: 0 }}
                            whileInView={{
                              width: getProjectProgressWidth(project.title),
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: index * 0.2 + 0.8,
                            }}
                          />
                        </div>
                      </motion.div>

                      {/* Action Button */}
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                      >
                        <motion.a
                          href={project.link}
                          className="group/btn inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Khám Phá Dự Án</span>
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </motion.span>
                        </motion.a>

                        {/* Quick Stats */}
                        <motion.div
                          className="flex items-center gap-2 text-sm text-gray-500"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{getProjectTimeline(project.title)}</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Corner Decoration */}
                    <motion.div
                      className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          {/* Section Footer */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl border border-red-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-gray-700 font-medium">
                Tất cả dự án đều nằm trong kế hoạch phát triển hạ tầng quốc gia
              </p>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Phân tích tác động xã hội */}
        <AnimatedSection className="mb-20">
          <motion.div
            className="group relative"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Effects */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 via-yellow-500/20 to-red-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

            <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-yellow-600 rounded-3xl shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-1000">
                <motion.div
                  className="w-full h-full"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 200%",
                  }}
                />
              </div>

              <div className="relative z-10 p-10 lg:p-16">
                {/* Header Section */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-yellow-200 uppercase tracking-wider">
                      Tác Động Xã Hội
                    </span>
                    <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                  </motion.div>

                  <motion.h2
                    className="text-4xl lg:text-5xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Phân Tích{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                      Tác Động Xã Hội
                    </span>
                  </motion.h2>

                  <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  />
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Text Content */}
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Main Paragraph */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-lg lg:text-xl leading-relaxed text-white/90 text-justify">
                        Đầu tư và tăng trưởng kinh tế không chỉ tạo ra việc làm
                        và tăng thu nhập mà còn đặt ra thách thức về đào tạo
                        nguồn nhân lực, hạ tầng đô thị và phân bố lợi ích.
                      </p>
                    </motion.div>

                    {/* Challenge Section */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        Thách Thức Phát Triển
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        Việc phát triển mạnh ở một số vùng đô thị lớn có thể dẫn
                        tới{" "}
                        <span className="text-yellow-300 font-semibold">
                          chênh lệch vùng miền
                        </span>{" "}
                        nếu không có chính sách hỗ trợ kịp thời.
                      </p>
                    </motion.div>

                    {/* Solution Section */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        Giải Pháp Bền Vững
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        Cần có chính sách kết hợp đào tạo kỹ năng cho lao động,
                        mở rộng an sinh xã hội và đảm bảo phát triển bền
                        vững—bao gồm cả kinh tế xanh và bảo vệ môi trường.
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Visualizations & Stats */}
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {/* Impact Metrics */}
                    <div className="grid grid-cols-2 gap-6">
                      {impactMetrics.map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 group/metric hover:bg-white/15 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <motion.div
                            className="text-3xl font-bold text-white mb-2"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                          >
                            {metric.value}
                          </motion.div>
                          <div className="text-yellow-200 text-sm font-medium">
                            {metric.label}
                          </div>
                          <motion.div
                            className="w-full h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mt-3 opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300"
                            whileHover={{ scaleX: 1.1 }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Key Focus Areas */}
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                    >
                      <h3 className="text-xl font-semibold text-yellow-300 mb-4 text-center">
                        Trọng Tâm Phát Triển
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {focusAreas.map((area, index) => (
                          <motion.div
                            key={area}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300 group/focus"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + index * 0.1 }}
                            whileHover={{ x: 3 }}
                          >
                            <motion.div
                              className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover/focus:bg-yellow-400/30 transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                            >
                              <span className="text-yellow-300 text-lg">✓</span>
                            </motion.div>
                            <span className="text-white/80 text-sm font-medium">
                              {area}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                    >
                      <motion.button
                        className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Đóng Góp Ý Kiến</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </motion.span>

                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-white rounded-2xl blur opacity-0 group-hover/btn:opacity-40 transition duration-500 -z-10"></div>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-6 h-6 bg-yellow-300 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-4 h-4 bg-red-300 rounded-full opacity-30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 2,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Hạn chế & rủi ro */}
        <AnimatedSection className="mb-20">
          <motion.div
            className="group relative"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Effects */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-50 to-yellow-50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 lg:p-10">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-yellow-200 uppercase tracking-wider">
                      Thách Thức & Rủi Ro
                    </span>
                    <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                  </motion.div>

                  <motion.h2
                    className="text-4xl lg:text-5xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Hạn Chế &{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                      Rủi Ro
                    </span>
                  </motion.h2>

                  <motion.p
                    className="text-lg text-white/80 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Những thách thức cần được giải quyết để đảm bảo phát triển
                    bền vững
                  </motion.p>

                  <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mx-auto mt-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {limitations.map((limitation, index) => (
                    <AnimatedItem key={index} variants={fadeInUp}>
                      <motion.div
                        className="group/card relative bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-lg border border-red-100 overflow-hidden h-full"
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          boxShadow: "0 20px 40px -10px rgba(239, 68, 68, 0.3)",
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Gradient Border Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600 to-yellow-500 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500"></div>

                        <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                          {/* Icon Header */}
                          <motion.div
                            className="flex items-center gap-4 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                                {getRiskIcon(index)}
                              </div>
                              <motion.div
                                className="absolute -inset-1 bg-gradient-to-br from-red-600 to-yellow-500 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition duration-500"
                                animate={{ rotate: [0, 180, 360] }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            </motion.div>

                            <div className="flex-1">
                              <motion.h3
                                className="text-lg font-bold text-gray-900 group-hover/card:text-red-700 transition-colors duration-300 line-clamp-2"
                                whileHover={{ x: 2 }}
                              >
                                {limitation}
                              </motion.h3>
                              <motion.div
                                className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mt-2"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.1 + 0.4,
                                  duration: 0.6,
                                }}
                              />
                            </div>
                          </motion.div>

                          {/* Description */}
                          <motion.p
                            className="text-gray-600 leading-relaxed mb-6 flex-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {getRiskDescription(limitation)}
                          </motion.p>

                          {/* Impact Indicator */}
                          <motion.div
                            className="mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                          >
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Mức độ ảnh hưởng</span>
                              <span className="font-semibold text-red-600">
                                {getRiskImpact(limitation)}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-red-600"
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: getRiskImpactWidth(limitation),
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: index * 0.2 + 0.7,
                                }}
                              />
                            </div>
                          </motion.div>

                          {/* Solution Hints */}
                          <motion.div
                            className="mt-auto"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.7 }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span>Giải pháp khả thi</span>
                              </div>

                              <motion.div
                                className="flex items-center gap-1 text-xs text-gray-400"
                                whileHover={{ scale: 1.05 }}
                              >
                                <span>Chi tiết</span>
                                <motion.span
                                  animate={{ x: [0, 2, 0] }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                >
                                  →
                                </motion.span>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Corner Decoration */}
                        <motion.div
                          className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400 rounded-tr-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2 }}
                        />

                        {/* Floating Element */}
                        <motion.div
                          className="absolute bottom-4 left-4 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover/card:opacity-30"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0, 0.3, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                      </motion.div>
                    </AnimatedItem>
                  ))}
                </div>

                {/* Section Footer */}
                <motion.div
                  className="text-center mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    className="inline-flex items-center gap-4 px-6 py-4 bg-red-50 rounded-2xl border border-red-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-700 font-medium">
                      Các giải pháp đang được nghiên cứu và triển khai để khắc
                      phục
                    </p>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Kết luận */}
        <AnimatedSection className="mb-20">
          <motion.div
            className="group relative"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Effects */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 via-yellow-500/20 to-red-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

            {/* Main Container */}
            <div className="relative bg-gradient-to-br from-red-700 via-red-800 to-yellow-600 rounded-3xl shadow-2xl overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full translate-x-1/2 translate-y-1/2"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-400 rounded-full -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.08, 0.18, 0.08],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                  }}
                />
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-1000">
                <motion.div
                  className="w-full h-full"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 200%",
                  }}
                />
              </div>

              <div className="relative z-10 p-10 lg:p-16 text-center">
                {/* Header Section */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-yellow-200 uppercase tracking-wider">
                      Tổng Kết & Định Hướng
                    </span>
                    <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                  </motion.div>

                  <motion.h2
                    className="text-4xl lg:text-6xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Kết Luận{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                      & Tầm Nhìn
                    </span>
                  </motion.h2>

                  <motion.div
                    className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  />
                </motion.div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                  {/* Achievement Highlight */}
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.p
                      className="text-2xl lg:text-3xl leading-relaxed text-white/90 font-light italic text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      "Kinh tế Việt Nam sau 2018 đã đạt được{" "}
                      <span className="font-bold text-yellow-300 not-italic">
                        nhiều thành tựu ấn tượng
                      </span>{" "}
                      song hành cùng thách thức cần vượt qua."
                    </motion.p>
                  </motion.div>

                  {/* Key Focus Areas */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    {focusAreas2.map((area, index) => (
                      <motion.div
                        key={area.title}
                        className="group/focus bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                      >
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {area.icon}
                        </motion.div>
                        <h3 className="text-lg font-semibold text-yellow-300 mb-2 text-center">
                          {area.title}
                        </h3>
                        <p className="text-white/70 text-sm text-center leading-relaxed">
                          {area.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Call to Action Section */}
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                  >
                    <motion.p
                      className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                    >
                      Cần đẩy mạnh đổi mới thể chế, nâng cao năng suất lao động
                      và phát triển kinh tế xanh để chuyển từ{" "}
                      <span className="text-yellow-300 font-semibold">
                        tăng trưởng số lượng
                      </span>{" "}
                      sang{" "}
                      <span className="text-green-300 font-semibold">
                        chất lượng bền vững
                      </span>
                      .
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 }}
                    >
                      <motion.button
                        className="group/btn-primary inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg">Bắt Đầu Hành Động</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </motion.span>

                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur opacity-0 group-hover/btn-primary:opacity-40 transition duration-500 -z-10"></div>
                      </motion.button>

                      <motion.button
                        className="group/btn-secondary inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Tìm Hiểu Thêm</span>
                        <motion.span
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-8 h-8 bg-yellow-300 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-6 h-6 bg-red-300 rounded-full opacity-30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 2,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-1/4 w-4 h-4 bg-white rounded-full opacity-20"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </main>

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

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Main Footer Content */}
          <div className="py-16 px-4">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">VN</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
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
                  {["Kinh tế", "Văn hóa", "Xã hội", "Hạ tầng", "Giáo dục"].map(
                    (link, index) => (
                      <motion.li key={link} whileHover={{ x: 5 }}>
                        <a
                          href="#"
                          className="text-white/70 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {link}
                        </a>
                      </motion.li>
                    )
                  )}
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

            {/* Bottom Footer */}
            <motion.div
              className="pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-white/60 text-sm">
                    © 2025 Việt Nam Đổi Mới. Tất cả các quyền được bảo lưu.
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    Nguồn dữ liệu: Các cơ quan báo chí và thống kê chính thống
                    của Việt Nam
                  </p>
                </div>

                <div className="flex gap-6 text-white/50 text-sm">
                  <motion.a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Chính sách bảo mật
                  </motion.a>
                  <motion.a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Điều khoản sử dụng
                  </motion.a>
                  <motion.a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Liên hệ
                  </motion.a>
                </div>
              </div>

              {/* Back to Top Button */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
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
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
