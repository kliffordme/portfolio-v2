import React, { useContext } from "react";
import { ThemeContext } from "../App";
import CheckIcon from '../assets/check.jsx';

const certifications = [
  { title: "Huawei Developer Expert", issuer: "Huawei" },
  { title: "Generative AI Leader", issuer: "Google" },
  { title: "Software Engineering", issuer: "TestDome" },
  { title: "Generative AI Professional", issuer: "Oracle" },
];

export default function RecentCertifications() {
      const { theme } = useContext(ThemeContext);
    

  return (
    <div className="border border-[#eee] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
        <CheckIcon
            style={{
            width: 18,
            height: 18,
            }}
        />
        Recent Certifications
        </h2>
        <a
          href="#"
          className={`text-sm hover:underline font-medium ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          View All &rarr;
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`${
            theme === "dark" ? "" : "bg-gray-50 hover:bg-gray-100  "}  
            transition-colors border border-[#eee] rounded-lg p-3`}
          >
            <p className="font-semibold text-sm">{cert.title}</p>
            <p className="text-xs text-gray-500">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
