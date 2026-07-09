import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaLaptopCode,
  FaDatabase,
  FaCode,
  FaCalculator,
} from "react-icons/fa";

const Education = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-200";

  const education = [
    {
      icon: <FaUniversity />,
      degree: "B.Tech",
      specialization: "Information System",
      institute: "BITS Pilani Work Integrated Learning Programmes",
      duration: "Apr 2023 – Aug 2026",
      grade: "8.8 / 10",
      description:
        "Pursuing a Work Integrated Learning Programme focused on Information Systems, cloud technologies, networking, software engineering, and enterprise computing while working as a Cloud Engineer.",
      skills: [
        "Information Systems",
        "Calculus",
        "Virtual Private Network (VPN)",
        "Cloud Computing",
        "Computer Networks",
        "Software Engineering",
      ],
    },

    {
      icon: <FaLaptopCode />,
      degree: "Diploma",
      specialization: "Computer Science Engineering",
      institute: "Government Polytechnic Muzaffarpur",
      duration: "Sep 2019 – Aug 2022",
      grade: "CGPA: 8.5 / 10",
      description:
        "Built a strong foundation in programming, database management, operating systems, networking, and software development fundamentals.",
      skills: [
        "C Programming",
        "DBMS",
        "Data Structures",
        "Operating Systems",
        "Computer Networks",
        "Java",
        "SQL",
        "HTML",
        "CSS",
        "Software Development",
      ],
    },

    {
      icon: <FaSchool />,
      degree: "Matriculation",
      specialization: "Secondary Education",
      institute: "Paramount Academy",
      duration: "Apr 2018 – Apr 2019",
      grade: "CGPA: 7.7 / 10",
      description:
        "Completed secondary education with emphasis on Mathematics, Science and Computer fundamentals.",
      skills: [
        "Mathematics",
        "Science",
        "HTML",
        "Computer Fundamentals",
      ],
    },
  ];

  return (
    <section
      className={`${containerBg} min-h-screen py-20 px-5 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold ${headingColor}`}>
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Education
            </span>
          </h1>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5 mb-6"></div>

          <p className={`max-w-3xl mx-auto text-lg ${textPrimary}`}>
            My academic journey has provided a strong foundation in computer
            science, software engineering, networking, cloud computing, and
            enterprise technologies.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative border-l-4 border-blue-500 ml-6">

          {education.map((edu, index) => (
            <div key={index} className="relative mb-14 ml-8">

              <div className="absolute -left-[52px] w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
                {edu.icon}
              </div>

              <div
                className={`${cardBg} border ${borderColor} rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >

                <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6">

                  <div>
                    <h2 className={`text-2xl font-bold ${headingColor}`}>
                      {edu.degree}
                    </h2>

                    <p className={`text-lg font-semibold ${textSecondary}`}>
                      {edu.specialization}
                    </p>

                    <p className={`${textPrimary} mt-1`}>
                      {edu.institute}
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-0 text-right">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        isDark
                          ? "bg-blue-900 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {edu.duration}
                    </span>

                    <p className={`mt-3 font-semibold ${textPrimary}`}>
                      {edu.grade}
                    </p>
                  </div>
                </div>

                <p className={`${textPrimary} mb-6`}>
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDark
                          ? "bg-gray-800 text-blue-300"
                          : "bg-white border border-blue-200 text-blue-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Education Highlights */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center`}
          >
            <FaGraduationCap
              className={`text-5xl mx-auto mb-4 ${textSecondary}`}
            />

            <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>
              B.Tech
            </h3>

            <p className={textPrimary}>
              Information Systems with specialization in enterprise and cloud
              technologies.
            </p>
          </div>

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center`}
          >
            <FaCode className={`text-5xl mx-auto mb-4 ${textSecondary}`} />

            <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>
              Programming
            </h3>

            <p className={textPrimary}>
              Strong fundamentals in C, Java, SQL, HTML and software
              development.
            </p>
          </div>

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center`}
          >
            <FaDatabase className={`text-5xl mx-auto mb-4 ${textSecondary}`} />

            <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>
              Database
            </h3>

            <p className={textPrimary}>
              Academic foundation in DBMS, relational databases and SQL.
            </p>
          </div>

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center`}
          >
            <FaCalculator
              className={`text-5xl mx-auto mb-4 ${textSecondary}`}
            />

            <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>
              Mathematics
            </h3>

            <p className={textPrimary}>
              Strong analytical and problem-solving skills through Mathematics
              and Engineering coursework.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;