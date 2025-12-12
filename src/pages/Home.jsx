import About from "../components/About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import RecentProjects from "../components/Projects";
import TechStack from "../components/TechStack";
import Recommendations from "../components/Recommendation";
import RecentCertifications from "../components/Certifications";

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full text-[14px]">
      {/* Wide block */}
      <div className="col-span-1 md:col-span-2 p-6 border border-[#eee] rounded-lg">
        <About />
      </div>

      {/* Tall block */}
      <div className="row-span-2 border border-[#eee] p-6 rounded-lg">
        <ExperienceTimeline />
      </div>

      {/* Normal blocks */}
      <div className="col-span-1 md:col-span-2 border border-[#eee] p-6 rounded-lg">
        <TechStack />
      </div>

      <div className="col-span-1 md:col-span-1 border border-[#eee] p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Beyond Coding</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente quam corrupti fugit repellat excepturi dicta exercitationem sit perferendis est?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, harum?
      </div>

      <div className="col-span-1 md:col-span-2 border border-[#eee] p-6 rounded-lg">
        <RecentProjects />
      </div>

      <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentCertifications />
        <Recommendations />
      </div>

    </div>
  );
}

export default Home;
