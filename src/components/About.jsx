import suitCaseIcon from '../assets/suitcase.svg';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function About() {
    const { theme } = useContext(ThemeContext);


  return (
    <>
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <img
            src={suitCaseIcon}
            alt="Suitcase"
            style={{
              width: 20,
              height: 20,
              marginBottom: 3,
              filter: theme === 'dark' ? 'invert(1) brightness(2)' : 'none',
              // verticalAlign: 'middle',
            }}
            title="Suitcase"
          />
          About Me
        </h2>
          I’m a full-stack software engineer with expertise in JavaScript, Python, and PHP,
          specializing in building modern websites, scalable web applications, and mobile solutions.
          My work spans SEO, digital marketing, and technical tutorials, helping businesses grow
          their online presence while streamlining operations through smart software solutions.
          <br /><br />
          I’ve collaborated with startups and MSMEs to transform their processes and accelerate
          growth with technology. Recently, I’ve been exploring the frontier of artificial
          intelligence, focusing on integrating AI into modern applications. This includes developing
          AI-powered solutions, intelligent systems, and leveraging generative AI to enhance
          workflows, unlock efficiency, and deliver next-generation experiences.
    </>
  );
}

export default About;