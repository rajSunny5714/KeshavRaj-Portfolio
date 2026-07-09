import React, { useEffect, useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚙️" },
      { name: "Sql", icon: "⚙️" },
    ],
  },
  {
    title: "Cloud Services",
    skills: [
      { name: "Azure Virtual Machines", icon: "🖥️" },
      { name: "Azure Virtual Network", icon: "🌐" },
      { name: "Network Security Groups", icon: "🔐" },
      { name: "Azure Storage", icon: "💾" },
      { name: "Amazon EC2", icon: "🟧" },
      { name: "Amazon VPC", icon: "📡" },
    ],
  },
  {
    title: "Security & Operating Systems",
    skills: [
      { name: "Azure IAM", icon: "🛡️" },
      { name: "RBAC", icon: "🔑" },
      { name: "Linux", icon: "🐧" },
      { name: "Windows Server", icon: "🪟" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Terraform", icon: "🏗️" },
      { name: "Azure DevOps", icon: "🚀" },
      { name: "Git", icon: "🐙" },
      { name: "GitHub", icon: "💻" },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "Microsoft Azure", icon: "☁️" },
      { name: "AWS", icon: "🌩️" },
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const cardBg = isDark
    ? "bg-blue-950/50 border-blue-900/40"
    : "bg-blue-50 border-blue-200";

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300 py-20 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-5 pt-4">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6"></div>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${textPrimary}`}
          >
            Technical expertise across Microsoft Azure, AWS, DevOps,
            Infrastructure as Code, Security, and Programming.
          </p>
        </div>

        {/* Skills Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`${cardBg} border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                isDark
                  ? "hover:shadow-blue-900/30"
                  : "hover:shadow-blue-200/60"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease ${index * 0.15}s forwards`,
                opacity: 0,
              }}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${textSecondary} border-b pb-3 ${
                  isDark ? "border-blue-800" : "border-blue-200"
                }`}
              >
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-default ${
                      isDark
                        ? "bg-blue-900/40 text-blue-200 border border-blue-800 hover:bg-blue-800/60"
                        : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-100"
                    }`}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
                {/* ================= CTA Section ================= */}

        <div className="text-center mt-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
            Always Learning
          </h2>

          <p
            className={`max-w-3xl mx-auto text-lg leading-relaxed ${textPrimary}`}
          >
            I continuously expand my expertise in Cloud Computing, Microsoft
            Azure, AWS, Infrastructure as Code, DevOps, Linux, Networking, and
            Security by working on real-world enterprise projects, pursuing
            industry certifications, and staying updated with modern cloud
            technologies.
          </p>
        </div>
      </div>

      {/* ================= Animation ================= */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}