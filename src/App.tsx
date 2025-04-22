import React from 'react'; 
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react'; 
import profilePic from './assets/profilepic.jpg'; // Adjust the path to your profile picture
 
const projects = [
  {
      id: 1,
      title: "Project A",
      description: "A brief description for project A.",
      codeUrl: "https://github.com/stephipie/vite-todo-app",
      demoUrl: "/todo-app/index.html",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Project B",
    description: "A brief description for project B.",
    codeUrl: "https://github.com/stephipie/memory-game",
    demoUrl: "/Memory-Game/index.html",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
},
{
    id: 3,
    title: "Project C",
    description: "A brief description for project C.",
    codeUrl: "https://github.com/stephipie/stephipie.github.io",
    demoUrl: "https://stephipie.github.io/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
},
{
    id: 4,
    title: "Project D",
    description: "A brief description for project D.",
    codeUrl: "https://github.com/stephipie/holos-app",
    demoUrl: "/project-d/index.html",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
}
];

function App() { 
  return ( 
    <div className="min-h-screen bg-gray-900 text-white"> 
      {/* Hero Section */} 
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4"> 
        <div className="max-w-4xl mx-auto text-center"> 
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 
to-purple-500 text-transparent bg-clip-text"> 
            Hi, I'm Stephi 
          </h1> 
          <p className="text-xl md:text-2xl text-gray-300 mb-8"> 
            Cloud- & Webdeveloperin | UI/UX Enthusiast | Business Managerin
          </p> 
          <div className="flex gap-4 justify-center mb-12"> 
            <a href="https://github.com/stephipie" target="_blank" rel="noopener noreferrer"  
               className="p-2 hover:text-blue-400 transition-colors"> 
              <Github size={24} /> 
            </a> 
            <a href="https://www.linkedin.com/in/stephanie-pietschmann" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-blue-400 transition-colors"> 
              <Linkedin size={24} /> 
            </a> 
            {/* Email Adresse wird noch */}
            <a href="mailto:your.email@example.com"  
               className="p-2 hover:text-blue-400 transition-colors"> 
              <Mail size={24} /> 
            </a> 
          </div> 
        </div> 
        <button  
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} 
          className="absolute bottom-8 animate-bounce" 
        > 
          <ChevronDown size={32} /> 
        </button> 
      </header> 
 
      {/* Projects Section */} 
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <img  
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a  
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a  
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div> 
                </div> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 
 
      {/* About Section */} 
      <section className="py-20 px-4 bg-gray-800"> 
        <div className="max-w-4xl mx-auto"> 
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2> 
          <div className="flex flex-col md:flex-row gap-12 items-center"> 
            <img               
src={profilePic} 
              alt="Profile"  
              className="w-64 h-64 rounded-full object-cover" 
            /> 
            <div> 
              <p className="text-lg text-gray-300 mb-6"> 
              I'm not only a <i>passionate developer</i> with experience in building <i>modern web applications</i>. 
              I also have a background in business management, which allows me to understand the needs of clients and users.
              </p>
              <p className="text-lg text-gray-300 mb-6"> 
              For me, life is a <i>creative process</i>, a journey towards personal development and fulfillment. 
              Every challenge and every hurdle is an opportunity to <i>learn something new</i> and <i>keep moving</i>. 
              This diversity and curiosity also characterizes me professionally.
              </p>
              <p className="text-lg text-gray-300 mb-6">
              <center className='font-semibold'>Let's grow together and define creative solutions!</center>
               </p>
              <div className="flex flex-wrap gap-3"> 
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'JavaScript', 'AWS', 'Azure'].map((skill) => 
( 
                  <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm"> 
                    {skill} 
                  </span> 
                ))} 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* Contact Section */} 
      <section className="py-20 px-4"> 
        <div className="max-w-4xl mx-auto text-center"> 
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2> 
          <p className="text-xl text-gray-300 mb-8"> 
            I'm always open to discussing new projects, creative ideas, or opportunities to be 
part of your visions. 
          </p> 
          <a  
            href="mailto:your.email@example.com" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white 
px-6 py-3 rounded-lg transition-colors" 
          > 
            <Mail size={20} /> 
            Get In Touch 
          </a> 
        </div> 
      </section> 
 
      {/* Footer */} 
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800"> 
        <p>© {new Date().getFullYear()} Stephi. All rights reserved.</p> 
      </footer> 
    </div> 
  ); 
} 
 
export default App; 