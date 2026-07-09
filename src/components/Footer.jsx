import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Youtube } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <footer
      className={`${
        isDark ? "bg-black border-blue-900/40" : "bg-white border-blue-100"
      } border-t transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h3
            className={`text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent`}
          >
           👨‍💻 Keshav Raj
          </h3>

          <div className="flex items-center gap-3">
            {/* Made with Coffee & Fun Text */}
            <span className="text-blue-600 font-medium text-sm">
              Made with ☕ & Fun
            </span>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300 flex items-center justify-center"
              title="YouTube Channel"
            >
              <Youtube size={20} />
            </a>
          </div>
          <p
            className={`${isDark ? "text-gray-500" : "text-gray-600"} text-sm`}
          >
            © 2026 Keshav Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
