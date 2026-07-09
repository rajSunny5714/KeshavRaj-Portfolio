import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCloud,
  FaAws,
  FaMicrosoft,
  FaTools,
  FaShieldAlt,
  FaProjectDiagram,
  FaBuilding,
} from "react-icons/fa";

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-200";

  // Company Details
  const company = {
    name: "Wipro Limited",
    duration: "Oct 2022 – Present",
    designation:
      "Scholar Trainee → Administrator L1 → Cloud Engineer",
    location: "Bengaluru & Greater Noida • Hybrid",
  };

  // Roles Timeline
  const experiences = [
    {
      icon: <FaMicrosoft />,
      role: "Cloud Engineer",
      project: "Cloud Discovery, Assessment & Landing Zone Setup",
      client: "Phoenix Group (U.K.)",
      duration: "Sep 2025 – Feb 2026",
      responsibilities: [
        "Participated in discovery and assessment of existing cloud-hosted and on-premises infrastructure.",
        "Analyzed compute, storage, networking and security components to determine migration readiness.",
        "Contributed to cloud landing zone setup covering networking, identity, security and governance.",
        "Supported preparation and review of High-Level Design (HLD) and Low-Level Design (LLD) documentation.",
        "Worked closely with cloud architects and senior engineers during the planning and foundation phase.",
      ],
      technologies: [
        "AWS",
        "Amazon EC2",
        "Amazon VPC",
        "IAM",
        "Security Groups",
        "Terraform",
        "Landing Zone",
      ],
    },

    {
      icon: <FaCloud />,
      role: "Cloud Engineer",
      project: "Azure Migration Project",
      client: "State Street (U.S.A.)",
      duration: "Mar 2025 – Jul 2025",
      responsibilities: [
        "Migrated enterprise workloads from on-premises infrastructure to Microsoft Azure with minimal downtime.",
        "Prepared Azure resource build sheets based on Low-Level Design (LLD) specifications.",
        "Worked with Azure DevOps Pipelines and Terraform workflows for infrastructure deployment.",
        "Monitored Azure resources using Azure Monitor and Log Analytics.",
        "Collaborated with DevOps engineers and cross-functional teams during migration and post-migration support.",
        "Documented infrastructure configurations and operational procedures.",
      ],
      technologies: [
        "Microsoft Azure",
        "Azure Virtual Machines",
        "Azure Virtual Network",
        "NSG",
        "Azure Storage",
        "Azure DevOps",
        "Terraform",
        "Azure Monitor",
        "Log Analytics",
        "Azure Key Vault",
        "RBAC",
        "IAM",
      ],
    },

    {
      icon: <FaProjectDiagram />,
      role: "Administrator L1",
      project: "Infrastructure & Cloud Training",
      duration: "Jul 2024 – Oct 2024",
      responsibilities: [
        "Completed training in networking implementation and infrastructure fundamentals.",
        "Learned Oracle SQL and database concepts.",
        "Worked with Git and GitHub for version control.",
        "Built foundational knowledge of Microsoft Azure cloud services.",
      ],
      technologies: [
        "Networking",
        "Oracle SQL",
        "Git",
        "GitHub",
        "Azure",
      ],
    },

    {
      icon: <FaBuilding />,
      role: "Administrator L1",
      project: "Technical Support",
      duration: "Oct 2022 – Mar 2024",
      responsibilities: [
        "Resolved client issues through remote system administration and troubleshooting.",
        "Maintained high service availability by providing timely technical support.",
        "Enhanced troubleshooting and customer service skills.",
        "Self-learned Linux administration and Microsoft Azure alongside project responsibilities.",
      ],
      technologies: [
        "Linux",
        "RHEL",
        "Windows",
        "Remote Support",
        "Azure",
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
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Experience
            </span>
          </h1>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5 mb-6"></div>

          <p className={`max-w-4xl mx-auto text-lg ${textPrimary}`}>
            Cloud Engineer with experience in Microsoft Azure and AWS,
            specializing in cloud migration, infrastructure automation,
            DevOps, monitoring and enterprise cloud solutions.
          </p>
        </div>

        {/* Company Card */}

        <div
          className={`${cardBg} border ${borderColor} rounded-2xl p-8 mb-16 shadow-lg`}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center">

            <div>
              <h2 className={`text-3xl font-bold ${headingColor}`}>
                {company.name}
              </h2>

              <p className={`mt-2 font-semibold ${textSecondary}`}>
                {company.designation}
              </p>

              <p className={`${textPrimary} mt-2`}>
                {company.location}
              </p>
            </div>

            <span
              className={`mt-5 md:mt-0 px-5 py-2 rounded-full font-semibold ${
                isDark
                  ? "bg-blue-900 text-blue-300"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {company.duration}
            </span>

          </div>
        </div>

        {/* Timeline */}

        <div className="relative border-l-4 border-blue-500 ml-6">
                      {experiences.map((exp, index) => (
            <div key={index} className="relative mb-14 ml-8">

              {/* Timeline Icon */}

              <div className="absolute -left-[52px] w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
                {exp.icon}
              </div>

              {/* Experience Card */}

              <div
                className={`${cardBg} border ${borderColor} rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`}
              >
                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">

                  <div>

                    <h2 className={`text-2xl font-bold ${headingColor}`}>
                      {exp.role}
                    </h2>

                    <p className={`text-lg font-semibold ${textSecondary}`}>
                      {exp.project}
                    </p>

                    {exp.client && (
                      <p className="mt-2 text-sm text-blue-500 font-medium">
                        Client: {exp.client}
                      </p>
                    )}

                  </div>

                  <span
                    className={`self-start px-4 py-2 rounded-full text-sm font-semibold ${
                      isDark
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {exp.duration}
                  </span>

                </div>

                {/* Responsibilities */}

                <div className="mb-8">

                  <h3
                    className={`text-lg font-semibold mb-4 ${headingColor}`}
                  >
                    Key Responsibilities
                  </h3>

                  <ul className={`space-y-3 ${textPrimary}`}>

                    {exp.responsibilities.map((item, i) => (

                      <li
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <span className="text-blue-500 font-bold mt-1">
                          ✔
                        </span>

                        <span>{item}</span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Technologies */}

                <div>

                  <h3
                    className={`text-lg font-semibold mb-4 ${headingColor}`}
                  >
                    Technologies & Services
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {exp.technologies.map((tech, i) => (

                      <span
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          isDark
                            ? "bg-gray-800 text-blue-300"
                            : "bg-white border border-blue-200 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Highlights */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
                      {/* Cloud Migration */}

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg`}
          >
            <FaCloud
              className={`text-5xl mx-auto mb-4 ${textSecondary}`}
            />

            <h3
              className={`text-xl font-bold mb-3 ${headingColor}`}
            >
              Cloud Migration
            </h3>

            <p className={textPrimary}>
              Successfully contributed to enterprise workload migration
              from on-premises infrastructure to Microsoft Azure with
              minimal downtime and high availability.
            </p>
          </div>

          {/* AWS */}

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg`}
          >
            <FaAws
              className={`text-5xl mx-auto mb-4 ${textSecondary}`}
            />

            <h3
              className={`text-xl font-bold mb-3 ${headingColor}`}
            >
              AWS
            </h3>

            <p className={textPrimary}>
              Worked on cloud discovery, assessment, landing zone
              implementation and migration planning using AWS
              infrastructure services.
            </p>
          </div>

          {/* DevOps */}

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg`}
          >
            <FaTools
              className={`text-5xl mx-auto mb-4 ${textSecondary}`}
            />

            <h3
              className={`text-xl font-bold mb-3 ${headingColor}`}
            >
              DevOps
            </h3>

            <p className={textPrimary}>
              Hands-on experience with Azure DevOps Pipelines,
              Infrastructure as Code using Terraform, Git workflows
              and deployment automation.
            </p>
          </div>

          {/* Security */}

          <div
            className={`${cardBg} border ${borderColor} rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg`}
          >
            <FaShieldAlt
              className={`text-5xl mx-auto mb-4 ${textSecondary}`}
            />

            <h3
              className={`text-xl font-bold mb-3 ${headingColor}`}
            >
              Security
            </h3>

            <p className={textPrimary}>
              Experience with Azure RBAC, Identity & Access Management,
              Network Security Groups, Azure Key Vault and cloud
              governance best practices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;