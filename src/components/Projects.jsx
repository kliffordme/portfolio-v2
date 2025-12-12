import React, { useContext } from "react";
import { ThemeContext } from "../App";

const projects = [
  {
    id: 1,
    title: "CodeCred",
    desc: "Online certifications for programmers",
    url: "https://codecred.dev",
    link: "codecred.dev",
  },
  {
    id: 2,
    title: "BASE404",
    desc: "Online coding bootcamp",
    url: "https://base-404.com",
    link: "base-404.com",
  },
  {
    id: 3,
    title: "DIIN.PH",
    desc: "AI-powered wardrobe assistant",
    url: "https://diin.ph",
    link: "diin.ph",
  },
  {
    id: 4,
    title: "DYNAMIS Workout Tracker",
    desc: "AI-powered workout tracker",
    url: "https://dynamis-app.online",
    link: "dynamis-app.online",
  },
];

export default function RecentProjects() {
  const { theme } = useContext(ThemeContext);

  // Theme colors
  const cardBorder = theme === "dark" ? "border-[#333]" : "border-[#ddd]";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const descColor = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const buttonBg = theme === "dark" ? "bg-black text-white" : "bg-gray-200 text-black";

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`p-4 border ${cardBorder} rounded-lg`}
          >
            <h3 className={`text-lg font-semibold ${textColor}`}>{proj.title}</h3>
            <p className={`text-sm mb-2 ${descColor}`}>{proj.desc}</p>
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-2 py-1 rounded text-sm inline-block ${buttonBg}`}
            >
              {proj.link}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
