
import { ExternalLink, Github } from "lucide-react";
import ebookImg from '../images/ebook.png';
import portfolioImg from '../images/portfolio.png';


const Projects = () => {
  const projects = [
  {
  title: "E-Book Store Application",
  description:
    "A dynamic web-based e-book store where users can register, browse, sell and purchase old and new books online. Built with Java, JSP, and JDBC, and powered by a MySQL database for storing user and order data.",
  image: ebookImg,
  technologies: ["Java", "JSP", "JDBC", "MySQL", "Apache Tomcat"],
  githubUrl: "https://github.com/shivamvarsh9654/E-Book-Store", // Replace with your repo link
},

    {
      title: "Responsive Portfolio Website",
      description:
        "A modern, fully responsive portfolio website showcasing frontend development skills. Built with React and Tailwind CSS, featuring smooth animations and mobile-first design approach.",
      // image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      image: portfolioImg,
      technologies: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
      liveUrl: "https://shivamvar-portfolio.netlify.app/",
      githubUrl: "https://github.com/shivamvarsh9654/Portfolio-New",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in
            React development, state management, and creating engaging user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
