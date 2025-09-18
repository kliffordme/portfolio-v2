import techStackIcon from '../assets/techstack.svg';
import { useContext } from 'react';
import { ThemeContext } from '../App';



function TechStack() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <img
              src={techStackIcon}
              alt="Tech-stack"
              style={{
                width: 25,
                height: 25,
                marginBottom: 3,
                filter: theme === 'dark' ? 'invert(1) brightness(2)' : 'none',
              }}
              title="Tech-stack"
            />
          Tech Stack
        </h2>
        <a href="#" className="text-sm text-black-600 hover:underline font-medium">View All &rarr;</a>
      </div>
      <div className="mb-3 mt-5">
        <span className="font-semibold text-[15px]">Frontend</span>
        <div className="flex flex-wrap gap-2 my-3">
          {["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200 dark:bg-[#222] dark:text-gray-200 dark:border-[#444]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <span className="font-semibold text-[15px]">Backend</span>
        <div className="flex flex-wrap gap-2 my-3">
          {["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200 dark:bg-[#222] dark:text-gray-200 dark:border-[#444]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <span className="font-semibold text-[15px]">DevOps &amp; Cloud</span>
        <div className="flex flex-wrap gap-2 my-3">
          {["AWS", "Docker", "Kubernetes", "GitHub Actions"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200 dark:bg-[#222] dark:text-gray-200 dark:border-[#444]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;