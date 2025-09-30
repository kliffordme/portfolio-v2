import React, { useContext } from "react";
import { ThemeContext } from "../App";
import experienceIcon from "../assets/experience.svg";

const experiences = [
  { id: 1, title: "Internship", year: "2019", company: "KSM Outsourcing Smart Solutions", completed: true },
  { id: 1, title: "Senior Developer", year: "2019", company: "Mindanao Business and IT Solutions Corp", completed: true },
  { id: 2, title: "Mid Level Developer", year: "2023", company: "Red Core I.T Solutions", completed: true },
  { id: 3, title: "Software Engineer", year: "2023", company: "Unicare Labs PH", completed: false },
  { id: 4, title: "Software Engineer", year: "2023", company: "BNN Technologies", completed: false },
  { id: 5, title: "Senior Frontend Developer", year: "2025", company: "Cayuse", completed: false },
];

export default function ExperienceTimeline() {
  const { theme } = useContext(ThemeContext);

  // Theme-based colors
  const lineColor = theme === "dark" ? "#444" : "#ddd";
  const completedColor = theme === "light" ? "#fff" : "#222";
  const currentColor = "#3498db"; // Same for both themes
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const yearText = theme === "dark" ? "text-gray-300" : "text-gray-700";

  // Latest first
  const reversedExperiences = [...experiences].reverse();

  return (
    <>
      {/* Title */}
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <img
          src={experienceIcon}
          alt="Experience"
          style={{
            width: 25,
            height: 25,
            marginBottom: 3,
            filter: theme === "dark" ? "invert(1) brightness(2)" : "none",
          }}
          title="Experience"
        />
        Experience
      </h2>

      <div className="relative flex flex-col items-start pb-4 px-2">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-8 bottom-0"
          style={{
            width: "2px",
            background: lineColor,
            zIndex: 0,
          }}
        />

        <ul className="space-y-12 w-full">
          {reversedExperiences.map((exp, idx) => (
            <li key={exp.id} className="relative flex items-center">
              {/* Progress circle */}
              <span
                className="absolute left-0 w-4 h-4 rounded-full flex items-center justify-center"
                style={{
                  background: idx === 0 ? currentColor : completedColor,
                  border: `2px solid ${lineColor}`,
                  zIndex: 1,
                }}
              ></span>

              {/* Experience info */}
              <div className="ml-8 mt-3 flex flex-col">
                <span className={`font-semibold text-[13px] ${textColor}`}>
                  {exp.title}
                </span>
                <span className={`text-[11px] ${yearText}`}>
                  {exp.company} • {exp.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
