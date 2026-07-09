import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-scroll";
import {
  FaCloud,
  FaMicrosoft,
  FaAws,
  FaProjectDiagram,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const journey = [
    {
      icon: <FaMicrosoft className="text-2xl" />,
      title: "Azure Migration",
      description: "Worked on enterprise Azure migration projects at Wipro with focus on infrastructure provisioning and migration support."
    },
    {
      icon: <FaCloud className="text-2xl" />,
      title: "Cloud Discovery",
      description: "Participated in infrastructure discovery, assessment and migration readiness across Azure and AWS."
    },
    {
      icon: <FaProjectDiagram className="text-2xl" />,
      title: "Landing Zone",
      description: "Supported Azure/AWS landing zone setup, networking, IAM, governance and documentation."
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Continuous Learning",
      description: "Microsoft Azure Administrator Associate certified with continuous learning in cloud technologies."
    },
  ];

  const skills = [
    { category: "Cloud", items:["Microsoft Azure","AWS","Cloud Migration","Landing Zone"]},
    { category: "DevOps", items:["Terraform","Azure DevOps","Git","GitHub"]},
    { category: "Infrastructure", items:["Azure VM","VNet","EC2","VPC","IAM","RBAC"]},
  ];

  return (
    <div className={`${containerBg} min-h-screen py-20`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold ${headingColor}`}>About <span className="text-blue-500">Me</span></h1>
          <p className={`mt-6 text-lg ${textPrimary}`}>
            Cloud Engineer passionate about designing secure, scalable and reliable cloud infrastructure.
          </p>
        </div>

        <div className={`rounded-2xl border ${borderColor} ${cardBg} p-8 mb-16`}>
          <h2 className={`text-3xl font-bold mb-5 ${headingColor}`}>Professional Journey</h2>
          <p className={`${textPrimary} text-lg leading-8`}>
            I'm <span className="text-blue-500 font-semibold">Keshav Raj</span>, a Cloud Engineer at Wipro Limited with experience in Microsoft Azure and AWS environments.
            I have contributed to enterprise cloud migration projects, infrastructure assessment, landing zone implementation,
            Azure DevOps pipeline activities, Terraform workflows, cloud monitoring and infrastructure documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {journey.map((item,index)=>(
            <div key={index} className={`rounded-xl border ${borderColor} ${cardBg} p-6`}>
              <div className="text-blue-500 mb-3">{item.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>{item.title}</h3>
              <p className={textPrimary}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skills.map((group,index)=>(
            <div key={index} className={`rounded-xl border ${borderColor} ${cardBg} p-6`}>
              <h3 className={`text-xl font-bold mb-4 ${headingColor}`}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s,i)=>(
                  <span key={i} className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl border ${borderColor} ${cardBg} p-8`}>
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>Highlights</h2>
          <ul className={`${textPrimary} space-y-3 list-disc pl-5`}>
            <li>4+ years of experience in Cloud Engineering.</li>
            <li>Worked on Azure Migration and AWS Discovery projects.</li>
            <li>Hands-on exposure to Azure DevOps, Terraform, IAM and RBAC.</li>
            <li>Microsoft Certified: Azure Administrator Associate.</li>
          </ul>
          <Link
            to="experience"              
            smooth={true}
            duration={700}
            offset={-80}
            className="inline-flex mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg items-center gap-2 cursor-pointer transition-all duration-300"
          >
            View My Work <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
