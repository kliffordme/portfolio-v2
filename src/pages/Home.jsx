import About from "../components/About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import TechStack from "../components/TechStack";

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
        Continuously learning new skills through courses, exploring emerging technologies, and staying updated with industry trends to enhance problem-solving, adaptability, and professional growth.
      </div>
      <div className="col-span-1 md:col-span-2 border border-[#eee] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eos doloremque enim ratione, accusamus suscipit obcaecati dolores? Nostrum beatae non culpa reprehenderit, libero similique magnam perferendis. Odit, esse. Perferendis hic perspiciatis quidem. Aliquam fuga ex quos quaerat quis rerum ducimus modi delectus similique quas eum, fugit aperiam quisquam veritatis dolorum!
      </div>
      <div className="col-span-1 md:col-span-3 border border-[#eee] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum omnis amet delectus qui maxime, sequi quidem modi impedit necessitatibus soluta, dolorum aspernatur recusandae autem ad eum. Aspernatur animi doloremque adipisci mollitia asperiores, in accusamus fugit dolore eaque dolorem optio tenetur similique, autem ut, natus quos amet omnis quia tempore.
      </div>
    </div>
  );
}

export default Home;