import React, { useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  const cardBg = isDark
    ? "bg-blue-950 hover:bg-blue-900/50"
    : "bg-blue-50 hover:bg-blue-100";

  const borderColor = isDark
    ? "border-blue-900/40"
    : "border-blue-100";

  /* ================= Awards ================= */

  const awards = [
    {
      title: "Learning Achievement Award",
      desc: "Recognized for continuous learning, successful completion of technical training, and commitment to professional development.",
    },
    {
      title: "Xcelerate Warrior Award",
      desc: "Honored for technical agility, rapid skill acquisition, and outstanding contributions to Cloud Migration and Deployment projects.",
    },
  ];

  /* ================= Certifications ================= */

  const certifications = [
    {
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
    },
    {
      title: "GitHub Administration",
      issuer: "Microsoft",
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
    },
    {
      title: "Introduction to Linux",
      issuer: "The Linux Foundation",
    },
    {
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* ================= Awards ================= */}

        <div className="mb-20">
          <h3
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            🏆 Awards
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`rounded-2xl border ${borderColor} ${cardBg} p-6 transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaAward className="text-yellow-500 text-3xl" />

                  <h4
                    className={`text-xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {award.title}
                  </h4>
                </div>

                <p className={textPrimary}>{award.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Certifications ================= */}

        <div className="mb-20">
          <h3
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            📜 Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`rounded-2xl border ${borderColor} ${cardBg} p-5 transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-start gap-4">
                  <FaCertificate className="text-blue-500 text-2xl mt-1" />

                  <div>
                    <h4
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {cert.title}
                    </h4>

                    <p className={`mt-2 ${textSecondary}`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </div>
  );
};
export default Work;