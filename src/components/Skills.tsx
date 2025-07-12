
import { Code, Database, Globe, Smartphone, Palette, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Web Standards"],
      color: "from-orange-400 to-red-400",
    },
    {
      title: "React Ecosystem",
      icon: Code,
      skills: ["React.js", "JSX", "React Hooks", "Component Design", "React Router"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Styling & UI",
      icon: Palette,
      skills: ["Tailwind CSS", "CSS Grid", "Flexbox", "Animations", "UI/UX Principles"],
      color: "from-pink-400 to-rose-400",
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Java", "SQL / MySQL", "JDBC", "Servlet", "Hibernate"],
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Tools",
      icon: Zap,
      skills: ["Eclipse IDE ", "Git", "npm", "VS Code", "Chrome DevTools"],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Development",
      icon: Smartphone,
      skills: ["Mobile-First Design", "Performance Optimization", "Debugging", "Testing", "Code Review"],
      color: "from-indigo-400 to-blue-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My technical skills span across modern frontend technologies,
            with a focus on React development and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="text-slate-300">{skill}</span>
                    <div className="w-20 bg-slate-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        style={{
                          width: `${80 + Math.random() * 20}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
