import techStackIcon from '../assets/techstack.svg';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function TechStack() {
  const { theme } = useContext(ThemeContext);

  // Badge styles for light and dark
  const badgeLight =
    "px-3 py-1 rounded-sm text-gray-700 text-xs font-medium border border-gray-200";
  const badgeDark =
    "px-3 py-1 rounded-sm bg-[#222] text-gray-200 text-xs font-medium border border-[#444]";

  const badgeClass = theme === "dark" ? badgeDark : badgeLight;

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <img
            src={techStackIcon}
            alt="Tech-stack"
            style={{
              width: 20,
              height: 20,
              marginBottom: 3,
              filter: theme === "dark" ? "invert(1) brightness(2)" : "none",
            }}
            title="Tech-stack"
          />
          Tech Stack
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

      {/* Frontend */}
      <div className="mb-3 mt-5">
        <span className="font-semibold text-[15px]">Frontend</span>
        <div className="flex flex-wrap gap-2 my-3">
          {["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"].map(
            (tech) => (
              <span key={tech} className={badgeClass}>
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Backend */}
      <div className="mb-3">
        <span className="font-semibold text-[15px]">Backend</span>
        <div className="flex flex-wrap gap-2 my-3">
          {["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"].map((tech) => (
            <span key={tech} className={badgeClass}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* DevOps & Cloud */}
      <div>
        <span className="font-semibold text-[15px]">DevOps &amp; Cloud</span>
        <div className="flex flex-wrap gap-2 my-3">
          {["AWS", "Docker", "Kubernetes", "GitHub Actions"].map((tech) => (
            <span key={tech} className={badgeClass}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;
