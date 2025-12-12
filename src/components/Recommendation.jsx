import { useState, useEffect, useRef, useContext } from "react";
import recommendationIcon from '../assets/recommendation.svg';
import { ThemeContext } from "../App";

const recommendations = [
  {
    text: `Klifford and I worked together in various projects where I saw his tenacity to deliver what he promised to do. He is able to meet deadlines without sacrificing the quality of the output, and at times even exceeding the set goals. His dedication to pursue his craft and excellence truly stands out.”`,
    name: "Andrew Knapp",
    role: "Application Development Analyst at Accenture",
  },
  {
    text: `“Working with Klifford was a pleasure. His technical expertise and calm attitude under pressure made complex projects smooth and enjoyable to work on.”`,
    name: "John Andrew Moquia",
    role: "Software Engineer at Vertere Global Solutions, Inc.",
  },
  {
    text: `Klifford has strong attention to detail and is always willing to go the extra mile to make sure everything is done right. A dependable and talented teammate.”`,
    name: "John Reyes",
    role: "Frontend Developer at GCash",
  },
];

export default function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useRef([]);

  const { theme } = useContext(ThemeContext);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % recommendations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Measure max height after first render
  useEffect(() => {
    const heights = refs.current.map((el) => el?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, []);

  return (
    <div className="border border-[#eee] rounded-2xl p-6 relative overflow-hidden">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <img
            src={recommendationIcon}
            alt="recommendation-icon"
            style={{
              width: 20,
              height: 20,
              marginBottom: 3,
              filter: theme === 'dark' ? 'invert(1) brightness(2)' : 'none',
              // verticalAlign: 'middle',
            }}
            title="Suitcase"
          />
        Recommendations
      </h2>

      {/* Fixed height container for slides */}
      <div
        className="relative transition-all duration-500 ease-in-out"
        style={{ minHeight: maxHeight ? `${maxHeight}px` : "200px" }}
      >
        {recommendations.map((rec, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="italic leading-relaxed mb-4">{rec.text}</p>

            <div className="border-t border-gray-200 pt-3">
              <p className="font-semibold ">{rec.name}</p>
              <p className="text-sm ">{rec.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {recommendations.map((_, i) => (
          <span
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              i === activeIndex ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
