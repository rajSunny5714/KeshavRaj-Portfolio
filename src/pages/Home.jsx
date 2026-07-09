import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import {
  FaCloud,
  FaMicrosoft,
  FaAws,
  FaNetworkWired,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  const roles = [
    {
      icon: FaMicrosoft,
      title: "Microsoft Azure",
      desc: "Azure Administration & Cloud Infrastructure",
    },
    {
      icon: FaAws,
      title: "Amazon Web Services",
      desc: "Cloud Assessment & Infrastructure",
    },
    {
      icon: FaCloud,
      title: "Cloud Migration",
      desc: "Enterprise Workload Migration",
    },
    {
      icon: FaNetworkWired,
      title: "Cloud Networking",
      desc: "VNets, VPC, NSG & Security Groups",
    },
    {
      icon: FaShieldAlt,
      title: "Identity & Access",
      desc: "IAM, RBAC & Security",
    },
    {
      icon: FaTools,
      title: "DevOps & IaC",
      desc: "Terraform & Azure DevOps",
    },
  ];

  return (
  <div
    className={`${containerBg} min-h-screen transition-colors duration-300`}
  >
    {/* Hero Section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start pt-14">
        {/* Left Section */}
        <div className="flex flex-col text-center md:text-left">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Keshav Raj",
                  1500,
                  "",
                  500,
                ]}
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
          
          <p
            className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${textSecondary}`}
          >
            Cloud Engineer | Azure Administrator | AWS Enthusiast
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-8 ${textPrimary}`}
          >
            I'm a Cloud Engineer with hands-on experience in{" "}
            <span className="font-semibold text-blue-500">
              Microsoft Azure
            </span>
            ,{" "}
            <span className="font-semibold text-blue-500">
              Amazon Web Services
            </span>
            , Cloud Migration, Infrastructure Assessment, Landing Zone Setup,
            and Infrastructure Automation using{" "}
            <span className="font-semibold">Terraform</span>.

            <br />
            <br />

            Currently working at{" "}
            <span className="font-semibold text-blue-500">
              Wipro Limited
            </span>
            , I contribute to enterprise cloud transformation projects by
            supporting Azure migration activities, DevOps pipelines,
            infrastructure provisioning, monitoring, and cloud governance.

            <br />
            <br />

            I enjoy designing secure, scalable cloud infrastructure while
            continuously expanding my expertise in Azure, AWS, DevOps, and
            modern cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
                to="about"
                smooth={true}
                duration={700}
                offset={-80}
              >
              <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30">
                More About Me
              </button>
            </Link>

            <Link
              to="connect"
              smooth={true}
              duration={700}
              offset={-80}
            >
              <button
                className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                  isDark
                    ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-8">
          <div
            className={`relative w-52 sm:w-64 md:w-72 lg:w-80 aspect-[4/5] rounded-2xl overflow-hidden border-4 ${
              isDark ? "border-blue-900/40" : "border-blue-200"
            } shadow-2xl`}
          >
            <img
              src="./pro.png"
              alt="Keshav Raj"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roles.map((role, idx) => {
              const Icon = role.icon;

              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isDark
                      ? "bg-blue-950 hover:bg-blue-900/70"
                      : "bg-blue-100 hover:bg-blue-200"
                  }`}
                >
                  <Icon className={`text-2xl ${textSecondary}`} />

                  <div>
                    <h4
                      className={`font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {role.title}
                    </h4>

                    <p className={`text-sm ${textPrimary}`}>{role.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    {/* ================= Stats Section ================= */}

    <div
      className={`border-y ${
        isDark
          ? "border-gray-800 bg-black"
          : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-500">4+</h3>
            <p className={textPrimary}>Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">Azure</h3>
            <p className={textPrimary}>Administrator</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">AWS</h3>
            <p className={textPrimary}>Cloud Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">Security</h3>
            <p className={textPrimary}>Fundamentals</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default Home;